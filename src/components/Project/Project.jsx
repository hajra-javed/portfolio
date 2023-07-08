import style from './Project.module.css';

function Project(props){
    return(
        <div className={style.project}>
            <div className={style.name}>{props.name}</div>
            <a href={`hajra-javed.github.io${props.link}`}>View live</a>
            <a href={`github.com/hajra-javed${props.link}`}>View code</a>
        </div>

    )
};

export default Project;