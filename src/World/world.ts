import Log from "../Utility/Log";

export function InitializeWorld(scene: Phaser.Scene) : Phaser.Tilemaps.StaticTilemapLayer {
  console.log("Creating world");
  let map = scene.make.tilemap({ key: "_World" });
  let tiles = map.addTilesetImage("map3_tiles", "_TileKey", 16, 16, 0, 0);

  let groundLayer = map.createStaticLayer(0, tiles, 0, 0);
  groundLayer.setCollisionByProperty({ collide: true }, true);

  scene.physics.world.bounds.width = groundLayer.width;
  scene.physics.world.bounds.height = groundLayer.height;

  scene.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height);
  return groundLayer;
}
