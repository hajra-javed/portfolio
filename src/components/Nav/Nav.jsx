import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {ReactComponent as GithubMark} from '../../assets/github.svg';
import {ReactComponent as LinkedinMark} from '../../assets/linkedin.svg';

function Nav() {
    return (
        <>
            <div className={style.logo}>
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <nav>
                <ul>
                    <li className={`${style.navItem}`}><Link to='/about' >About</Link></li>
                    <li className={`${style.navItem}`}><Link to='/portfolio' >Portfolio</Link></li>
                    <li className={`${style.navItem}`}><Link to='/contact' >Contact</Link></li>
                </ul>
            </nav>
            <div className={style.links}>
                <ul>
                    <li>
                        <a href="https://github.com/hajra-javed" target="_blank">
                            <GithubMark />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/hajra-javed/" target="_blank">
                            <LinkedinMark />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav;