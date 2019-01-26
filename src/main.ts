import * as Phaser from "phaser";
import { Preload } from "./scenes/preload";
import { Boot } from "./scenes/boot";
import { Game } from "./scenes/game";


class Main extends Phaser.Game {
  constructor() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: [Boot, Preload, Game]
    };
    super(config);
    
    this.scene.start("_BootScene");
  }
}

window.onload = () => {
  const GameApp: Phaser.Game = new Main();
};