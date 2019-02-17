import { ISpriteType } from "../../Utility/types";
import { Weapon } from "../weapon";
import { Projectile } from "../Projectile";
import { normalize } from "../../Utility";

export class Gun extends Weapon {
  private speed = 1200;

  constructor(sc: ISpriteType) {
    super(sc);
    this.damage = 10;
  }

  Shoot(xvel: number, yvel: number) {
    const sc: ISpriteType = { scene: this.scene, x: this.parentContainer.x, y: this.parentContainer.y };
    const direction = normalize(xvel, yvel);
    new Projectile(sc, direction.x * this.speed, direction.y * this.speed, this);
  }
}