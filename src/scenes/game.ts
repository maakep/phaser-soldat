import * as Phaser from "phaser";
import Log from "../Utility/Log";
import { InitializeWorld } from "../World/world";

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: "_GameScene" });
    Log("Constructor Game Scene");
  }

  preload() {
    console.log("Game preload");
  }

  create() {
    InitializeWorld(this);
  }
}