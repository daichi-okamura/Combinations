import { useEffect, useState } from "preact/hooks";
import {
  Combination,
  findCombinations,
  SelectedNumbers,
} from "../libs/combinations.ts";
import NumberBox from "./NumberBox.tsx";
import NumberSelectors from "./NumberSelectors.tsx";

type CombinationsProps = { count: number; sum: number };

export default function Combinations(props: CombinationsProps) {
  const [count, setCount] = useState<number>(props.count);
  const [sum, setSum] = useState<number>(props.sum);
  const [combinations, setCombinations] = useState<Combination[]>([]);
  const [inclusionNumbers, setInclusionNumbers] = useState<SelectedNumbers>(
    new SelectedNumbers(),
  );
  const [exclusionNumbers, setExclusionNumbers] = useState<SelectedNumbers>(
    new SelectedNumbers(),
  );

  useEffect(() => {
    let results = findCombinations(count as number, sum as number);

    const target1 = inclusionNumbers.values;
    results = results.filter((c) => c.includeAll(target1));

    const target2 = exclusionNumbers.values;
    results = results.filter((c) => !c.any(target2));

    setCombinations(results);
  }, [count, sum, [...inclusionNumbers.values], [...exclusionNumbers.values]]);

  return (
    <div class="bg-white rounded-xl shadow-lg shadow-black p-3">
      <div class="flex flex-wrap gap-2">
        <div class="">
          <div class="">
            <NumberBox
              label="count(n)"
              value={count}
              decrement={() => setCount((p: number) => Math.max(1, p - 1))}
              increment={() => setCount((p: number) => Math.min(9, p + 1))}
            />
          </div>
          <div class="">
            <NumberBox
              label="sum(x)"
              value={sum}
              decrement={() => setSum((p: number) => Math.max(1, p - 1))}
              increment={() => setSum((p: number) => Math.min(45, p + 1))}
            />
          </div>
        </div>

        <div>
          <div>
            <NumberSelectors
              label="inclusion"
              textColorOnSelected="blue"
              current={inclusionNumbers}
              setter={setInclusionNumbers}
            />
          </div>
          <div>
            <NumberSelectors
              label="exclusion"
              textColorOnSelected="red"
              current={exclusionNumbers}
              setter={setExclusionNumbers}
            />
          </div>
        </div>
      </div>

      <div>
        <div class="mt-5 font-bold text-2xl">
          <p>{combinations.map((c) => c.toString()).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
