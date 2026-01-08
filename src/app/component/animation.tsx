import React, { useEffect, useState } from "react";

interface detail{
    divclassname: string;
    spanclassname: string
}

export function Anime({divclassname, spanclassname}:detail) {
    return (        
        <span className={`relative block overflow-hidden bg-violeta ${divclassname} md:hidden lg:block`}>
            <span className={`absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white to-transparent ${spanclassname}`} ></span>
        </span>
    )
}



/**
 * AnimatedText
 * @param {string} text - Le texte final à afficher
 * @param {Array} placeholderChars - Liste de caractères aléatoires (chinois, symboles, emojis)
 * @param {number} speed - Vitesse de l’animation (ms par caractère)
 */

export default function AnimatedText({
  text,
  placeholderChars = ["技", "术", "专", "家", "程", "序", "员", "⚡", "💻", "✨"],
  speed = 50,
  className = "text-white font-bold text-[12px] opacity-90 tracking-wider"
}) {
  const [displayText, setDisplayText] = useState(Array(text.length).fill(""));

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev.map((char, idx) => {
          if (idx < i) return text[idx]; // lettres déjà fixées
          return placeholderChars[Math.floor(Math.random() * placeholderChars.length)];
        })
      );
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, placeholderChars, speed]);

  return <p className={className}>{displayText.join("")}</p>;
}

export function AnimatedSection({ children, delay = 0 }) {
  return (
    <div
      className="opacity-0 animate-fadeSlideUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
