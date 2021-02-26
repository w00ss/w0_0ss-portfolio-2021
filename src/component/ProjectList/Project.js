function Project({ data, onClick }) {
  return (
    <div className="project" onClick={onClick}>
      <div className="project-info">
        <div className="project-title">{data.title}</div>
        <div className="project-desc">{data.predesc}</div>
      </div>
      <div className="thumbnail">
        <img
          src={`${process.env.PUBLIC_URL}/image/${data.title}/thumbnail.png`}
          alt={data.title}
        />
      </div>
    </div>
  );
}

export default Project;
