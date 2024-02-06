import { useState } from "preact/hooks";
import { useSignal, useSignalEffect } from "@preact/signals";
import { Signal } from "@preact/signals-core";
import { Combination, findCombinations } from "../../utils/combination.ts";
import { nextGroupNumber } from "../../utils/group-number.ts";
import IconCirclePlus from "icons/circle-plus.tsx";
import IconCircleMinus from "icons/circle-minus.tsx";
import IconCircleNumber1 from "icons/circle-number-1.tsx";
import IconCircleNumber2 from "icons/circle-number-2.tsx";
import IconCircleNumber3 from "icons/circle-number-3.tsx";
import IconCircleNumber4 from "icons/circle-number-4.tsx";
import IconCircleNumber5 from "icons/circle-number-5.tsx";
import IconCircleNumber6 from "icons/circle-number-6.tsx";
import IconCircleNumber7 from "icons/circle-number-7.tsx";
import IconCircleNumber8 from "icons/circle-number-8.tsx";
import IconCircleNumber9 from "icons/circle-number-9.tsx";

export function Combinations({ defaultCount, defaultSum }: {
  defaultCount: number;
  defaultSum: number;
}) {
  const count = useSignal<number>(defaultCount);
  const sum = useSignal<number>(defaultSum);
  const includes = useSignal<number[]>([]);
  const excludes = useSignal<number[]>([]);
  const combinations = useSignal<Combination[]>([]);

  useSignalEffect(() => {
    combinations.value = findCombinations(
      count.value,
      sum.value,
      includes.value,
      excludes.value,
    );
  });

  return (
    <div className="bg-white rounded-xl shadow-lg shadow-black p-3">
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

export function Counter({ label, value }: {
  label: string;
  value: Signal<number>;
}) {
  const increment = () => value.value++;
  const decrement = () => {
    if (value.value === 1) return;
    value.value--;
  };

  return (
    <>
      <p className="text-gray-700 text-sm font-semibold m-1">{label}</p>

      <div className="flex flex-row flex-nowrap h-16">
        <button
          className="flex items-center"
          onClick={decrement}
        >
          <IconCircleMinus class="w-16 h-16 text-gray-200 hover:text-gray-300" />
        </button>

        <div className="flex items-center w-16">
          <input
            type="text"
            className="font-bold h-full w-full text-center text-4xl bg-white"
            value={value.value}
            disabled
          />
        </div>

        <button
          className="flex items-center"
          onClick={increment}
        >
          <IconCirclePlus class="w-16 h-16 text-gray-200 hover:text-gray-300" />
        </button>
      </div>
    </>
  );
}

export function Selector({ label, selectedColor, selected }: {
  label: string;
  selected: Signal<number[]>;
  selectedColor: string;
}) {
  function setSelectedNumber(number: number, checked: boolean): void {
    const alreadyExists = selected.value.includes(number);
    if (checked && !alreadyExists) {
      selected.value = [...selected.value, number];
    }
    if (!checked && alreadyExists) {
      selected.value = selected.value.filter((n) => n !== number);
    }
  }

  const groupNumber = nextGroupNumber();

  return (
    <div>
      <p className="text-gray-700 text-sm font-semibold m-1">{label}</p>
      <div className="flex flex-wrap">
        <div className="flex">
          <Item
            groupNumber={groupNumber}
            number={1}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
          <Item
            groupNumber={groupNumber}
            number={2}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
          <Item
            groupNumber={groupNumber}
            number={3}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
          <Item
            groupNumber={groupNumber}
            number={4}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
          <Item
            groupNumber={groupNumber}
            number={5}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
        </div>
        <div className="flex">
          <Item
            groupNumber={groupNumber}
            number={6}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
          <Item
            groupNumber={groupNumber}
            number={7}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
          <Item
            groupNumber={groupNumber}
            number={8}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
          <Item
            groupNumber={groupNumber}
            number={9}
            selectedColor={selectedColor}
            onChangeHandler={setSelectedNumber}
          />
        </div>
      </div>
    </div>
  );
}

function Item({ groupNumber, number, selectedColor, onChangeHandler }: {
  groupNumber: string;
  number: number;
  onChangeHandler: (number: number, checked: boolean) => void;
  selectedColor: string;
}) {
  const id = `item-${groupNumber}-${number}`;
  const [checked, setChecked] = useState<boolean>(false);

  const color = checked
    ? `text-${selectedColor}-500`
    : "text-gray-200 hover:text-gray-300";
  let icon = null;
  switch (number) {
    case 1:
      icon = <IconCircleNumber1 class={`w-16 h-16 ${color}`} />;
      break;
    case 2:
      icon = <IconCircleNumber2 class={`w-16 h-16 ${color}`} />;
      break;
    case 3:
      icon = <IconCircleNumber3 class={`w-16 h-16 ${color}`} />;
      break;
    case 4:
      icon = <IconCircleNumber4 class={`w-16 h-16 ${color}`} />;
      break;
    case 5:
      icon = <IconCircleNumber5 class={`w-16 h-16 ${color}`} />;
      break;
    case 6:
      icon = <IconCircleNumber6 class={`w-16 h-16 ${color}`} />;
      break;
    case 7:
      icon = <IconCircleNumber7 class={`w-16 h-16 ${color}`} />;
      break;
    case 8:
      icon = <IconCircleNumber8 class={`w-16 h-16 ${color}`} />;
      break;
    case 9:
      icon = <IconCircleNumber9 class={`w-16 h-16 ${color}`} />;
      break;
  }

  return (
    <label
      htmlFor={id}
      className={`flex items-center cursor-pointer`}
    >
      <input
        id={id}
        type="checkbox"
        name={groupNumber}
        value={number}
        className="hidden"
        onInput={(e) => {
          const { value, checked: isChecked } = e.target as HTMLInputElement;
          setChecked(isChecked);
          onChangeHandler(Number(value), isChecked);
        }}
      />
      {icon}
    </label>
  );
}
