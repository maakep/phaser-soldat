import { Unit } from "../Unit";
import { ISpriteType } from "../../Utility/types";

export class Grunt extends Unit {
  constructor(sc: ISpriteType) {
    super(sc, "_Unit", 0, 30);
    this.body.velocity.x = 10;
    this.WalkAround();
  }

  async WalkAround() {
    this.body.velocity.x = 10;
    await this.Sleep(1000);
    this.body.velocity.x = -10;
  }

  Sleep(ms) {
    return new Promise(resolve => (window as any).setTimeout(resolve, ms));
  }

  Update(): void {
    
  }

  OnDeath(): void {
    this.destroy();
  }
}