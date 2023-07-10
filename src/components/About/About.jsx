import style from './About.module.css';

function About() {
    return (
        <div className={style.about}>
            <h1>About me</h1>
            <p>I am a freelance front-end web developer, currently taking projects using the React.js framework only. I  hail from Lahore, Pakistan. I gradauted from the <span>Lahore University of Management Sciences</span> with Bachelor's in Computer Science back in 2018. Afterwards, I worked for about a year at a software company, Tkxel as a BI engineer and an iOS developer. </p>

            <p>I have been learning React for quite several months now, mainly from <span>The Odin Project</span>, as well as a few <span>Udemy</span> courses. My portfolio displays the skills I have achieved, and I aim to get better with each passing day. I believe I have strong javascript fundamentals, and I'm fairly good at React as well. Please feel free to contact me if you are looking for a front-end developer for your website.</p>
        </div>
    )
};

export default About;
