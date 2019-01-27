export function Do(times: number, func: () => void) {
  for (var i = 0; i <= times; i++)
    func();
}