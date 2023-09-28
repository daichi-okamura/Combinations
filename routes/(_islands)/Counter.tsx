// deno-lint-ignore-file
import { Signal } from "@preact/signals-core";
import IconCirclePlus from "icons/circle-plus.tsx";
import IconCircleMinus from "icons/circle-minus.tsx";

type CounterProps = {
  label: string;
  value: Signal<number>;
};

export default function Counter({ label, value }: CounterProps) {
  const increment = () => value.value++;
  const decrement = () => {
    if (value.value === 1) return;
    value.value--;
  };

  return (
    <>
      <p className="text(gray-700 sm) font-semibold m-1">{label}</p>

      <div className="flex flex(row nowrap) h-16">
        <button
          className="flex items-center"
          onClick={decrement}
        >
          <IconCircleMinus class="w-16 h-16 text(gray-200 hover:gray-300)" />
        </button>

        <div className="flex items-center w-16">
          <input
            type="text"
            className="font-bold h-full w-full text(center 4xl) bg-white"
            value={value.value}
            disabled
          />
        </div>

        <button
          className="flex items-center"
          onClick={increment}
        >
          <IconCirclePlus class="w-16 h-16 text(gray-200 hover:gray-300)" />
        </button>
      </div>
    </>
  );
}
