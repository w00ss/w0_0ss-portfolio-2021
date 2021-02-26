import { useParams } from 'react-router-dom';
import { projectData } from '../projectData';
import ImageSlider from '../components/ImageSlider';
import { icons } from '../icons';
import './Detail.css';

function Detail() {
  const projectId = Number(useParams().id);
  const project = projectData.find((data) => data.id === projectId);

  return (
    <div className="page-container">
      <div className="detail-title">
        <h1>{project.title}</h1>
        <div>{icons.crossIcon()}</div>
      </div>
      <div className="detail-desc">
        <ImageSlider data={project} />
        <p>{project.desc}</p>
      </div>
    </div>
  );
}

export default Detail;
