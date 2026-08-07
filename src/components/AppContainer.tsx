import { createContext, useContext, useState, useCallback } from "react";
import EasterEgg from "./easter-egg/EasterEgg";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Footer from "./Footer";

interface EasterEggContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const EasterEggContext = createContext<EasterEggContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useEasterEgg() {
  return useContext(EasterEggContext);
}

function AppContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleOpen = useCallback(() => setIsOpen(true), []);

  return (
    <EasterEggContext.Provider
      value={{
        isOpen,
        open: handleOpen,
        close: handleClose,
      }}
    >
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Footer />
      <EasterEgg isActive={isOpen} onClose={handleClose} />
    </EasterEggContext.Provider>
  );
}

export default AppContainer;
