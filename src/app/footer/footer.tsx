import { CgMail } from "react-icons/cg";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-gray-100 dark:bg-maintybe text-gray-900 dark:text-zinc-100 pt-6 font-semibold px-4 text-center transition-colors duration-300">
      <p className="text-[18px]" data-aos="fade-down">
        Intéressé par mon profil ? Parlons-en.
      </p>
      <p className="text-gray-700 dark:text-zinc-200 mt-1" data-aos="fade-down">
        Passionné par le développement web et le design UI/UX, je mets mes compétences au service de projets innovants et modernes.
      </p>
      <p className="mt-1" data-aos="fade-down">
        +261 34 89 846 04 / +261 33 35 618 97 &nbsp; | &nbsp;
        rakotomampiandry@gmail.com
      </p>

      <button
        className="bg-zinc-200 dark:bg-zinc-50 rounded-lg py-3 px-6 text-black text-[15px] mt-[2%] font-medium hover:bg-zinc-300 dark:hover:bg-zinc-200 transition mb-[1%]"
        data-aos="fade-down"
      >
        <div className="flex items-center justify-center">
          <CgMail className="text-[25px]" />
          <span className="ml-2">Laissez un message</span>
        </div>
      </button>

      <div className="flex justify-center">
        <a
          href="https://www.facebook.com/micka.hasniaina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer text-[150%] ml-1 mr-4 text-gray-600 dark:text-zinc-200">
            <BsFacebook className="hover:text-blue-500 transition" />
          </div>
        </a>

        <a
          href="https://wa.me/+261348984604"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer text-[170%] mr-4 text-gray-600 dark:text-zinc-200">
            <RiWhatsappFill className="hover:text-green-500 transition" />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/mickael-rakotomampiandry-888320312"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer text-[150%] mr-4 text-gray-600 dark:text-zinc-200">
            <BsLinkedin className="hover:text-blue-400 transition" />
          </div>
        </a>

        <a
          href="mailto:rakotomampiandry@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer text-[170%] mr-4 text-gray-600 dark:text-zinc-200">
            <SiGmail className="hover:text-red-500 transition" />
          </div>
        </a>
      </div>

      <p className="text-gray-500 dark:text-zinc-400 text-[10px] mt-[2%] pb-[1%]">
        © 2025 Portfolio de Rakotomampiandry Micka
      </p>
    </div>
  );
}
