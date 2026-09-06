import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="font-display text-4xl font-bold text-ink" {...props} />,
    h2: (props) => <h2 className="mt-10 font-display text-2xl font-bold text-ink" {...props} />,
    a: (props) => <a className="font-semibold text-blue-700 underline underline-offset-4" {...props} />,
    ...components,
  };
}
