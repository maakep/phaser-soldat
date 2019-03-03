import { ISpriteType } from "../Utility/types";


export class Container extends Phaser.GameObjects.Container {
  constructor(sc: ISpriteType, children?: Phaser.GameObjects.GameObject[]) {
    const { scene, x, y } = sc;
    super(scene, x, y, children);
    this.scene.add.existing(this);
  }
}
