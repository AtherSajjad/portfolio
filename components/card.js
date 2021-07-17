export default function Card({ project }) {
  return (
    <div className="bg-white rounded shadow p-5">
      <a href={project.url}>{project.name}</a>
      <p>{project.description}</p>
      <p>
        Company <a href={project.companyURL}>{project.company}</a>
      </p>
    </div>
  );
}
