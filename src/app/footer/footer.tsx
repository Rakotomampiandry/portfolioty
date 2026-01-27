import { Modal, Form, Input, message, Button } from "antd";
import { Link as Linke } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0A0F16] to-[#000] pt-[10%] md:pt-[5%]">
      <div className="">
        <p className="text-white font-bold text-[25px] px-[20%] text-center flex justify-center mb-[2%] lg:mb-[0.5%]">Intéressé par mon profil ? Parlons-en.</p>
        <p className="text-white opacity-80 justify-center text-center px-[13%] text-[14px] md:text-[15px] lg:px-[28%]">Passionné par le développement web et le design UI/UX, je mets mes compétences au service de projets innovants et modernes.</p>
        <div className="w-[15vh] h-[1px] bg-white mx-auto my-[4%] bg-gradient-to-r from-[#fff] to-[#0A0F16] md:my-[3%] lg:my-[1%]"></div>

        <p className="text-white font-bold text-center mt-[8%] md:text-[22px] lg:text-[18px] lg:mt-0 md:mt-0">Rakotomampiandry@gmail.com</p>
        <p className="text-white font-bold text-center mt-[1%] md:text-[22px] lg:text-[18px] lg:mt-0">+261 34 89 846 04</p>

        <div className="flex justify-center">
          <Button className="w-[50%] mt-[5%] h-[6vh] font-bold md:w-[32%] md:mt-[2%] md:py-[2%] lg:py-[1%] lg:w-[15%] lg:mt-[1%] rounded-full bg-gradient-to-r from-[#000] to-[#2f4c74] text-white border-white md:text-[15px]">
            <Linke to="/contact">
              Plus d'infos
            </Linke>
          </Button>
        </div>


        <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#0A0F16] to-[#fff] mt-[10%] mb-[2%] rounded-xl md:mt-[5%] md:mb-[1%] md:w-[8vh] lg:mt-[3%]"></div>

        <p className="text-[10px] text-center text-white">© 2026 Portfolio de Rakotomampiandry Mickael</p>
      </div>
    </footer>
  );
}