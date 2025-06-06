import {PROJECTS} from "../constants"
import { motion } from "framer-motion";


const Projects = () => {
    return (
        <div className="border-b border-neutral-950 pb-4">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">Projects</motion.h2>
            <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/4">
                    <img src={project.image}
                    height={150}
                    width={150}
                    alt={project.title} className="mb-6 rounded"/>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <div className="flex items-center gap-2 mb-2">
                            <h6 className="font-semibold">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-purple-500 transition-colors"
                                >
                                    {project.title}
                                </a>
                            </h6>
                            {project.repo && (
                                <a 
                                    href={project.repo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-neutral-400 hover:text-purple-500 transition-colors"
                                    title="View Repository"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            )}
                        </div>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;