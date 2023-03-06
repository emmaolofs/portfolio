import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a href="https://google.com" target="_blank" rel="noreferrer"
            className="hover:opacity-50 transition duration-500">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer"
            className="hover:opacity-50 transition duration-500">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
        </div>
    )
}

export default SocialMediaIcons;