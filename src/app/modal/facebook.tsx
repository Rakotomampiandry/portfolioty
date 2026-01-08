import { AiFillCamera } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { Modal } from "antd";

interface Detail {
    open: boolean;
    onClose: () => void;
}

export function Facebook({open, onClose}:Detail) {
    return (
        <div>
            <Modal
                title=""
                open={open}
                onCancel={onClose}
                footer={null}
                // width={modalWidth}
            >
                <div className="lg:bg-black/30 lg:backdrop-blur-xl md:bg-black/30 md:backdrop-blur-xl h-screen justify-center">
                    <div className="perspective-1000 flex justify-center items-center pb-[3%] lg:pt-[3%] md:pt-[3%]">
                        <div className="relative w-full h-screen rounded-[2.5em] border-none lg:w-[20%] lg:h-[85vh] lg:rounded-[2.5rem] md:rounded-[2.5em] lg:bg-mangabe lg:border lg:border-white/10 md:w-[65%] md:h-[95vh] md:bg-mangabe md:border md:border-white/10">
                            <div className="absolute inset-2 rounded-[2rem] bg-white">
                                {/* Tete */}
                                <div className="flex text-[22px] justify-between px-[5%] pt-[5%]">
                                    <IoIosArrowBack />
                                    <FiSearch />
                                </div>

                                {/* Photo de couverture */}
                                <div className="bg-gray-300 h-[30%] text-center mt-[5%] flex justify-center">
                                    <MdAddToPhotos className="mt-[11%] mr-[2%] text-[12px] lg:text-[10px]" />
                                    <p className="font-bold text-[12px] pt-[10%] lg:text-[10px]">Ajouter une photo de couverture</p>

                                    <AiFillCamera className="border border-white absolute ml-[85%] mt-[52%] md:ml-[89%] md:mt-[50%] lg:mt-[50%] rounded-full p-2 text-[30px] md:p-2 md:text-[35px] lg:p-1 lg:text-[20px]" />
                                </div>

                                <div className="absolute w-[35%] h-[20vh] bg-white mt-[-22%] ml-[3%] rounded-full p-[1%]">
                                    <img src="./images/pdp.jpg" alt="" className="w-full h-[80%] rounded-full lg:h-[75%] relative z-0" />
                                    <div className="w-full h-[10%] absolute z-10">
                                        <AiFillCamera className="bg-gray-300 p-2 text-[30px] rounded-full mt-[-30%] ml-[80%]" />
                                    </div>
                                </div>

                                {/* Boutton */}
                                <div>

                                </div>

                                {/* Lien + a la une */}
                                <div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}