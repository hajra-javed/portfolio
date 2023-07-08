import style from './Home.module.css';
import picture from '../../assets/picture.png';
import Logo from '../Logo/Logo';

function Home() {
    return (
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.hero}>
                    <div className={style.heroMain}>
                        Hajra Javed
                    </div>
                    <div className={style.heroDetail}>
                        Hi, I'm a front-end web developer.
                    </div>
                </div>
                <img src={picture} alt="" />
            </div>
        </div>
    )
};

export default Home;