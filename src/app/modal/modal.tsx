import { IoIosSend } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdDiamond } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Bonjour 👋' },
    { from: 'bot', text: 'N’hésitez pas à me laisser un message ou posez des questions !' },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { from: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        from: 'bot',
        text: generateBotReply(inputValue),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotReply = (text: string): string => {
    const lower = text.toLowerCase();
    if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('akory')) {
      return 'Bonjour à vous aussi 👋';
    }
    if (lower.includes('merci')) {
      return 'Avec plaisir 😊';
    }
    if (lower.includes('infiormation')) {
      return 'Je suis encore etudiant';
    }
    if (lower.includes('email')) {
      return 'rakotomampiandry@gmail.com 📩';
    }
    if (lower.includes('facebook')) {
      return 'Micka Rakotomampiandry';
    }
    if (lower.includes('contact')) {
      return "Facebook: Micka Rakotomampiandry | Email: rakotomampiandry@gmail.com | Linkdin: Mickael Rakotomampiandry | GitHub: Rakotomampiandry"
    }
    return "Veuillez contacter Micka directement via son email rakotomampiandry@gmail.com";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-zinc-300 text-black p-4 rounded-full shadow-lg hover:bg-zinc-100 transition z-50 "
      >
        <BiMessageSquareDetail size={24} />
      </button>

      {/* Modal avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: "anticipate" }}
            className="fixed bottom-24 right-6 w-96 bg-white border shadow-sm rounded-2xl flex flex-col z-50 h-[80vh] lg:w-[60vh]"
          >
            <div className="absolute text-[2000%] text-zinc-100 z-0 content-center mx-5 mt-[50%] lg:text-[2500%] lg:ml-10">
              <MdDiamond />
            </div>

            {/* Header */}
            <div className="bg-zinc-100 rounded-t-[12px] text-maintykely p-3 flex justify-between items-center z-10">
              <span className="font-semibold">Message pour Rakotomampiandry</span>
              <button onClick={() => setIsOpen(false)}>
                <AiOutlineClose className="lg:text-[130%]" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm z-10">
              <div className="bg-zinc-50 p-3 rounded-xl mb-4">
                <p>Vos messages seront transmis directement à Rakotomampiandry</p>
                <p>Vous pouvez poser vos questions, partager vos idées ou demander des informations</p>
              </div>
              <hr className="w-full text-zinc-100" />
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg w-fit max-w-[80%] ${
                    msg.from === 'user'
                      ? 'ml-auto bg-blue-50 text-right'
                      : 'bg-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center text-xs text-zinc-500">
                  <div className="w-3 h-3 bg-zinc-300 rounded-full animate-bounce" />
                  <div className="w-3 h-3 bg-zinc-300 rounded-full animate-bounce delay-200" />
                  <div className="w-3 h-3 bg-zinc-300 rounded-full animate-bounce delay-400" />
                  <span>En train d'écrire...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-2 flex items-center gap-2 bg-zinc-100 rounded-b-[12px]">
              <input
                type="text"
                placeholder="Écrivez un message..."
                className="flex-1 border rounded-full px-4 py-1 text-sm focus:outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSend} className="text-maintykely font-bold">
                <IoIosSend className="lg:text-[200%] hover:text-gray-600" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
