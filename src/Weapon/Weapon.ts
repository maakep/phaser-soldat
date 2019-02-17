import { ISpriteType } from "../Utility/types";

export abstract class Weapon extends Phaser.GameObjects.Sprite {
  damage: number;

  constructor(sc: ISpriteType) {
    var {scene, x, y} = sc;
    super(scene, x, y, "_Units", 3);
    this.setScale(1, 0.1);
    this.x += 3;
  }

  abstract Shoot(xvel: number, yvel: number): void;
}