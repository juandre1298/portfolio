import "@/styles/globals.css";
import "@/styles/sky.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Roboto } from "@next/font/google";
import { Header } from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={roboto.className}>
      <div className={darkMode ? "dark" : ""}>
        <div className="text-stone-600 dark:text-white">
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Component {...pageProps} darkMode={darkMode} />
        </div>
      </div>
    </main>
  );
}
