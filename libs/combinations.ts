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

  public any(numbers: string[] | number[]): boolean {
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

export class SelectedNumbers {

  public _values: number[];
  get values(): number[] {
    return this._values;
  }

  public constructor(values: number[] = []) {
    this._values = values;
  }

  public add(value: number | string): SelectedNumbers {
    if (typeof value === 'string') {
      this._values.push(Number(value));
    } else {
      this._values.push(value);
    }
    return this;
  }

  public remove(value: number | string): SelectedNumbers {
    if (typeof value === 'string') {
      this._values.splice(this.values.indexOf(Number(value)), 1);
    } else {
      this._values.splice(this.values.indexOf(value), 1);
    }
    return this;
  }
}
