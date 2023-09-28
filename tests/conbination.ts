import { assertEquals } from "$std/testing/asserts.ts";
import { findCombinations } from "../utils/combination.ts";

Deno.test("#1 findCombinations without options", () => {
  const result = findCombinations(3, 7, [], []);
  assertEquals(result.length, 1);
  assertEquals(result[0].toString(), "1-2-4");
});

Deno.test("#2 findCombinations with includes option", () => {
  const result = findCombinations(3, 8, [3], []);
  assertEquals(result.length, 1);
  assertEquals(result[0].toString(), "1-3-4");
});

Deno.test("#3 findCombinations with excludes option", () => {
  const result = findCombinations(3, 8, [], [3]);
  assertEquals(result.length, 1);
  assertEquals(result[0].toString(), "1-2-5");
});

Deno.test("#4 findCombinations with includes & excludes options", () => {
  const result = findCombinations(3, 9, [2], [3]);
  assertEquals(result.length, 1);
  assertEquals(result[0].toString(), "1-2-6");
});
