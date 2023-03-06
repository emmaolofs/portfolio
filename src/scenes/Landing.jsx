import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from '../assets/images/profile.png';
import SocialMediaIcons from '../components/SocialMediaIcons'

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                        before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                        before:border-2 before:border-black before:z-[-1]"
                    >
                        <img src={profile} alt="profile_image" /> 
                    </div>
                ) : (
                    <div>
                        <img src={profile} alt="profile_image" />
                    </div>
                )}
            </div>
            
            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.0 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="text-6xl font-playfair z-10 text-center md:text-start">
                    Test Testsson
                </p>
                <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                </p>
            </motion.div>

            {/* CALL TO ACTIONS */}
            <motion.div
                className= "flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1.0 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <AnchorLink
                className="bg-green text-white rounded-sm py-3 px-7 font-semibold
                hover:animate-bounce"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
                >
                    Contact Me
                </AnchorLink>
            </motion.div>
            <motion.div
                className= "flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 1.0 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <SocialMediaIcons/>
            </motion.div>
            </div>
        </section>
    )

}

export default Landing;