import type { Meta, StoryObj } from "@storybook/react";
import MarkDown from "./MarkDown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "MarkDown",
  component: MarkDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    markdown: {},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof MarkDown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultImage: Story = {
  args: {
    markdown:
      "# マークダウンサンプル\n" +
      "\n" +
      "## 1. テキストフォーマット\n" +
      "\n" +
      "普通のテキスト\n" +
      "\n" +
      "**太字のテキスト**\n" +
      "\n" +
      "_イタリック体のテキスト_\n" +
      "\n" +
      "**_太字かつイタリック体のテキスト_**\n" +
      "\n" +
      "~~打ち消し線のテキスト~~\n" +
      "\n" +
      "## 2. リスト\n" +
      "\n" +
      "### 番号付きリスト\n" +
      "\n" +
      "1. 最初のアイテム\n" +
      "2. 二番目のアイテム\n" +
      "3. 三番目のアイテム\n" +
      "\n" +
      "### 箇条書きリスト\n" +
      "\n" +
      "- アイテム1\n" +
      "- アイテム2\n" +
      "  - サブアイテム2.1\n" +
      "  - サブアイテム2.2\n" +
      "- アイテム3\n" +
      "\n" +
      "## 3. リンク\n" +
      "\n" +
      "[OpenAIのウェブサイト](https://www.openai.com/)\n" +
      "\n" +
      "## 4. 画像\n" +
      "\n" +
      "マークダウンロゴ\n" +
      "\n" +
      "## 5. コードブロック\n" +
      "\n" +
      'インラインコード: `print("Hello, World!")`\n' +
      "\n" +
      "コードブロック:\n" +
      "\n" +
      "```python\n" +
      "def greet(name):\n" +
      '    return f"Hello, {name}!"\n' +
      "\n" +
      'print(greet("Alice"))\n' +
      "```\n" +
      "\n" +
      "## 6. 引用\n" +
      "\n" +
      "> これは引用文です。\n" +
      "> 複数行にまたがることもできます。\n" +
      "\n" +
      "## 7. 水平線\n" +
      "\n" +
      "---\n" +
      "\n" +
      "## 8. テーブル\n" +
      "\n" +
      "| 列1 | 列2 | 列3 |\n" +
      "| --- | --- | --- |\n" +
      "| A1  | B1  | C1  |\n" +
      "| A2  | B2  | C2  |\n" +
      "| A3  | B3  | C3  |\n",
  },
};

export const Blank: Story = {
  args: {
    markdown: "",
  },
};
