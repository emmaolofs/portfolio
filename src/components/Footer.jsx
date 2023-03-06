import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return(
        <footer className="h-64 bg-gray pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semibold text-2xl">© Test Testsson 2023</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;