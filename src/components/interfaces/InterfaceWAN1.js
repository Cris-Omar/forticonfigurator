import React, {useContext }from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

  export default function InterfaceWAN1 () {

    const {int_WAN1DHCP, setInt_WAN1DHCP } = useContext(GlobalVarContext);
    const {int_WAN1PPPoE, setInt_WAN1PPPoE} = useContext(GlobalVarContext);
    const {username_WAN1, setUsername_WAN1} = useContext(GlobalVarContext);
    const {password_WAN1, setPassword_WAN1} = useContext(GlobalVarContext);
    const {https_WAN1, setHttps_WAN1} = useContext(GlobalVarContext);
    const {ping_WAN1, setPing_WAN1} = useContext(GlobalVarContext);

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      switch (name) {
        case "int_WAN1DHCP": setInt_WAN1DHCP(checked);
          break;
        case "int_WAN1PPPoE": setInt_WAN1PPPoE(checked);
          break;
        case "https_WAN1": setHttps_WAN1(checked);
        break;
        case "ping_WAN1": setPing_WAN1(checked);
        break;
        default:
      break;
      }
    };

    return (
    <div className="submenu">
      Port <b>WAN</b> Configuration
      <form>
        <ol>
          <li>  
            PPPoE Modus:
            <input 
              type="checkbox"
              name="int_WAN1PPPoE"
              checked={int_WAN1PPPoE} 
              onChange={handleCheckboxChange}
             />
          </li>
          <li>
            username:
            <input 
              type="text" 
              name="username_WAN1" 
              value={username_WAN1} 
              onChange={e => setUsername_WAN1(e.target.value)}  
              />
          </li>
          <li>
            password:
            <input 
              type="text" 
              name="password_WAN1" 
              value={password_WAN1} 
              onChange={e => setPassword_WAN1(e.target.value)}  
              />
          </li>
          or:
          <li>
            DHCP Modus:
            <input 
              type="checkbox"
              name="int_WAN1DHCP"
              checked={int_WAN1DHCP} 
              onChange={handleCheckboxChange}
             />
          </li>
          <div className="adminaccess">
            <ol>
              <p>Admin Access:</p>
              <li>
                https:
                <input 
                  type="checkbox"
                  name="https_WAN1"
                  checked={https_WAN1} 
                  onChange={handleCheckboxChange}
                />
              </li>
              <li>
                Ping:
                <input 
                  type="checkbox"
                  name="ping_WAN1"
                  checked={ping_WAN1} 
                  onChange={handleCheckboxChange}
                  />
              </li>
            </ol>
          </div>
        </ol>
      </form>
    </div>
    )
  }