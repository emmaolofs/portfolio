import {useForm} from "react-hook-form";
import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

    return(
        <section id="contact" className="py-48">
            <motion.div
                clasName="md:w-1/3 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.0 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5 text-center">
                        CONTACT ME
                    </p>             
                    <div className="flex justify-center my-5">
                        <LineGradient width="w-1/5"/>
                    </div>  
                </div>             
            </motion.div>
                <div className="md:flex md:justify-center mt-5">
                    <motion.div
                        className= "mt-10 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/266f20d1f1b7b18092a65fa76ea48a19"
                            method="POST"
                        >   
                            <input
                                className="w-full bg-green font-semibold placeholder-white text-white p-3"
                                type="text"
                                placeholder="Who are you?"
                                {...register("name", {
                                    required: true,
                                    maxLength: 150
                                })}
                            />
                            {errors.name &&(
                                <p className="text-red mt-1">
                                    {errors.name.type === 'required' && "This field is required."}
                                    {errors.name.type === 'maxLength' && "Max length is 150 char."}
                                </p>
                            )}

                            <input
                                className="w-full bg-green font-semibold placeholder-white text-white p-3 mt-5"
                                type="text"
                                placeholder="What is your email?"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email &&(
                                <p className="text-red mt-1">
                                    {errors.email.type === 'required' && "This field is required."}
                                    {errors.email.type === 'pattern' && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                className="w-full bg-green font-semibold placeholder-white text-white p-3 mt-5"
                                type="text"
                                placeholder="Tell me your message..."
                                rows="4"
                                cols="50"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message &&(
                                <p className="text-red mt-1">
                                    {errors.message.type === 'required' && "This field is required."}
                                    {errors.message.type === 'maxLength' && "Max length is 2000 char."}
                                </p>
                            )}

                        <div className="flex flex-row-reverse">
                            <button
                                type="submit"
                                className="p-5 bg-green font-semibold text-white mt-5 hover:opacity-50 transition duration-500"
                            >
                                SUBMIT
                            </button>
                        </div>
                        </form>
                    </motion.div>

                </div>

        </section>
    );
}

export default Contact;