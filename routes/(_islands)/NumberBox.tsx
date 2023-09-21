// deno-lint-ignore-file
import { Signal } from "@preact/signals-core";
import IconPlus from "icons/plus.tsx";
import IconMinus from "icons/minus.tsx";

type NumberBoxProps = {
  label: string;
  value: Signal<number>;
};

export default function NumberBox(props: NumberBoxProps) {
  const { label, value } = props;
  const increment = () => value.value++;
  const decrement = () => value.value--;

  return (
    <>
      <p className="text(gray-700 sm) font-semibold m-1">{label}</p>

      <div className="flex flex(row nowrap) h-16">
        <button
          className="flex justify-center items-center w-16 bg(gray-200 hover:gray-400) rounded-l-xl cursor-pointer focus:outline-none touch-manipulation"
          onClick={decrement}
        >
          <IconMinus class="w-7 h-7" />
        </button>

        <div className="flex justify-center items-center w-16">
          <input
            type="text"
            className="bg-gray-100 font-bold h-full w-full text(center 2xl)"
            value={value.value}
            disabled
          />
        </div>

        <button
          className="flex justify-center items-center w-16 bg-gray-200 hover:bg-gray-400 rounded-r-xl cursor-pointer focus:outline-none touch-manipulation"
          onClick={increment}
        >
          <IconPlus class="w-7 h-7" />
        </button>
      </div>
    </>
  );
}
