import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [".storybook/**", "src/app/**/page.tsx", "src/stories/**/*.ts"],
  project: ["src/**"],
  ignoreDependencies: [
    "prettier",
    "storybook",
    "@storybook/blocks",
    "@storybook/test",
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "dependency-cruiser",
  ],
};

export default config;
