import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import profile from '../assets/images/profile.png';
import { motion } from "framer-motion";

const Work = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return(
        <section id="work" className="pt-10 pb-24">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className= "md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.0 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY WORK
                    </p>
                    <LineGradient width="w-1/3"/>
                    <p className="mt-10 mb-7">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreen ?(
                    <div
                    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                    before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img className="z-10" src={profile} alt="profile_image" /> 
                    </div>
                    ) : (
                        <img className="z-10" src={profile} alt="profile_image" /> 
                    )}
                </div>
            </div>

            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.div
                    className= "md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.0 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl">Experience</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 right-0 top-0 z-[-1] absolute bg-light-forest-green"/>
                    </div>
                    <p className="mt-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.
                    </p>
                </motion.div>

                <motion.div
                    className= "md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 1.0 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 right-0 top-0 z-[-1] absolute bg-light-forest-green"/>
                    </div>
                    <p className="mt-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.
                    </p>
                </motion.div>

                <motion.div
                    className= "md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 1.0 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl">Imaginative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 right-0 top-0 z-[-1] absolute bg-light-forest-green"/>
                    </div>
                    <p className="mt-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Work;