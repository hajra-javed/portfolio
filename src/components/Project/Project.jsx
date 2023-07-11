import style from './Project.module.css';
import { ReactComponent as GithubMark } from '../../assets/github.svg';
import { ReactComponent as OpenLink } from '../../assets/open.svg';
import uniqid from 'uniqid';

function Project(props) {
    return (
        <div className={style.project}>
            <a href={`https://hajra-javed.github.io${props.link}`}>
                <img src={require("../../assets/" + props.filename)} alt="" />
            </a>
            <div className={style.details}>
                <h2 className={style.name}>
                    <a href={`https://hajra-javed.github.io${props.link}`}>
                        {props.name}
                    </a>
                </h2>
                <a href={`https://hajra-javed.github.io${props.link}`}>
                    <div className={style.description}>{props.description}</div>
                </a>
                <div className={style.skills}>
                    {props.skills.map((skill) =>
                        <div className={style.skill} key={uniqid()} >{skill}</div>
                    )}
                </div>
                <div className={style.links}>
                    <span>
                        <a href={`https://github.com/hajra-javed${props.link}`} target="_blank">
                            <GithubMark />
                        </a>
                    </span>
                    <span className={style.openLink}>
                        <a href={`https://hajra-javed.github.io${props.link}`} target="_blank">
                            <OpenLink />
                        </a>
                    </span>
                </div>
            </div>
        </div>

    )
};

export default Project;