import * as Phaser from "phaser";
import Log from "../Utility/Log";
import { InitializeWorld } from "../World/world";
import { Player } from "../Unit/Player/player";
import { Grunt } from "../Unit/Enemy/Grunt";
import { Do } from "../Utility";
import { Spawner } from "../Unit/Enemy/Spawner";
import { Container } from "../Container";
import { PlayerContainer } from "../Container/PlayerContainer";
import { Gun } from "../Weapon/Gun/Gun";
import { ISpriteType } from "../Utility/types";

export class Game extends Phaser.Scene {
  player: Player;
  groundLayer: Phaser.Tilemaps.StaticTilemapLayer;
  enemies: Phaser.Physics.Arcade.Group;
  playerContainer: PlayerContainer;

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
    this.player = new Player({ scene: this, x: 0, y: 0 });

    var weapon = new Gun({ scene: this, x: this.player.x, y: this.player.y });
    this.player.weapon = weapon;

    this.playerContainer = new PlayerContainer({ scene: this, x: 150, y: 150 }, [this.player, weapon]);
    this.physics.add.collider(this.playerContainer, this.groundLayer);
    this.cameras.main.startFollow(this.playerContainer, true);

    // Enemy
    this.enemies = this.physics.add.group();
    this.physics.add.collider(this.enemies, this.groundLayer);
    this.physics.add.collider(this.enemies, this.playerContainer);

    const spawners = this.physics.add.staticGroup();
    spawners.add(
      new Spawner({ scene: this, x: 50, y: 50 }, (ist: ISpriteType) => {
        return new Grunt(ist);
      })
    );
  }

  update() {
    this.playerContainer.Update();
  }
}