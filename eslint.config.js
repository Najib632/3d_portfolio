import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      import: importPlugin
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"]
        }
      }
    },
    rules: {
      // Add any import-related rules here if needed
    }
  }
];