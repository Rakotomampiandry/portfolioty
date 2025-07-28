import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Dark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-lg"
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
