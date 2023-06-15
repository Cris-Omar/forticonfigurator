import React, {useState} from "react";
import Ethernet from "../icons/Ethernet"

import Interface1 from "../interfaces/Interface1";
import Interface2 from "../interfaces/Interface2";
import Interface3 from "../interfaces/Interface3";
import Interface4 from "../interfaces/Interface4";
import Interface5 from "../interfaces/Interface5";
import InterfaceA from "../interfaces/InterfaceA";
import InterfaceB from "../interfaces/InterfaceB";
import InterfaceWAN from "../interfaces/InterfaceWAN";

export default function Ports40F() {

  const [selectedPort, setSelectedPort] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  //handle to open and close the "enable" menu
  const handlePortClick = (port) => {
    if (selectedPort === port) {
      setSubmenuOpen(!submenuOpen);
    } else {
      setSelectedPort(port);
      setSubmenuOpen(port === 1); // Open the submenu if port is 1
    }
  };

  return (
    <div className="ports">
      <div className="port">
        <label className={selectedPort === 1 ? 'active' : ''}  onClick={() => handlePortClick(1)} >
          <p>1</p>
          <Ethernet />
        </label >
        <label className={selectedPort === 2 ? 'active' : ''} onClick={() => handlePortClick(2)}>
          <p>2</p>
          <Ethernet />
        </label>
        <label className={selectedPort === 3 ? 'active' : ''}  onClick={() => handlePortClick(3)}>
          <p>3</p>
          <Ethernet />
        </label>
        <label className={selectedPort === 4 ? 'active' : ''} onClick={() => handlePortClick(4)}>
          <p>4</p>
          <Ethernet />
        </label>
        <label className={selectedPort === 5 ? 'active' : ''} onClick={() => handlePortClick(5)}>
          <p>5</p>
          <Ethernet />
        </label>
        <label className={selectedPort === "A" ? 'active' : ''}  onClick={() => handlePortClick("A")} >
          <p>A</p>
          <Ethernet />
        </label >
        <label className={selectedPort === "B" ? 'active' : ''}  onClick={() => handlePortClick("B")} >
          <p>B</p>
          <Ethernet />
        </label >
        <label className={selectedPort === "WAN1" ? 'active' : ''}  onClick={() => handlePortClick("WAN1")} >
          <p>WAN1</p>
          <Ethernet />
        </label >
        <label className={selectedPort === "WAN2" ? 'active' : ''}  onClick={() => handlePortClick("WAN2")} >
          <p>WAN2</p>
          <Ethernet />
        </label >
      </div>
      
        {/*Interface Options*/}
      <div className="menu">
        {submenuOpen && selectedPort === 1 && <Interface1 />}
        {submenuOpen && selectedPort === 2 && <Interface2 />}
        {submenuOpen && selectedPort === 3 && <Interface3 />}
        {submenuOpen && selectedPort === 4 && <Interface4 />}
        {submenuOpen && selectedPort === 5 && <Interface5 />}
        {submenuOpen && selectedPort === "A" && <InterfaceA />}
        {submenuOpen && selectedPort === "B" && <InterfaceB />}
        {submenuOpen && selectedPort === "WAN" && <InterfaceWAN />}
      </div>
    </div>
  )
}