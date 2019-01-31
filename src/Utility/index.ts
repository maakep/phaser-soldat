export function Do(times: number, func: () => void) {
  for (var i = 0; i <= times; i++)
    func();
}

export function normalize(xVel: number, yVel: number): Phaser.Math.Vector2 {
  const vector = new Phaser.Math.Vector2(xVel, yVel);
  return vector.normalize();
}