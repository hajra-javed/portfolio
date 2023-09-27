import style from './Home.module.css';
import picture from '../../assets/picture.png';
import Logo from '../Logo/Logo';
import { useState, useEffect, useRef } from 'react';

function Home() {

    const [msg, setMsg] = useState('');
    const i = useRef(0);

    useEffect(()=>{
        const str = "Hi👋, I'm a front-end web developer.";
        typeWriter(str, i);

    }, []);

    function typeWriter(str, i){
        setMsg((msg)=> msg + str.charAt(i.current))
        if (i.current !== str.length){
            setTimeout(() => {
                i.current++;
                typeWriter(str, i);
            }, 100);
        };
    }

    return (
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.hero}>
                    <div className={style.heroMain}>
                        Hajra Javed
                    </div>
                    <div className={style.heroDetail}>
                        {msg}
                    </div>
                </div>
                <img src={picture} alt="" />
            </div>
        </div>
    )
};

export default Home;