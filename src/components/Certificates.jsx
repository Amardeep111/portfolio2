import {CERTIFICATES} from "../constants"
import { motion } from "framer-motion";

const Certificates = () => {
    return (
        <div className="border-b border-neutral-950 pb-4">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">Certificates</motion.h2>
            <div>
            {CERTIFICATES.map((certificate, index) => (
                <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/4">
                        <p className="mb-4 text-sm text-neutral-400">{certificate.date}</p>
                        <img 
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4 lg:pl-12">
                        <h6 className="mb-4 font-semibold">
                            {certificate.title} - <span className="text-sm text-purple-100">{certificate.issuer}</span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{certificate.description}</p>
                    </motion.div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;