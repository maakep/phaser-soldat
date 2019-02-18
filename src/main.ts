import * as Phaser from "phaser";
import { Preload } from "./scenes/preload";
import { Boot } from "./scenes/boot";
import { Game } from "./scenes/game";


class Main extends Phaser.Game {
  constructor() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      width: 1200,
      height: 900,
      scene: [Boot, Preload, Game],
      physics: { 
        default: 'arcade',
        arcade: {
          debug: true,
          debugShowBody: true,
          debugShowStaticBody: true,
          debugShowVelocity: true,
          debugVelocityColor: 0xffff00,
          debugBodyColor: 0x0000ff,
          debugStaticBodyColor: 0xffffff
        }
      } as PhysicsConfig,

    };
    super(config);
    
    this.scene.start("_BootScene");
  }
}

window.onload = () => {
  const GameApp: Phaser.Game = new Main();
};