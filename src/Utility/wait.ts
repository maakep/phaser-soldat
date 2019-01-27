export function Wait(ms): Promise<void> {
  return new Promise(resolve => (window as any).setTimeout(resolve, ms));
}