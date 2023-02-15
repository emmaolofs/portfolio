import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return(
        <footer>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin_logo" />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={github} alt="Lgithub_logoogo" />
            </a>
        </footer>
    )
}

export default Footer;