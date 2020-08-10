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
    this.manifest = manifest;
    this.queue = manifest.length;
    this.manifest.forEach(el => {
      el.img = new Image();
      el.loaded = false;
    });
    if (autostart == true) {
      this.loadImage();
    }
  }
  loadImage() {
    const { manifest, index } = this;
    let asset = manifest[index];
    console.log("loading " + asset.id);
    console.log(asset);
    asset.img.onload = evt => {
      asset.loaded = true;
      this.resources[asset.id] = asset;
      this.checkProgress();
    };
    asset.img.src = asset.url;
  }
  checkProgress() {
    ++this.loaded;
    console.log("Loaded " + this.loaded + ". Queue is " + this.queue);
    if (this.loaded === this.queue) {
      this.onComplete();
    } else {
      this.loadImage(++this.index);
    }
  }
  onComplete() {
    console.log(this.resources);
    bus.$emit("LOAD_COMPLETE");
  }
}

export default new Preloader();
