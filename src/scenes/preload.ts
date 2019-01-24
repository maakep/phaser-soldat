import * as Phaser from "phaser";
import Log from "../Utility/Log";

export class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "_PreloadScene", active: true });
    Log("Starting Preload Scene");
  }

  init() {
    console.log("Preload init");
  }

  preload () {
    console.log("Preload preload");
    
    // this.load.tilemapTiledJSON("_World", "/assets/map/BasicMap.json");
    
  }

  create() {
    this.scene.start("_GameScene");
  }
}