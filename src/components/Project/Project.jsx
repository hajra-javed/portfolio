import style from './Project.module.css';
import { ReactComponent as GithubMark } from '../../assets/github.svg';
import { ReactComponent as OpenLink } from '../../assets/open.svg';

function Project(props) {
    return (
        <div className={style.project}>
            <img src={require("../../assets/" + props.filename)} alt="" />
            <div className={style.details}>
                <h2 className={style.name}>
                    <a href={`https://hajra-javed.github.io${props.link}`}>
                        {props.name}
                    </a>
                </h2>
                <div className={style.description}>{props.description}</div>

                <div className={style.links}>
                    <span>
                        <a href={`https://github.com/hajra-javed${props.link}`}>
                            <GithubMark />
                        </a>
                    </span>
                    <span className={style.openLink}>
                        <a href={`https://hajra-javed.github.io${props.link}`}>
                            <OpenLink />
                        </a>
                    </span>
                </div>
            </div>
        </div>

    )
};

export default Project;