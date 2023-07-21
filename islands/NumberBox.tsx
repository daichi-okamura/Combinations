type NumberBoxProps = {
  label: string;
  getter: () => string;
  setter: (x) => void;
};

export default function NumberBox(props: NumberBoxProps) {
  const { label, getter, setter } = props;

  return (
    <>
      <p class="text-gray-700 text-sm font-semibold m-1">{label}</p>

      <div class="flex flex-row flex-nowrap h-16">
        <div
          class="flex justify-center items-center w-16 select-none bg-gray-200 hover:bg-gray-400 rounded-l-xl cursor-pointer"
          onclick={() => setter((prev) => Math.max(Number(prev) - 1, 1))}
        >
          <p class="text-center text-3xl font-thin">−</p>
        </div>

        <div class="flex justify-center items-center w-16">
          <input
            type="text"
            class="bg-gray-100 font-bold h-full w-full text-center text-2xl"
            value={getter()}
            oninput={(event) => setter(event.target.value)}
            disabled={true}
          />
        </div>

        <div
          class="flex justify-center items-center w-16 select-none bg-gray-200 hover:bg-gray-400 rounded-r-xl cursor-pointer"
          onclick={() => setter((prev) => Number(prev) + 1)}
        >
          <p class="text-center text-3xl font-thin">+</p>
        </div>
      </div>
    </>
  );
}
