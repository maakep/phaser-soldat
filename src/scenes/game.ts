import * as Phaser from "phaser";
import Log from "../Utility/Log";
import { InitializeWorld } from "../World/world";

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: "_Game", active: true });  
  }

  preload() {
    this.load.tilemapTiledJSON("_World", "/assets/map/BasicMap.json");
    this.load.spritesheet("_TileKey", "/assets/map/BasicTileset.png", { frameHeight: 16, frameWidth: 16 });
  }

  create() {
    InitializeWorld(this);
  }
}