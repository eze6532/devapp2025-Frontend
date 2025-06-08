import React, { useState } from "react";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";


const Estructura: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setMenuAbierto(true)} />
      <Menu abierto={menuAbierto} onClose={() => setMenuAbierto(false) } />
      <main>{children}</main>
    </>
  );
};

export default Estructura;
