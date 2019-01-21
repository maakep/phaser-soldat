import * as Phaser from "phaser";
import Log from "../Utility/Log";

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: "_BootScene", active: true });
  }

  init() {
    Log("Booting");
  }

  preload () {
    Log("Load things necessary during preload scene");
  }

  create() {
    this.scene.start("preload");
  }
}