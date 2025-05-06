import { useState } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const Estructura = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setMenuAbierto(true)} />
      <Menu abierto={menuAbierto} onClose={() => setMenuAbierto(false) } />
    </>
  );
};

export default Estructura;
