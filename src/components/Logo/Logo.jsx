import style from './Logo.module.css';

function Logo() {
    return (
        <div className={style.logo}>
            <div className={style.first}>H</div>
            <div className={style.last}>J</div>
        </div>
    )
};

export default Logo;