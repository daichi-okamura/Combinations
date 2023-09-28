import { batch, useSignal } from "@preact/signals";
import { Combination, findCombinations } from "../../utils/combination.ts";
import Counter from "./Counter.tsx";
import Selector from "./Selector.tsx";

type CombinationsProps = { count: number; sum: number };

export default function Combinations(props: CombinationsProps) {
  const count = useSignal<number>(props.count);
  const sum = useSignal<number>(props.sum);
  const includes = useSignal<number[]>([]);
  const excludes = useSignal<number[]>([]);
  const combinations = useSignal<Combination[]>([]);

  batch(() => {
    combinations.value = findCombinations(
      count.value,
      sum.value,
      includes.value,
      excludes.value,
    );
  });

  return (
    <div className="bg-white rounded-xl shadow(lg black) p-3">
      <div className="flex flex-wrap gap-4">
        <div>
          <div>
            <Counter
              label="count(n)"
              value={count}
            />
          </div>
          <div>
            <Counter
              label="sum(x)"
              value={sum}
            />
          </div>
        </div>

        <div>
          <div>
            <Selector
              label="include"
              selectedColor="blue"
              selected={includes}
            />
          </div>
          <div>
            <Selector
              label="exclude"
              selectedColor="red"
              selected={excludes}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-5 font-bold text-2xl">
          <p>{combinations.value.map((c) => c.toString()).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
