import { useRef, useState } from "preact/hooks";

type NumberSelectorsProps = {
  label: string;
  textColorOnSelected: string,
  current: string;
  setter: (x: number[]) => void;
}

export default function NumberSelectors(props: NumberSelectorsProps) {

  const groupName = crypto.randomUUID();
  const ref = useRef<HTMLInputElement>(null!)
  const { label, textColorOnSelected, current, setter } = props;

  function setNumber(number: string, checked: boolean): void {
    const index = current.indexOf(number);
    if (checked && index < 0) {
      setter(current + number);
    } else if (!checked && index >= 0) {
      setter(current.replace(number, ''));
    }
  }

  return (
    <div class="" ref={ ref }>
      <label class="text-gray-700 text-sm font-semibold">{ label }</label>
      <div class="flex flex-wrap gap-x-1">
        <div class="flex gap-1">
          <NumberSelector name={ groupName } number={ 1 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
          <NumberSelector name={ groupName } number={ 2 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
          <NumberSelector name={ groupName } number={ 3 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
          <NumberSelector name={ groupName } number={ 4 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
          <NumberSelector name={ groupName } number={ 5 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
        </div>
        <div class="flex gap-1">
          <NumberSelector name={ groupName } number={ 6 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
          <NumberSelector name={ groupName } number={ 7 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
          <NumberSelector name={ groupName } number={ 8 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
          <NumberSelector name={ groupName } number={ 9 } textColorOnSelected={ textColorOnSelected }
                          numberChangeHandler={ setNumber }/>
        </div>
      </div>
    </div>
  );
}

type NumberSelectorProps = {
  name: string;
  number: number;
  textColorOnSelected: string,
  numberChangeHandler: (number: number, checked: boolean) => void;
};

function NumberSelector(props: NumberSelectorProps) {

  const { name, number, textColorOnSelected, numberChangeHandler } = props;
  const id = `${ name }-${ number }`;
  const [ checked, setChecked ] = useState<boolean>(false);

  return (
    <div class="flex">
      <input type="checkbox"
             id={ id }
             name={ name }
             value={ number }
             class="hidden"
             oninput={ (e) => {
               const { target } = e;
               setChecked(target.checked)
               numberChangeHandler(target.value, target.checked);
             } }
      />
      <label for={ id } class="rounded-xl border-2 border-gray-200">
        <div class="inline-block w-[60px] h-[60px] select-none cursor-pointer">
          { checked ? <>
            <div class={ `mt-3 text-center text-2xl font-bold text-${ textColorOnSelected }-600` }>
              { number }
            </div>
          </> : <>
            <div class="mt-3 text-center text-2xl font-bold text-gray-200">
              { number }
            </div>
          </> }
        </div>
      </label>
    </div>
  );
}