import bus from "./bus";

class Preloader {
  constructor(manifest) {
    this.manifest = [];
    this.resources = {};
    this.loaded = 0;
    this.index = 0;
    this.queue = 0;
  }
  init(manifest, autostart) {
    if (manifest) {
      this.manifest = manifest;
      this.queue = manifest.length;
      this.manifest.forEach(el => {
        el.img = new Image();
        el.loaded = false;
      });
    }
    if (autostart == true) {
      this.start();
    }
  }
  addImage(el) {
    if (!this.manifest.find(item => item.id == el.id)) {
      el.img = new Image();
      el.loaded = false;
      this.manifest.push(el);
      this.queue = this.manifest.length;
    } else {
      console.warn("An item with this id is already in the queue.");
      return;
    }
  }
  start() {
    if (this.manifest.length > 0) {
      this.loadImage();
    } else {
      console.warn("The manifest is empty, nothing to load.");
    }
  }
  loadImage() {
    const { manifest, index } = this;
    let asset = manifest[index];
    // console.log("loading " + asset.id);
    // console.log(asset);
    asset.img.onload = evt => {
      asset.loaded = true;
      this.resources[asset.id] = asset;
      this.checkProgress();
    };
    asset.img.src = asset.url;
  }
  checkProgress() {
    ++this.loaded;
    // console.log("Loaded " + this.loaded + ". Queue is " + this.queue);
    if (this.loaded === this.queue) {
      this.onComplete();
    } else {
      this.loadImage(++this.index);
    }
  }
  onComplete() {
    // console.log(this.resources);
    bus.$emit("LOAD_COMPLETE");
  }
}

export default new Preloader();
