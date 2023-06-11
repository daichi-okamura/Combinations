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
    <div class="h-8 ml-8" ref={ ref }>
      <label class="text-gray-700 text-sm font-semibold">{ label }</label>
      <div class="flex">
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
      { checked
        ? <label for={ id }
                 class={ `select-none h-8 cursor-pointer rounded-lg border-2 border-gray-200 px-3 pt-[2px] mr-1 font-bold text-${ textColorOnSelected }-400` }
        >{ number }</label>
        : <label for={ id }
                 class={ `select-none h-8 cursor-pointer rounded-lg border-2 border-gray-200 px-3 pt-[2px] mr-1 font-bold text-gray-200` }
        >{ number }</label> }
    </div>
  );
}