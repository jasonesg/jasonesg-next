import { remark } from "remark";
import html from "remark-html";
import { visit } from "unist-util-visit";

// Custom plugin: converts [tweet:ID] paragraphs into <!--tweet:ID--> HTML comments
function remarkTweets() {
  return (tree: any) => {
    visit(tree, "paragraph", (node: any, index: number | undefined, parent: any) => {
      if (index === undefined || !parent) return;
      if (
        node.children?.length === 1 &&
        node.children[0].type === "text" &&
        /^\[tweet:\d+\]$/.test(node.children[0].value.trim())
      ) {
        const id = node.children[0].value.trim().match(/\[tweet:(\d+)\]/)![1];
        parent.children[index] = {
          type: "html",
          value: `<!--tweet:${id}-->`,
        };
      }
    });
  };
}

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkTweets)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
