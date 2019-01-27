import * as Phaser from 'phaser';
import { IControls } from './controls';
import { ISpriteType } from '../../Utility/types';
import { Unit } from '../Unit';

export class Player extends Unit {
  controls: IControls;
  mouse: Phaser.Input.Pointer;

  constructor(sc: ISpriteType) {
    super(sc, "_Units", 1, 100);
    this.mouse = this.scene.input.mousePointer;
    var {scene, x, y } = sc;

    this.InitializeControls();

    scene.input.on("pointerdown", (pointer) => {
      this.Shoot();
    });
  }

  speed: number = 70;
  Update() {
    const body = this.body as Phaser.Physics.Arcade.Body;
    this.HandleMovement(body);
    this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.mouse.x, this.mouse.y);
  }

  Shoot() {
    this.Health -= 10;
  }

  OnDeath() {
    console.log("Player died");
  }

  HandleMovement(body: Phaser.Physics.Arcade.Body) {
    body.velocity.reset();

    if (this.controls.w.isDown)       body.velocity.y = -this.speed;
    else if (this.controls.s.isDown)  body.velocity.y = this.speed;

    if (this.controls.a.isDown)       body.velocity.x = -this.speed;
    else if (this.controls.d.isDown)  body.velocity.x = this.speed;
  }

  InitializeControls() {
    this.controls = {
      w: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      a: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      s: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      d: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      q: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
      e: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
      f: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
      space: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE), 
    };
  }
}