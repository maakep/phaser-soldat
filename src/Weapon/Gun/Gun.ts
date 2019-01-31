import { ISpriteType } from "../../Utility/types";
import { Weapon } from "../weapon";
import { Projectile } from "../Projectile";
import { normalize } from "../../Utility";

export class Gun extends Weapon {
  speed = 1200;

  constructor(sc: ISpriteType) {
    super(sc);

  }

  Shoot(xvel: number, yvel: number) {
    var sc: ISpriteType = { scene: this.scene, x: this.x, y: this.y };
    const direction = normalize(xvel, yvel);
    new Projectile(sc, direction.x * this.speed, direction.y * this.speed);
  }
}