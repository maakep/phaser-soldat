import * as Phaser from 'phaser';
import { ISpriteType } from '../Utility/types';
import { Game } from '../scenes/game';

export abstract class Unit extends Phaser.Physics.Arcade.Sprite {
  private _health: number;
  public get Health() { return this._health; }
  public set Health(value) 
  { 
    this._health = value 
    if (this._health <= 0)
      this.OnDeath();
  }

  constructor(sc: ISpriteType, texture: string, frame: number, health: number) {
    super(sc.scene, sc.x, sc.y , texture, frame);
    this.Health = health;
    sc.scene.physics.world.enable(this);
    sc.scene.add.existing(this);
  }

  abstract Update(): void;
  abstract OnDeath(): void;
}