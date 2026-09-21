export function JsonBlock({ data }: { data: Record<string, string[]> }) {
  const entries = Object.entries(data);

  return (
    <pre className="overflow-x-auto text-xs leading-6 sm:text-sm sm:leading-7">
      <span className="text-term-amber">{"{"}</span>
      {"\n"}
      {entries.map(([key, values], entryIndex) => (
        <span key={key}>
          {"  "}
          <span className="text-term-cyan">{`"${key}"`}</span>
          <span className="text-term-dim">: </span>
          <span className="text-term-amber">[</span>
          {values.map((value, valueIndex) => (
            <span key={value}>
              <span className="text-term-green">{`"${value}"`}</span>
              {valueIndex < values.length - 1 ? <span className="text-term-dim">, </span> : null}
            </span>
          ))}
          <span className="text-term-amber">]</span>
          {entryIndex < entries.length - 1 ? <span className="text-term-dim">,</span> : null}
          {"\n"}
        </span>
      ))}
      <span className="text-term-amber">{"}"}</span>
    </pre>
  );
}
