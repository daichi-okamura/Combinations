import { batch, useSignal } from "@preact/signals";
import { Combination, findCombinations } from "../../libs/combinations.ts";
import NumberBox from "./NumberBox.tsx";
import NumberSelectors from "./NumberSelectors.tsx";

type CombinationsProps = { count: number; sum: number };

export default function Combinations(props: CombinationsProps) {
  const count = useSignal<number>(props.count);
  const sum = useSignal<number>(props.sum);
  const includes = useSignal<number[]>([]);
  const excludes = useSignal<number[]>([]);
  const combinations = useSignal<Combination[]>([]);
  batch(() => {
    let results = findCombinations(count.value, sum.value);
    results = results.filter((c) => c.includeAll(includes.value));
    results = results.filter((c) => !c.any(excludes.value));
    combinations.value = results;
  });

  return (
    <div className="bg-white rounded-xl shadow(lg black) p-3">
      <div className="flex flex-wrap gap-2">
        <div>
          <div>
            <NumberBox
              label="count(n)"
              value={count}
            />
          </div>
          <div>
            <NumberBox
              label="sum(x)"
              value={sum}
            />
          </div>
        </div>

        <div>
          <div className="">
            <NumberSelectors
              label="include"
              textColorOnSelected="blue"
              selected={includes}
            />
          </div>
          <div>
            <NumberSelectors
              label="exclude"
              textColorOnSelected="red"
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
