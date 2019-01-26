import * as Phaser from "phaser";
import Log from "../Utility/Log";

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: "_BootScene" });
    Log("Constructor Boot Scene");
  }

  init() {
    console.log("Boot init");
  }

  preload () {
    console.log("Boot preload");
  }

  create() {
    this.scene.start("_PreloadScene");
  }
}