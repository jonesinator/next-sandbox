import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/app/page.tsx", "src/app/layout.tsx", "src/stories/*.ts"],
  project: ["src/**/*.ts*"],
  ignoreDependencies: [
    "prettier",
    "storybook",
    "@storybook/blocks",
    "@storybook/test",
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
  ],
};

export default config;
