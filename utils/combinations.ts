export class Combination {

  private values: number[];

  public constructor(numbers: number[]) {
    this.values = numbers;
  }

  public includeAll(numbers: string[] | number[]): boolean {
    let ok = true;
    for (const number of numbers) {
      ok &&= this.values.includes(Number(number));
    }
    return ok;
  }

  public any(numbers: string[] | number[] ): boolean {
    for (const number of numbers) {
      if (this.values.includes(Number(number))) return true;
    }
    return false;
  }

  public toString(): string {
    return this.values.join('-');
  }
}

export function findCombinations(n: number, x: number): Combination[] {
  const found: Combination[] = [];

  function backtrack(start: number, current: number[], sum: number): void {
    if (current.length === n && sum === x) {
      found.push(new Combination(current.slice()));
      return;
    }
    for (let i = start; i <= 9; i++) {
      current.push(i);
      backtrack(i + 1, current, sum + i);
      current.pop();
    }
  }

  backtrack(1, [], 0);
  return found;
}
