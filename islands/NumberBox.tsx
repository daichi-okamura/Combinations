type NumberBoxProps = {
  label: string;
  getter: () => string
  setter: (x) => void;
}

export default function NumberBox(props: NumberBoxProps) {
  const { label, getter, setter } = props;

  return (
    <div class="w-48">

      <label class="text-gray-700 text-sm font-semibold">{ label }</label>

      <div class="flex flex-row flex-nowrap h-16">
        <div>
          <button
            class="select-none bg-gray-200 hover:bg-gray-400 w-16 h-full rounded-l-xl cursor-pointer focus:outline-none"
            onclick={ () => setter((prev) => Math.max(Number(prev) - 1, 1)) }
          >
            <span class="m-auto text-3xl font-thin">−</span>
          </button>
        </div>

        <div>
          <input type="text"
                 class="bg-gray-100 font-bold w-full h-full text-center text-2xl"
                 value={ getter() }
                 oninput={ (event) => setter(event.target.value) }
                 disabled={ true }
          />
        </div>

        <div>
          <button
            class="select-none bg-gray-200 hover:bg-gray-400 w-16 h-full rounded-r-xl cursor-pointer focus:outline-none"
            onclick={ () => setter((prev) => Number(prev) + 1) }
          >
            <span class="m-auto text-3xl font-thin">+</span>
          </button>
        </div>
      </div>

    </div>
  );
}
