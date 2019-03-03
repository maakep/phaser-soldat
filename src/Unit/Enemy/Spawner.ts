import { Unit } from "../Unit";
import { ISpriteType } from "../../Utility/types";
import { Grunt } from "./Grunt";
import { Game } from "../../scenes/game";

export class Spawner extends Unit {
  game: Game;
  event: Phaser.Time.TimerEvent;
  createUnit: (init: ISpriteType) => Unit;

  constructor(sc: ISpriteType, createUnit: (init: ISpriteType) => Unit) {
    super(sc, "_Units", 2, 100);
    this.game = sc.scene as Game;
    this.createUnit = createUnit;
    this.Health = 200;

    this.setScale(3, 3);
    const eventConfig: TimerEventConfig = {
      delay: 2500,
      callback: this.Spawn,
      callbackScope: this,
      loop: true,
    };
    this.event = sc.scene.time.addEvent(eventConfig);
  }

  Spawn(): Unit {
    var unit = this.createUnit({ scene: this.scene, x: this.x, y: this.y + 30 });
    this.game.enemies.add(unit);
    return unit;
  }

  Update(): void {

  }

  OnDeath(): void {
    this.event.destroy();
    this.destroy();
  }
}