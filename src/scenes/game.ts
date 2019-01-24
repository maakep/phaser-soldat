import * as Phaser from "phaser";
import Log from "../Utility/Log";
import { InitializeWorld } from "../World/world";

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: "_GameScene", active: true });
    Log("Starting Game Scene")
  }

  preload() {
    console.log("Game init");
    this.load.tilemapTiledJSON("_World", "assets/map/map2.json");
    this.load.spritesheet("_TileKey", "/assets/map/BasicTileset.png", { frameHeight: 16, frameWidth: 16 });
  }

  create() {
    InitializeWorld(this);
  }

  update() {

  }
}