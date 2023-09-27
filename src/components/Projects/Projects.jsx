import style from './Projects.module.css';
import Project from '../Project/Project';
import rawData from '../../data.json';
import uniqid from 'uniqid';

function Projects() {
    const data = JSON.parse(JSON.stringify(rawData));
    console.log(data);
    return (
        <div className={style.portfolio}>
            <h1>Projects</h1>
            <div className={style.viewport}>
                <div className={style.container}>
                    <div className={style.projects}>
                        {data.reverse().map(p =>
                            <Project
                                name={p.name}
                                filename={p.filename}
                                description={p.description}
                                skills={p.skills}
                                link={p.link}
                                key={uniqid()}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;