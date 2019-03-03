import { Unit } from "../Unit";
import { ISpriteType } from "../../Utility/types";
import { Wait } from "../../Utility/wait";

export class Grunt extends Unit {
  isDead: boolean = false;

  constructor(sc: ISpriteType) {
    super(sc, "_Units", 0, 30);
    this.Health = 50;
    sc.scene.physics.world.enable(this);
    this.WalkAround();
  }

  async WalkAround() {
    if (this.isDead)
      return;

    const vel = Phaser.Math.RandomXY(new Phaser.Math.Vector2(0, 0));
    const body = this.body as Phaser.Physics.Arcade.Body;

    body.velocity.x = vel.x * 30;
    body.velocity.y = vel.y * 30;

    await Wait(1000);
    this.WalkAround();
  }

  Update(): void {

  }

  OnDeath(): void {
    this.isDead = true;
    this.destroy();
  }
}