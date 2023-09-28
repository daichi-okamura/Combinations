let groupNumber = 1;

export function nextGroupNumber(): string {
  const next = groupNumber++;
  return String(next);
}
