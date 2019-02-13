import { ISpriteType } from "../Utility/types";
import { Game } from "../scenes/game";

export class Projectile extends Phaser.Physics.Arcade.Sprite {
  constructor(sc: ISpriteType, xvel, yvel) {
    super(sc.scene, sc.x, sc.y, "_Units", 3);
    this.setScale(0.2, 0.2);

    sc.scene.physics.world.enable(this);
    sc.scene.physics.add.overlap(this, (sc.scene as Game).groundLayer, (collider) => this.hitWall);
    sc.scene.physics.add.overlap(this, (sc.scene as Game).enemies, (collider) => this.hitEnemy);
    
    sc.scene.add.existing(this);
    
    this.body.velocity.x = xvel;
    this.body.velocity.y = yvel;
  }

  hitEnemy(collider) {
    console.log(collider);
    this.destroy();
  }

  hitWall(collider) {
    console.log(collider);
    this.destroy();
  }
}