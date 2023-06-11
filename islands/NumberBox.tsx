type NumberBoxProps = {
  label: string;
  getter: () => string
  setter: (x) => void;
}

export default function NumberBox(props: NumberBoxProps) {
  const { label, getter, setter } = props;
  const name = `number-box-${ label }`;

  return (
    <div class="w-24">

      <label class="w-full text-gray-700 text-sm font-semibold">{ `${ label }` }</label>

      <div class="flex flex-row rounded-lg h-8">
        <button
          class="select-none bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-20 rounded-l cursor-pointer focus:outline-none"
          onclick={ () => setter((prev) => Math.max(Number(prev) - 1, 1)) }
        >
          <span class="m-auto text-2xl font-thin">−</span>
        </button>

        <input type="text"
               class="bg-gray-100 text-gray-700 font-semibold w-full text-center text-md"
               value={ getter() }
               oninput={ (event) => setter(event.target.value) }
               disabled={ true }
        />

        <button
          class="select-none bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-20 rounded-r cursor-pointer focus:outline-none"
          onclick={ () => setter((prev) => Number(prev) + 1) }
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>

    </div>
  );
}
