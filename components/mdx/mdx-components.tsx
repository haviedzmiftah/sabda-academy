import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="font-display text-4xl font-bold text-ink" {...props} />,
    h2: (props) => <h2 className="mt-10 font-display text-2xl font-bold text-ink" {...props} />,
    a: (props) => <a className="font-semibold text-blue-700 underline underline-offset-4" {...props} />,
    table: (props) => (
      <div className="my-8 w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700" {...props} />
      </div>
    ),
    thead: (props) => <thead className="bg-slate-50 text-xs uppercase tracking-wider text-ink font-bold" {...props} />,
    th: (props) => <th className="px-6 py-4 font-bold text-ink" {...props} />,
    td: (props) => <td className="px-6 py-4 border-t border-slate-100 align-top leading-relaxed" {...props} />,
    tr: (props) => <tr className="transition-colors hover:bg-slate-50/60" {...props} />,
    ...components,
  };
}
