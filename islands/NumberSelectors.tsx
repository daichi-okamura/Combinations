import { useRef, useState } from "preact/hooks";
import { tw } from "twind";
import range from "../libs/range.ts";
import { SelectedNumbers } from "../libs/combinations.ts";

type NumberSelectorsProps = {
  label: string;
  textColorOnSelected: string;
  current: SelectedNumbers;
  setter: (selectedNumbers: SelectedNumbers) => void;
};

export default function NumberSelectors(props: NumberSelectorsProps) {
  const groupName = crypto.randomUUID();
  const ref = useRef<HTMLInputElement>(null!);
  const { label, textColorOnSelected, current, setter } = props;

  function setNumber(value: string, checked: boolean): void {
    if (checked) {
      setter(current.add(value));
    } else {
      setter(current.remove(value));
    }
  }

  return (
    <div class="" ref={ref}>
      <p class="text-gray-700 text-sm font-semibold m-1">{label}</p>
      <div class="flex flex-wrap gap-1">
        <div class="flex gap-1">
          {[...range(1, 5)].map((i) => (
            <NumberSelector
              name={groupName}
              number={i}
              textColorOnSelected={textColorOnSelected}
              numberChangeHandler={setNumber}
            />
          ))}
        </div>
        <div class="flex gap-1">
          {[...range(6, 9)].map((i) => (
            <NumberSelector
              name={groupName}
              number={i}
              textColorOnSelected={textColorOnSelected}
              numberChangeHandler={setNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type NumberSelectorProps = {
  name: string;
  number: number;
  textColorOnSelected: string;
  numberChangeHandler: (value: string, checked: boolean) => void;
};

function NumberSelector(props: NumberSelectorProps) {
  const { name, number, textColorOnSelected, numberChangeHandler } = props;
  const id = `${name}-${number}`;
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <div class="flex h-16 w-16">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={number}
          class="hidden"
          onInput={(e) => {
            const { target } = e;
            if (!(target instanceof HTMLInputElement)) return;
            setChecked(target.checked);
            numberChangeHandler(target.value, target.checked);
          }}
        />
        <label
          for={id}
          class="flex justify-center items-center rounded-xl border-2 border-gray-200 cursor-pointer w-full"
        >
          <div
            class={tw`text-2xl font-bold ${
              checked ? `text-${textColorOnSelected}-600` : "text-gray-200"
            }`}
          >
            {number}
          </div>
        </label>
      </div>
    </>
  );
}
