import { CadreSkil } from "../component/cadre";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export function Tech() {
    return (
        <div className="pb-0 lg:pb-[5%] md:pb-[10%]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div
                    className="text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                    viewport={{ once: false }}
                >
                    <p className="font-extrabold text-violeta text-[40px] lg:text-[50px] tracking-wide uppercase">
                        Technologies
                    </p>
                    <p className="text-violeta text-[18px] lg:text-[25px] font-semibold opacity-90 tracking-wide">
                        Langage de programmation
                    </p>
                </motion.div>

            </div>


            {/* Phone */}
            <motion.div
                className="grid grid-cols-3 gap-[3%] mt-[5%] lg:hidden md:hidden"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                {[
                    { img: "hml.png", title: "HTML", text: "Structure web" },
                    { img: "cs.png", title: "CSS", text: "Style des pages" },
                    { img: "js.png", title: "JavaScript", text: "Fonctionnalités" },
                    { img: "nestjs.png", title: "NestJS", text: "Backend structuré" },
                    { img: "react.png", title: "React", text: "Interfaces web", classImage: "animate-spin-slow" },
                    { img: "nextjs.png", title: "Next.js", text: "Framework React" },
                    { img: "postgresql.png", title: "PostgreSQL", text: "Base de données" },
                    { img: "mysql.png", title: "MySQL", text: "Base de données" },
                    { img: "tailwind.png", title: "Tailwind CSS", text: "Styles rapides" },
                    { img: "figma.png", title: "Figma", text: "Design d'interfaces" },
                    { img: "typescript.png", title: "TypeScript", text: "Typage" },
                    { img: "git.png", title: "Git & GitHub", text: "Collaboration" },
                ].map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <CadreSkil
                            image={`./images/${skill.img}`}
                            alt={`logo ${skill.title}`}
                            titre={skill.title}
                            text={skill.text}
                            classImage={skill.classImage}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Desktop et tablette */}
            <motion.div
                className="hidden lg:flex justify-center px-[10%] mt-[2%] md:flex md:mt-[5%]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <div className="grid lg:grid-cols-4 gap-[2%] md:grid-cols-3">
                    {[
                        { img: "hml.png", title: "HTML", text: "Structure web" },
                        { img: "cs.png", title: "CSS", text: "Style des pages" },
                        { img: "js.png", title: "JavaScript", text: "Fonctionnalités" },
                        { img: "nestjs.png", title: "NestJS", text: "Backend structuré" },
                        { img: "react.png", title: "React", text: "Interfaces web", classImage: "animate-spin-slow" },
                        { img: "nextjs.png", title: "Next.js", text: "Framework React" },
                        { img: "postgresql.png", title: "PostgreSQL", text: "Base de données" },
                        { img: "mysql.png", title: "MySQL", text: "Base de données" },
                        { img: "tailwind.png", title: "Tailwind CSS", text: "Styles rapides" },
                        { img: "figma.png", title: "Figma", text: "Design d'interfaces" },
                        { img: "typescript.png", title: "TypeScript", text: "Typage" },
                        { img: "git.png", title: "Git & GitHub", text: "Collaboration" },
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            style={{ perspective: 1000 }} // pour le tilt 3D
                            whileHover={{ rotateX: -8, rotateY: 8, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200, damping: 12 }}
                        >
                            <div className=" rounded-2xl cursor-pointer transition-all duration-300">
                                <div className="text-center">
                                    <CadreSkil
                                        image={`./images/${skill.img}`}
                                        alt={`logo ${skill.title}`}
                                        titre={skill.title}
                                        text={skill.text}
                                        classImage={skill.classImage}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}