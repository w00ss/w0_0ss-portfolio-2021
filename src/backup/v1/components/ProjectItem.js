import { Link } from 'react-router-dom';
import { icons } from '../icons';

function Project({ data }) {
  const { id, title, shortDesc, date, icon, bg, clone } = data;
  const wrapLine = (text) => text.split('\n').map((p, i) => <p key={i}>{p}</p>);
  return (
    <Link
      to={`/project/${id}`}
      className="project-container"
      style={{ background: bg }}
    >
      <div className="project">
        <div>
          <div className="project-title">{title}</div>
          <div className="line" />
          <div className="project-desc">{wrapLine(shortDesc)}</div>
        </div>
        {date && <div className="project-date">{date}</div>}
      </div>
      {icon && <div className="project-logo">{icons[title]()}</div>}
      {clone && <div className="clone-coding">Clone Coding</div>}
    </Link>
  );
}

export default Project;
