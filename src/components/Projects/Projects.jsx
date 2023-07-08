import style from './Projects.module.css';
import Project from '../Project/Project';
import rawData from '../../data.json';

function Projects() {
    const data = JSON.parse(JSON.stringify(rawData));
    console.log(data);

    return (
        <div className={style.projects}>
            {data.map(p => <Project name={p.name} link={p.link} key={p.id} />)}
        </div>
    )
};

export default Projects;