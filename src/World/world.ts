import Log from "../Utility/Log";

export function InitializeWorld(scene: Phaser.Scene) : Phaser.Tilemaps.StaticTilemapLayer {
  console.log("Creating world");
  let map = scene.make.tilemap({ key: "_World" });
  console.log(map);

  let tiles = map.addTilesetImage("Basic-Tileset", "_TileKey", 16, 16, 2, 4);
  console.log(tiles);
  
  let groundLayer = map.createStaticLayer(0, tiles, 0, 0);
  groundLayer.setCollisionByProperty({ collider: true }, true);

  scene.physics.world.bounds.width = groundLayer.width;
  scene.physics.world.bounds.height = groundLayer.height;

  scene.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height);
  return groundLayer;
}
