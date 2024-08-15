import './Navbar.css'
import resumePDF from './KwabenaGyasi_Darko Resume.pdf'

function NavigationBar(){
    return(
    <>
    <nav>
        <h3 id = "name">
            KWABENA DARKO
        </h3>
        <div>
            <ul id ="navbar"> 
            <li><a href="#/Home">HOME</a></li>
            <li><a href="#/Experience">EXPERIENCE</a></li>
            <li><a href={resumePDF} target='_blank'>RESUME</a></li>
            </ul>
        </div>
    </nav>
    </>
    )
}

export default NavigationBar