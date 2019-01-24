import * as Phaser from "phaser";
import Log from "../Utility/Log";

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: "_BootScene", active: true });
    Log("Starting Boot Scene");
  }

  init() {
    console.log("Boot init");
  }

  preload () {
    Log("Boot preload");
  }

  create() {
    this.scene.start("_PreloadScene");
  }
}