import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

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
                    <li className={`${style.navItem}`}><Link to='portfolio/about' >About</Link></li>
                    <li className={`${style.navItem}`}><Link to='portfolio/portfolio' >Portfolio</Link></li>
                    <li className={`${style.navItem}`}><Link to='portfolio/skills' >Skills</Link></li>
                    <li className={`${style.navItem}`}><Link to='portfolio/contact' >Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;