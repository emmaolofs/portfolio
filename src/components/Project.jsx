import profile from '../assets/images/profile.png';
import { motion } from "framer-motion";

const projectVariant = {
    hidden:{ opacity: 0, scale: 0.8 },
    visible: {opacity: 1, scale: 1 }
};


const Project = ( { title }) => {
    const projectTitle = title.split(" ").join("-").toLowerCase();
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-black`;

    return(
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{projectTitle}</p>
                <p className="mt-7">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                </p>
            </div>
            <img className="z-10" src={profile} alt={projectTitle} /> 
        </motion.div>
    )
}

export default Project;