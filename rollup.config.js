import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    plugins: [
      typescript({
        declaration: true,
        declarationDir: "dist",
      }),
      terser(),
    ],
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
];
