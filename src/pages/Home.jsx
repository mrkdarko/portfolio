import './Home.css'
import image from "../web_photo.jpg"
import github from "../github_logo.png"
import linkedin from "../linkedin.png"
import React, {useState, useEffect} from 'react'

export default function Home(){
    const [greeting, setGreeting] = useState('Hi');
    const greetings = ['HI', 'HOLA', 'BONJOUR', 'CIAO', 'HALLO', 'AKWAABA']; 
    let currentIndex = 0;
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setGreeting(greetings[currentIndex]);
        currentIndex = (currentIndex + 1) % greetings.length;
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <>
  
      <main id='all'>
          <h1 id='hello'>
          {greeting}
          </h1>
  
          <p class='intro'>
              <img src={image} alt="your image" id='mypic'/>
          <div id='par'>
            I'm Kwabena, a Computer Science student at Columbia University.
            My major degree classes at the moment are Introduction to Computing (ENGI E1006) and Calculus I.
            My main technical skills are Programming (Python, HTML, CSS, React.js)
            where I love to develop both on the backend and frontend.
          </div>
            </p>
      </main>
    
      <footer>
        <div id='socials'>
          <li>
            <a href = "https://github.com/mrkdarko" target = "_blank">
              <img src = {github} alt = "github" width="35" height = "35" id='github'/>  
            </a>
          </li>
  
          <li>
            <a href="https://www.linkedin.com/in/kgd17" target='_blank'>
                <img src={linkedin} alt="linkedin" width='35' height = '35' id='linkedin'/>
            </a>
          </li>
        </div>
      </footer>
      </>
    )
}