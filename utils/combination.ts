export class Combination {
  private values: number[];
  public constructor(numbers: number[]) {
    this.values = numbers;
  }
  public toString(): string {
    return this.values.join("-");
  }
}

export function findCombinations(
  n: number,
  x: number,
  includes: number[],
  excludes: number[],
): Combination[] {
  const result: Combination[] = [];
  const limit = Math.min(9, x);

  function backtrack(start: number, current: number[], sum: number): void {
    if (current.length > n || start > x) return;
    const found = current.length === n && sum === x &&
      includesAll(current, includes);
    // console.log("current: " + current + (found ? " (found)" : ""));
    if (found) {
      result.push(new Combination(current.slice()));
      return;
    }
    for (let i = start; i <= limit; i++) {
      if (excludes.includes(i)) continue;
      current.push(i);
      backtrack(i + 1, current, sum + i);
      current.pop();
    }
  }

  backtrack(1, [], 0);
  return result;
}

function includesAll(targets: number[], numbers: number[]): boolean {
  for (const number of numbers) {
    if (!targets.includes(Number(number))) return false;
  }
  return true;
}
