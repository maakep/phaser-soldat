import { ISpriteType } from "../Utility/types";

export abstract class Weapon extends Phaser.GameObjects.Sprite {
  constructor(sc: ISpriteType) {
    var {scene, x, y} = sc;
    super(scene, x, y, "_Units", 3);
    this.setScale(0.1, 1);
  }

  abstract Shoot(xvel: number, yvel: number): void;
}