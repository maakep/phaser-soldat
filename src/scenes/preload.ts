import * as Phaser from "phaser";
import Log from "../Utility/Log";

export class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "_PreloadScene" });
    Log("Constructor Preload Scene");
  }

  init() {
    console.log("Preload init");
  }

  preload () {
    console.log("Preload preload");
    
    this.load.tilemapTiledJSON("_World", "assets/map/map3.json");
    this.load.spritesheet("_TileKey", "assets/map/dungeon/dungeon_tiles.png", { frameHeight: 16, frameWidth: 16 });
    this.load.spritesheet("_Units", "assets/map/BasicTileset.png", { frameHeight: 16, frameWidth: 16, margin: 4, spacing: 2 })
  }

  create() {
    this.scene.start("_GameScene");
  }
}