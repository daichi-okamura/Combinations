import { defineApp } from "$fresh/server.ts";

export default defineApp((req, ctx) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Combinations</title>
      </head>
      <body className="bg-blue-100 select-none">
        <ctx.Component />
      </body>
    </html>
  );
});
