import IconPlus from "icons/plus.tsx";
import IconMinus from "icons/minus.tsx";

type NumberBoxProps = {
  label: string;
  getter: () => string;
  setter: (x) => void;
};

export default function NumberBox(props: NumberBoxProps) {
  const { label, getter, setter } = props;

  return (
    <>
      <p className="text(gray-700 sm) font-semibold m-1">{label}</p>

      <div className="flex flex(row nowrap) h-16">
        <button
          className="flex justify-center items-center w-16 bg(gray-200 hover:gray-400) rounded-l-xl cursor-pointer focus:outline-none touch-manipulation"
          onClick={() => setter((prev) => Math.max(Number(prev) - 1, 1))}
        >
          <IconMinus class="w-7 h-7" />
        </button>

        <div className="flex justify-center items-center w-16">
          <input
            type="text"
            className="bg-gray-100 font-bold h-full w-full text(center 2xl)"
            value={getter()}
            onInput={(event) => setter(event.target.value)}
            disabled={true}
          />
        </div>

        <button
          className="flex justify-center items-center w-16 bg-gray-200 hover:bg-gray-400 rounded-r-xl cursor-pointer focus:outline-none touch-manipulation"
          onClick={() => setter((prev) => Number(prev) + 1)}
        >
          <IconPlus class="w-7 h-7" />
        </button>
      </div>
    </>
  );
}
