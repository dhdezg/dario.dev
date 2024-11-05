import React from 'react';

function About() {
    return (
        <article id='about' className='h-dvh w-dvw'>
            <section id='about__title' className=''>
                <h1>Darío Hernández</h1>
                <h4>Front End Developer</h4>
            </section>
            <section id='about__buttons' className=''>
                <button>CV 📃</button>
                <button>Contact me 📲</button>
            </section>
        </article>
    );
};

export default About;