import { Link as Linke } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function DetailService() {
    return (
        <div className="bg-gradient-to-r from-[#0A0F16] to-[#000000] grid place-content-start pt-[2%] pb-[5%] md:pt-[3%]">
            <div className="hidden md:hidden lg:block bg-[#1f314b] bg-opacity-20 w-[3%] py-[1%] ml-[2%] rounded-full place-content-center place-items-center text-[#5680bb] cursor-pointer duration-200 hover:bg-opacity-30">
                <Linke to="/" className="place-content-center place-items-center flex">
                    <BiArrowBack className="text-[18px]" />
                </Linke>
            </div>

            <div className="bg-[#1f314b] bg-opacity-20 w-[10%] py-[2.5%] ml-[1%] rounded-full place-content-center place-items-center text-[#5680bb] cursor-pointer duration-200 hover:bg-opacity-30 md:w-[5%] md:ml-[2%] md:py-[1.5%] lg:hidden">
                <Linke to="/" className="place-content-center place-items-center flex">
                    <BiArrowBack className="text-[18px]" />
                </Linke>
            </div>
            <p className="text-white text-center font-bold text-[20px] md:text-[25px] lg:px-[20%] md:px-[5%]">Des solutions innovantes pour donner vie à vos idées et créer des expériences uniques.</p>
            <p className="text-white opacity-50 text-[12px] text-center mt-[2%] lg:text-[14px] lg:px-[30%] lg:mt-[1%] md:px-[5%] md:text-[15px]">Des solutions en design et développement, créées pour transformer chaque idée en une expérience moderne, cohérente et performante.</p>
            <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#0A0F16] to-[#fff] mt-[5%] mb-[5%] rounded-xl lg:mt-[2%]"></div>

            {/* Phone */}
            <div className="px-[4%] md:hidden lg:hidden">
                <div className="mt-[1%]">
                    <img src="./images/site.png" alt="Creation du site web" className="w-full" loading="lazy" />
                    <p className="text-white font-bold text-left mt-1">Création du site web</p>
                    <p className="text-white opacity-70 text-[10px] text-left">Transformer vos idées en sites web modernes et performants, alliant design élégant, expérience utilisateur optimale et technologies de pointe pour propulser votre présence en ligne </p>
                </div>

                <div className="mt-[10%]">
                    <img src="./images/responsive.jpeg" alt="Integration responsive" className="w-full" loading="lazy" />
                    <p className="text-white font-bold text-left mt-1">Intégration responsive</p>
                    <p className="text-white opacity-70 text-[10px] text-left">Intégration responsive pour garantir une expérience optimale sur tous les appareils, du mobile au desktop, avec un design fluide et parfaitement adaptable </p>
                </div>

                <div className="mt-[10%]">
                    <img src="./images/mainte.jpg" alt="Maintenance et optimisation web" className="w-full" loading="lazy" />
                    <p className="text-white font-bold text-left mt-1">Maintenance & optimisastion</p>
                    <p className="text-white opacity-70 text-[10px] text-left">Maintenance continue et optimisation du code pour assurer performance, stabilité et évolutivité du projet dans le temps. </p>
                </div>

                <div className="mt-[10%]">
                    <img src="./images/design.jpg" alt="Design ui/ux" className="w-full" loading="lazy" />
                    <p className="text-white font-bold text-left mt-1">UI/UX Design</p>
                    <p className="text-white opacity-70 text-[10px] text-left">Conception d’interfaces intuitives et d’expériences utilisateur fluides, alliant esthétique, ergonomie et cohérence visuelle.</p>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block px-[20%] ml-[0%]">
                <div className="flex">
                    <div className="rounded-xl shadow-sm shadow-[#5680bb] border border-t-[#5680bb] border-b-0 border-l-0 border-r-0 h-[90%]">
                        <img src="./images/site.png" alt="Création du site web" className="w-[220vh] h-[90%] rounded-xl" loading="lazy" />
                    </div>
                    <div className="ml-[2%] mt-[2%]">
                        <p className="text-white font-bold text-left mt-1 text-[20px]">Création du site web</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Transformer vos idées en sites web modernes et performants, alliant design élégant, expérience utilisateur optimale et technologies de pointe pour propulser votre présence en ligne </p>
                    </div>
                </div>

                <div className="flex mt-[-10%]">
                    <div className="mt-[11%]">
                        <p className="text-white font-bold text-left mt-1 text-[20px]">Intégration responsive</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Intégration responsive pour garantir une expérience optimale sur tous les appareils, du mobile au desktop, avec un design fluide et parfaitement adaptable </p>
                    </div>

                    <div className="rounded-xl shadow-sm shadow-[#5680bb] border border-t-[#5680bb] border-b-0 border-l-0 border-r-0 h-[90%]">
                        <img src="./images/responsive.jpeg" alt="Integration responsive" className="w-[220vh] h-[90%] rounded-xl" loading="lazy" />
                    </div>
                </div>

                <div className="flex">
                    <div className="mt-[-5%] h-[80%] rounded-xl shadow-sm shadow-[#5680bb] border border-t-[#5680bb] border-b-0 border-l-0 border-r-0">
                        <img src="./images/mainte.jpg" alt="Maintenance et optimisation web" className="w-[220vh] h-[50vh] rounded-xl" loading="lazy" />
                    </div>

                    <div className="ml-[2%] mt-[2%]">
                        <p className="text-white font-bold text-left mt-1 text-[20px]">Maintenance & optimisastion</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Maintenance continue et optimisation du code pour assurer performance, stabilité et évolutivité du projet dans le temps. </p>
                    </div>
                </div>

                <div className="flex mt-[-10%]">
                    <div className="mt-[11%]">
                        <p className="text-white font-bold text-left mt-1 text-[20px]">UI/UX Design</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Conception d’interfaces intuitives et d’expériences utilisateur fluides, alliant esthétique, ergonomie et cohérence visuelle.</p>
                    </div>

                    <div className="rounded-xl shadow-sm shadow-[#5680bb] border border-t-[#5680bb] border-b-0 border-l-0 border-r-0 h-[90%]">
                        <img src="./images/design.jpg" alt="Design ui/ux" className="w-[220vh] h-[50vh] rounded-xl" loading="lazy" />
                    </div>
                </div>
            </div>

            {/* Tablettre */}
            <div className="hidden lg:hidden md:block px-[10%] ml-[0%]">
                <div className="flex">
                    <div className="rounded-xl shadow-sm shadow-[#9936AF] border border-t-[#9936AF] border-b-0 border-l-0 border-r-0 h-[90%]">
                        <img src="./images/site.png" alt="Creation du site web" className="w-[200vh] h-[90%] rounded-xl" loading="lazy" />
                    </div>
                    <div className="ml-[2%] mt-[-1%]">
                        <p className="text-white font-bold text-left mt-1 text-[15px]">Création du site web</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Transformer vos idées en sites web modernes et performants, alliant design élégant, expérience utilisateur optimale et technologies de pointe pour propulser votre présence en ligne </p>
                    </div>
                </div>

                <div className="flex mt-[-3%]">
                    <div className="mt-[3%]">
                        <p className="text-white font-bold text-left mt-1 text-[16px]">Intégration responsive</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Intégration responsive pour garantir une expérience optimale sur tous les appareils, du mobile au desktop</p>
                    </div>

                    <div className="rounded-xl shadow-sm shadow-[#9936AF] border border-t-[#9936AF] border-b-0 border-l-0 border-r-0 h-[80%]">
                        <img src="./images/responsive.jpeg" alt="INtegration responsive" className="w-[200%] h-[90%] rounded-xl" loading="lazy" />
                    </div>
                </div>

                <div className="flex">
                    <div className="mt-[-5%] h-[80%] rounded-xl shadow-sm shadow-[#9936AF] border border-t-[#9936AF] border-b-0 border-l-0 border-r-0">
                        <img src="./images/optim.jpg" alt="sites" className="w-[130vh] h-[90%] rounded-xl" loading="lazy" />
                    </div>

                    <div className="ml-[2%] mt-[2%]">
                        <p className="text-white font-bold text-left mt-1 text-[16px]">Maintenance & optimisastion</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Maintenance continue et optimisation du code pour assurer performance, stabilité et évolutivité du projet dans le temps. </p>
                    </div>
                </div>

                <div className="flex mt-[-2%]">
                    <div className="mt-[5%]">
                        <p className="text-white font-bold text-left mt-1 text-[20px]">UI/UX Design</p>
                        <p className="text-white opacity-70 text-[12px] text-left pr-[10%]">Conception d’interfaces intuitives et d’expériences utilisateur fluides, alliant esthétique, ergonomie et cohérence visuelle.</p>
                    </div>

                    <div className="rounded-xl shadow-sm shadow-[#9936AF] border border-t-[#9936AF] border-b-0 border-l-0 border-r-0 h-[90%]">
                        <img src="./images/design.jpg" alt="Design ui/ux" className="w-[200%] h-[90%] rounded-xl" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}