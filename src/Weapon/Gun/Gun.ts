import { Projectile } from "../Projectile";
import { ISpriteType } from "../../Utility/types";

export class Gun extends Projectile {
  constructor(sc: ISpriteType) {
    super(sc, 3);
    
  }
}