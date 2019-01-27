import * as Phaser from "phaser";
import Log from "../Utility/Log";
import { InitializeWorld } from "../World/world";
import { Player } from "../Unit/Player/player";

export class Game extends Phaser.Scene {
  player!: Player;
  
  constructor() {
    super({ key: "_GameScene" });
    Log("Constructor Game Scene");
  }

  preload() {
    console.log("Game preload");
  }

  create() {
    var groundLayer = InitializeWorld(this);
    this.player = new Player(this);
    this.physics.add.collider(this.player, groundLayer);

  }

  update() {
    this.player.update();
  }
}