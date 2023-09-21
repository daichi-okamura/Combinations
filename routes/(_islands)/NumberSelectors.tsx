// deno-lint-ignore-file
import { Signal } from "@preact/signals-core";
import { useRef, useState } from "preact/hooks";
import IconCircleNumber1 from "icons/circle-number-1.tsx";
import IconCircleNumber2 from "icons/circle-number-2.tsx";
import IconCircleNumber3 from "icons/circle-number-3.tsx";
import IconCircleNumber4 from "icons/circle-number-4.tsx";
import IconCircleNumber5 from "icons/circle-number-5.tsx";
import IconCircleNumber6 from "icons/circle-number-6.tsx";
import IconCircleNumber7 from "icons/circle-number-7.tsx";
import IconCircleNumber8 from "icons/circle-number-8.tsx";
import IconCircleNumber9 from "icons/circle-number-9.tsx";

type NumberSelectorsProps = {
  label: string;
  textColorOnSelected: string;
  selected: Signal<number[]>;
};

export default function NumberSelectors(props: NumberSelectorsProps) {
  const groupName = crypto.randomUUID();
  const ref = useRef<HTMLInputElement>(null!);
  const { label, textColorOnSelected, selected } = props;

  function setNumber(number: number, checked: boolean): void {
    const alreadyExists = selected.value.includes(number);
    if (checked && !alreadyExists) {
      selected.value = [...selected.value, number];
    }
    if (!checked && alreadyExists) {
      selected.value = selected.value.filter((n) => n !== number);
    }
  }

  return (
    <div className="" ref={ref}>
      <p className="text-gray-700 text-sm font-semibold m-1">{label}</p>
      <div className="flex flex-wrap">
        <div className="flex">
          <NumberSelector
            name={groupName}
            number={1}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
          <NumberSelector
            name={groupName}
            number={2}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
          <NumberSelector
            name={groupName}
            number={3}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
          <NumberSelector
            name={groupName}
            number={4}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
          <NumberSelector
            name={groupName}
            number={5}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
        </div>
        <div className="flex">
          <NumberSelector
            name={groupName}
            number={6}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
          <NumberSelector
            name={groupName}
            number={7}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
          <NumberSelector
            name={groupName}
            number={8}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
          <NumberSelector
            name={groupName}
            number={9}
            textColorOnSelected={textColorOnSelected}
            numberChangeHandler={setNumber}
          />
        </div>
      </div>
    </div>
  );
}

type NumberSelectorProps = {
  name: string;
  number: number;
  textColorOnSelected: string;
  numberChangeHandler: (number: number, checked: boolean) => void;
};

function NumberSelector(props: NumberSelectorProps) {
  const { name, number, textColorOnSelected, numberChangeHandler } = props;
  const id = `${name}-${number}`;
  const [checked, setChecked] = useState<boolean>(false);

  const color = checked ? `text-${textColorOnSelected}-500` : "text-gray-200";
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
        type="checkbox"
        id={id}
        name={name}
        value={number}
        className="hidden"
        onInput={(e) => {
          const checkbox = e.target as HTMLInputElement;
          setChecked(checkbox.checked);
          numberChangeHandler(Number(checkbox.value), checkbox.checked);
        }}
      />
      {icon}
    </label>
  );
}
