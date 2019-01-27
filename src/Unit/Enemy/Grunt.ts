import { Unit } from "../Unit";
import { ISpriteType } from "../../Utility/types";
import { Wait } from "../../Utility/wait";

export class Grunt extends Unit {
  constructor(sc: ISpriteType) {
    super(sc, "_Units", 0, 30);
    this.body.velocity.x = 10;
    this.WalkAround();
  }

  async WalkAround() {
    const vel = Phaser.Math.RandomXY(new Phaser.Math.Vector2(0, 0));
    this.body.velocity.x = vel.x * 30;
    this.body.velocity.y = vel.y * 30;
    await Wait(1000);
    this.WalkAround();
  }

  Update(): void {
    
  }

  OnDeath(): void {
    this.destroy();
  }
}