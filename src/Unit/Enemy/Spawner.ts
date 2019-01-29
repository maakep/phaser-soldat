import { Unit } from "../Unit";
import { ISpriteType } from "../../Utility/types";
import { Grunt } from "./Grunt";

export class Spawner<T extends Unit> extends Unit {
  
  constructor(sc: ISpriteType) {
    super(sc, "_Units", 2, 100);
    this.setScale(3, 3);
    sc.scene.time.addEvent({ delay: 1000, callback: this.Spawn, callbackScope: this });
  }

  Spawn(): Unit {
    return new Grunt({scene: this.scene, x: this.x, y: this.y});
  }

  Update(): void {

  }
  
  OnDeath(): void {
    this.destroy();
  }
}