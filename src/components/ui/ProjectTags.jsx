export default function ProjectTags({ items }) {
  return (
    <ul
      className="project-tags m-0 flex list-none flex-wrap justify-end gap-2 p-0 max-md:justify-start"
      aria-label="Project context"
    >
      {items.map((item) => (
        <li
          className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[0.62rem] leading-tight font-bold tracking-wide text-brand uppercase"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
