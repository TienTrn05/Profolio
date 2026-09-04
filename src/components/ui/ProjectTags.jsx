export default function ProjectTags({ items }) {
  return (
    <ul className="project-tags" aria-label="Project context">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
