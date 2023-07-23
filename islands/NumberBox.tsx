type NumberBoxProps = {
  label: string;
  value: number;
  increment: () => void;
  decrement: () => void;
};

export default function NumberBox(props: NumberBoxProps) {
  const { label, value, increment, decrement } = props;

  return (
    <>
      <p class="text-gray-700 text-sm font-semibold m-1">{label}</p>

      <div class="flex flex-row flex-nowrap h-16">
        <button
          class="flex justify-center items-center w-16 bg-gray-200 hover:bg-gray-400 rounded-l-xl cursor-pointer focus:outline-none touch-manipulation"
          onClick={decrement}
        >
          <p class="text-center text-3xl font-thin">−</p>
        </button>

        <div class="flex justify-center items-center w-16">
          <input
            type="text"
            class="bg-gray-100 font-bold h-full w-full text-center text-2xl"
            value={value}
            disabled={true}
          />
        </div>

        <button
          class="flex justify-center items-center w-16 bg-gray-200 hover:bg-gray-400 rounded-r-xl cursor-pointer focus:outline-none touch-manipulation"
          onClick={increment}
        >
          <p class="text-center text-3xl font-thin">+</p>
        </button>
      </div>
    </>
  );
}
