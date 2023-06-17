import React, {useContext }from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

  export default function InterfaceWAN2 () {

    const {int_WAN2DHCP, setInt_WAN2DHCP } = useContext(GlobalVarContext);
    const {int_WAN2PPPoE, setInt_WAN2PPPoE} = useContext(GlobalVarContext);
    const {username_WAN2, setUsername_WAN2} = useContext(GlobalVarContext);
    const {password_WAN2, setPassword_WAN2} = useContext(GlobalVarContext);
    const {https_WAN2, setHttps_WAN2} = useContext(GlobalVarContext);
    const {ping_WAN2, setPing_WAN2} = useContext(GlobalVarContext);

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      switch (name) {
        case "int_WAN2DHCP": setInt_WAN2DHCP(checked);
          break;
        case "int_WAN2PPPoE": setInt_WAN2PPPoE(checked);
          break;
        case "https_WAN2": setHttps_WAN2(checked);
        break;
        case "ping_WAN2": setPing_WAN2(checked);
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
              name="int_WAN2PPPoE"
              checked={int_WAN2PPPoE} 
              onChange={handleCheckboxChange}
             />
          </li>
          <li>
            username:
            <input 
              type="text" 
              name="username_WAN2" 
              value={username_WAN2} 
              onChange={e => setUsername_WAN2(e.target.value)}  
              />
          </li>
          <li>
            password:
            <input 
              type="text" 
              name="password_WAN2" 
              value={password_WAN2} 
              onChange={e => setPassword_WAN2(e.target.value)}  
              />
          </li>
          or:
          <li>
            DHCP Modus:
            <input 
              type="checkbox"
              name="int_WAN2DHCP"
              checked={int_WAN2DHCP} 
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
                  name="https_WAN2"
                  checked={https_WAN2} 
                  onChange={handleCheckboxChange}
                />
              </li>
              <li>
                Ping:
                <input 
                  type="checkbox"
                  name="ping_WAN2"
                  checked={ping_WAN2} 
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