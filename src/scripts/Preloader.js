import bus from "./bus";

export default class Preload {
  constructor(manifest) {
    this.manifest = manifest;
    this.assets = {};
    this.loaded = 0;
    this.queue = manifest.length;
  }
  load() {
    this.manifest.forEach(el => {
      let img = new Image();
      let data = {
        id: el.id,
        src: el.url,
        img
      };
      img.onload(data => {
        this.assets[data.id] = data;
        this.checkProgress();
      }).src = "el.url";
    });
  }
  checkProgress() {
    ++this.loaded;
    console.log("Loaded " + this.loaded + ". Queue is" + this.queue);
    if (this.loaded === this.queue) {
      this.onComplete();
    }
  }
  onComplete() {
    bus.emit("LOAD_COMPLETE");
  }
}
