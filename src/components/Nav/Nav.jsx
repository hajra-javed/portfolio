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
                    <li className={`${style.navItem}`}><Link to='/about' >About</Link></li>
                    <li className={`${style.navItem}`}><Link to='/portfolio' >Portfolio</Link></li>
                    <li className={`${style.navItem}`}><Link to='/skills' >Skills</Link></li>
                    <li className={`${style.navItem}`}><Link to='/contact' >Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;