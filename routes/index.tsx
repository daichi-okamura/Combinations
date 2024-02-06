import { defineRoute } from "$fresh/server.ts";
import { Combinations } from "./(_islands)/Combinations.tsx";

export default defineRoute((_req, _ctx) => {
  return (
    <main className="flex flex-wrap gap-2 p-2">
      <div className="flex-auto">
        <Combinations defaultCount={2} defaultSum={10} />
      </div>
      <div className="flex-auto">
        <Combinations defaultCount={2} defaultSum={10} />
      </div>
      <div className="flex-auto">
        <Combinations defaultCount={2} defaultSum={10} />
      </div>
      <div className="flex-auto">
        <Combinations defaultCount={2} defaultSum={10} />
      </div>
      <div className="flex-auto">
        <Combinations defaultCount={2} defaultSum={10} />
      </div>
      <div className="flex-auto">
        <Combinations defaultCount={2} defaultSum={10} />
      </div>
    </main>
  );
});
