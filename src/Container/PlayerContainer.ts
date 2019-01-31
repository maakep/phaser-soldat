import { Container } from ".";
import { ISpriteType } from "../Utility/types";
import { IControls } from "../Unit/Player/controls";

export class PlayerContainer extends Container {
  controls: IControls;
  mouse: Phaser.Input.Pointer;
  speed = 70;

  constructor(sc: ISpriteType, children?: Phaser.GameObjects.GameObject[]) {
    super(sc, children);
    this.InitializeControls();
    this.mouse = this.scene.input.mousePointer;
    this.scene.physics.world.enable(this);
  }

  Update() {
    const body = this.body as Phaser.Physics.Arcade.Body;
    this.HandleMovement(body);
    this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.mouse.worldX, this.mouse.worldY);
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