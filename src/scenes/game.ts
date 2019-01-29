import * as Phaser from "phaser";
import Log from "../Utility/Log";
import { InitializeWorld } from "../World/world";
import { Player } from "../Unit/Player/player";
import { Grunt } from "../Unit/Enemy/Grunt";
import { Do } from "../Utility/do";
import { Spawner } from "../Unit/Enemy/Spawner";

export class Game extends Phaser.Scene {
  player: Player;
  groundLayer: Phaser.Tilemaps.StaticTilemapLayer;
  
  constructor() {
    super({ key: "_GameScene" });
    Log("Constructor Game Scene");
  }

  preload() {
    console.log("Game preload");
  }

  create() {
    // Map
    this.groundLayer = InitializeWorld(this);

    // Player
    this.player = new Player({scene: this, x: 30, y: 30});
    this.cameras.main.startFollow(this.player, true);
    

    // Enemy
    new Spawner({scene: this, x: 50, y: 50});
    Do(1000, () => {
      new Grunt({scene: this, x: Phaser.Math.Between(20, 1400), y: Phaser.Math.Between(20, 1400)});
    });
  }

  update() {
    this.player.Update();
  }
}