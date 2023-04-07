import "@/styles/globals.css";
import "@/styles/sky.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Header } from "@/components/Header";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="text-stone-600 dark:text-white">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Component {...pageProps} darkMode={darkMode} />
      </div>
    </div>
  );
}
