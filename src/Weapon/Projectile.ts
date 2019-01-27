import { ISpriteType } from "../Utility/types";
import { Game } from "../scenes/game";

export abstract class Projectile extends Phaser.Physics.Arcade.Sprite {
  constructor(sc: ISpriteType, frame) {
    super(sc.scene, sc.x, sc.y, "_Unit", frame);
    this.setScale(0.2, 0.2);
    sc.scene.physics.world.enable(this);
    sc.scene.add.existing(this);
    sc.scene.physics.add.collider(this, (sc.scene as Game).groundLayer);
  }
}