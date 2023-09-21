import Combinations from "../islands/Combinations.tsx";

export default function Index() {
  return (
    <main className="flex flex-wrap gap-2 p-2">
      <div className="flex-auto">
        <Combinations count={2} sum={10} />
      </div>
      <div className="flex-auto">
        <Combinations count={2} sum={10} />
      </div>
      <div className="flex-auto">
        <Combinations count={2} sum={10} />
      </div>
      <div className="flex-auto">
        <Combinations count={2} sum={10} />
      </div>
      <div className="flex-auto">
        <Combinations count={2} sum={10} />
      </div>
      <div className="flex-auto">
        <Combinations count={2} sum={10} />
      </div>
    </main>
  );
}
