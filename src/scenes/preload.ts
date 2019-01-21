import * as Phaser from "phaser";
import Log from "../Utility/Log";

export class Preload extends Phaser.Scene {
  /**
   *
   */
  constructor() {
    super({ key: "_PreloadScene", active: true });
  }

  init() {
    console.log("Preloading");
  }

  preload () {
    console.log("Load things necessary for Game scene");
    
    // this.load.tilemapTiledJSON("_World", "/assets/map/BasicMap.json");
    // this.load.spritesheet("_TileKey", "/assets/map/BasicTileset.png", { frameHeight: 16, frameWidth: 16 });
  }

  creat() {
    this.scene.start("game");
  }
}