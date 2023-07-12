import style from './Contact.module.css';

function Contact(){
    return(
        <div className={style.contact}>
            <div className={style.heading}>Get In Touch</div>
            <p>If you like my work, feel free to reach me out!</p>
            <a href = "mailto: hajrajaved.dev@hotmail.com" target="_blank">Say Hello</a>
        </div>
    )
}

export default Contact;