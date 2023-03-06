import LineGradient from "../components/LineGradient";
import Project from "../components/Project";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const Projects = () => {
    return(
        <section id="projects" className="pt-48 pb-48">
            <motion.div
                className= "md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.0 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        PROJECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3"/>
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                </p>
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                    className= "sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-gray
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1"/>
                    <Project title="Project 2"/>

                    {/* ROW 2 */}
                    <Project title="Project 3"/>
                    <Project title="Project 4"/>
                    <Project title="Project 5"/>

                    {/* ROW 3 */}
                    <Project title="Project 6"/>
                    <Project title="Project 7"/>
                    <div className="flex justify-center text-center items-center p-10 bg-gray
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;