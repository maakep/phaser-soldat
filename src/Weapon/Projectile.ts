import { ISpriteType } from "../Utility/types";
import { Game } from "../scenes/game";
import { Unit } from "../Unit/Unit";
import { Weapon } from "./weapon";

export class Projectile extends Phaser.Physics.Arcade.Sprite {
  damage: number;

  constructor(sc: ISpriteType, 
              xvel: number, 
              yvel: number, 
              weapon: Weapon) {
    super(sc.scene, sc.x, sc.y, "_Units", 3);
    this.setScale(0.2, 0.2);
    this.damage = weapon.damage;

    sc.scene.physics.world.enable(this);
    sc.scene.physics.add.collider(this, (sc.scene as Game).groundLayer, this.hitWall);
    sc.scene.physics.add.overlap(this, (sc.scene as Game).enemies, this.hitEnemy);
    
    sc.scene.add.existing(this);
    
    this.body.velocity.x = xvel;
    this.body.velocity.y = yvel;
  }

  hitEnemy = (collider1, enemy) => {
    enemy = enemy as Unit;
    console.log(enemy);
    enemy.Health -= this.damage;
    this.disableBody(true, true);
  }

  hitWall = (collider, wall) => {
    console.log("collided with wall", wall);
    this.disableBody(true, true);
  }
}