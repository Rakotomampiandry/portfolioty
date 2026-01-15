import { Modal, Form, Input, message, Button } from "antd";

export default function Footer() {
  return (
    <footer  className="bg-gradient-to-r from-[#0A0F16] to-[#000] pt-[10%] md:pt-[5%]">
      <div className="">
        <p className="text-white font-bold text-[25px] px-[20%] text-center flex justify-center mb-[2%] lg:mb-[0.5%]">Intéressé par mon profil ? Parlons-en.</p>
        <p className="text-white opacity-80 justify-center text-center px-[13%] text-[14px] md:text-[15px] lg:px-[28%]">Passionné par le développement web et le design UI/UX, je mets mes compétences au service de projets innovants et modernes.</p>
        <div className="w-[15vh] h-[1px] bg-white mx-auto my-[4%] bg-gradient-to-r from-[#fff] to-[#0A0F16] md:my-[3%] lg:my-[1%]"></div>

        <p className="text-white font-bold text-center mt-[8%] md:text-[22px] lg:text-[18px] lg:mt-0 md:mt-0">Rakotomampiandry@gmail.com</p>
        <p className="text-white font-bold text-center mt-[1%] md:text-[22px] lg:text-[18px] lg:mt-0">+261 34 89 846 04</p>

        {/* <div className="mt-[7%] space-y-[4%] px-[12%] md:mt-[5%] md:space-y-[3%] md:px-[22%] lg:flex lg:space-x-3 lg:space-y-0 lg:justify-center lg:mt-[2%]">
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#9936AF] to-[#fff]">
            <input
              type="email"
              placeholder="exemple@gmail.com"
              className="w-full rounded-2xl bg-[#0f0f0f] text-white px-4 py-2 focus:outline-none"
            />
          </div>

          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#fff] to-[#9936AF]">
            <input
              type="text"
              placeholder="Votre message"
              className="w-full rounded-2xl bg-[#0f0f0f] text-white px-4 py-2 focus:outline-none"
            />
          </div>

          <div className="flex justify-center lg:block">
            <Button className="bg-gradient-to-r from-[#000] to-[#9936AF] rounded-3xl text-white font-semibold w-[60%] py-5 lg:w-[100%] lg:rounded-2xl">
              Envoyer
            </Button>
          </div>
        </div> */}

        <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#0A0F16] to-[#fff] mt-[15%] mb-[3%] rounded-xl md:mt-[5%] md:mb-[1%] md:w-[8vh] lg:mt-[3%]"></div>

        <p className="text-[10px] text-center text-white">© 2025 Portfolio de Rakotomampiandry Mickael</p>
      </div>
    </footer>
  );
}