import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
<<<<<<< HEAD
  {
    ignores: [
      "dist",
      ".output",
      ".vinxi",
      "node_modules",
      ".nitro",
      ".vercel",
      "coverage",
      "**/routeTree.gen.ts",
    ],
  },
=======
  { ignores: ["dist", ".output", ".vinxi"] },
>>>>>>> 3afd25791cfd1cdb494b45cffbfbb916e448b357
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
<<<<<<< HEAD
      // Legacy data layers (Supabase rows, PDF helpers) use gradual typing.
      "@typescript-eslint/no-explicit-any": "off",
      "no-empty": ["error", { allowEmptyCatch: true }],
=======
>>>>>>> 3afd25791cfd1cdb494b45cffbfbb916e448b357
    },
  },
  eslintPluginPrettier,
);
