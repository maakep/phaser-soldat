import { Unit } from "../Unit";
import { ISpriteType } from "../../Utility/types";
import { Grunt } from "./Grunt";
import { Game } from "../../scenes/game";

export class Spawner<T extends Unit> extends Unit {
  game: Game; 

  constructor(sc: ISpriteType) {
    super(sc, "_Units", 2, 100);
    this.game = sc.scene as Game;

    this.setScale(3, 3);
    
    const eventConfig: TimerEventConfig = { 
      delay: 2500,
      callback: this.Spawn,
      callbackScope: this,
      loop: true,
    };
    sc.scene.time.addEvent(eventConfig);
  }

  Spawn(): Unit {
    var unit = new Grunt({scene: this.scene, x: this.x, y: this.y + 30});
    this.game.enemies.add(unit);
    return unit
  }

  Update(): void {

  }
  
  OnDeath(): void {
    this.destroy();
  }
}