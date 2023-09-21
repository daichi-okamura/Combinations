// deno-lint-ignore-file
import { Signal } from "@preact/signals-core";
import { useRef, useState } from "preact/hooks";

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
      <div className="flex flex-wrap gap-1">
        <div className="flex gap-1">
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
        <div className="flex gap-1">
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

  return (
    <>
      <div className="flex h-16 w-16">
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
        <label
          htmlFor={id}
          className="flex justify-center items-center rounded-xl border(2 gray-200) cursor-pointer w-full"
        >
          <div
            className={`font-bold text(2xl ${
              checked ? `${textColorOnSelected}-600` : "gray-200"
            })`}
          >
            {number}
          </div>
        </label>
      </div>
    </>
  );
}