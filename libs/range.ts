function* range(start: number, end: number): Generator<number, void> {
  for (let i = start; i <= end;) yield i++;
}

export default range
