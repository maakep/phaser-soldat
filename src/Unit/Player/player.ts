import * as Phaser from 'phaser';
import { IControls } from './controls';
import { ISpriteType } from '../../Utility/types';
import { Unit } from '../Unit';
import { Weapon } from '../../Weapon/weapon';
import { Gun } from '../../Weapon/Gun/Gun';

export class Player extends Unit {
  controls: IControls;
  mouse: Phaser.Input.Pointer;
  weapon: Weapon;

  constructor(sc: ISpriteType) {
    super(sc, "_Units", 1, 100);
    this.mouse = this.scene.input.mousePointer;
    var {scene, x, y } = sc;

    scene.input.on("pointerdown", (pointer: PointerEvent) => {
      var dirX = pointer.x - this.parentContainer.x;
      var dirY = pointer.y - this.parentContainer.y;
      this.Shoot(dirX, dirY);
    });
  }

  Update() { }

  Shoot(xDir: number, yDir: number) {
    this.weapon.Shoot(xDir, yDir);
  }

  OnDeath() {
    console.log("Player died");
  }
}