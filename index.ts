import pluginVue from "eslint-plugin-vue";
import { withVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import stylisticPlugin from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default withVueTs(
  { tsSyntaxInTemplates: true },
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.strictTypeChecked
).then(vueTsConfig => [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.turbo/**", "**/.OLD/**"]
  },
  ...vueTsConfig,
  {
    files: ["eslint.config.*", "**/eslint.config.*", "**/vite.config.*", "**/*.config.*"],
    ...tseslint.configs.disableTypeChecked,
    rules: {
      ...tseslint.configs.disableTypeChecked.rules,
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { "@stylistic": stylisticPlugin },
    ignores: ["eslint.config.*", "**/eslint.config.*", "**/*.config.*"],
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/comma-dangle": ["warn", "never"],
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/restrict-template-expressions": ["error", {
        allowNumber: true
      }],
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unnecessary-condition": ["error",{
        "allowConstantLoopConditions": true
      }],
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "vue/max-attributes-per-line": "off",
      "vue/multi-word-component-names": "off",
      "vue/html-closing-bracket-spacing": ["error", {
        selfClosingTag: "never"
      }],
      "vue/attributes-order": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/require-default-prop": "off",
      "vue/first-attribute-linebreak": ["error", {
        singleline: "beside",
        multiline: "ignore"
      }],
      "vue/html-closing-bracket-newline": "off",
      "vue/no-reserved-component-names": ["error", {
        "disallowVueBuiltInComponents": true,
        "disallowVue3BuiltInComponents": true,
        "htmlElementCaseSensitive": true
      }],
      "vue/no-v-html": "off",
      "vue/html-self-closing": ["warn", {
        html: {
          void: "never",
          normal: "always",
          component: "always"
        },
        svg: "always"
      }],
      "vue/no-parsing-error": ["error", {
        "x-invalid-namespace": false
      }],
      "vue/v-bind-style": ["error", "shorthand", {
        "sameNameShorthand": "always"
      }],
      "vue/v-on-style": ["error", "shorthand"],
      "vue/v-slot-style": ["error", {
        "atComponent": "shorthand",
        "default": "shorthand",
        "named": "shorthand",
      }]
    }
  }
]);