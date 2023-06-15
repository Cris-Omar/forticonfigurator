import React, {useContext} from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

export default function Interface5 () {

  const {int_5, setInt_5 } = useContext(GlobalVarContext);
  const {enableDhcp_5, setEnableDhcp_5} = useContext(GlobalVarContext);
  const {portAlias_5, setPortAlias_5} = useContext(GlobalVarContext);
  const {ipaddress_5, setIpaddress_5} = useContext(GlobalVarContext);
  const {intNetmask_5, setIntNetmask_5} = useContext(GlobalVarContext);
  const {https_5, setHttps_5} = useContext(GlobalVarContext);
  const {ping_5, setPing_5} = useContext(GlobalVarContext);
  const {defaultGateway_5, setDefaultGateway_5} = useContext(GlobalVarContext);
  const {addressRangeFrom_5, setAddressRangeFrom_5} = useContext(GlobalVarContext);
  const {addressRangeTo_5, setAddressRangeTo_5}  = useContext(GlobalVarContext);
  const {dhcpNetmask_5, setDhcpNetmask_5} = useContext(GlobalVarContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_5": setInt_5(checked);
        break;
      case "enableDhcp_5": setEnableDhcp_5(checked);
        break;
      case "https_5": setHttps_5(checked);
      break;
      case "ping_5": setPing_5(checked);
      break;
      default:
    break;
    }
  };

  return (

  <div className="submenu">
    Port <b>5</b> Configuration
    <form>
      <ol>
        <li>
          enable:
          <input 
              type="checkbox"
              name="int_5"
              checked={int_5} 
              onChange={handleCheckboxChange}
              />
        </li>
        <li>
          Port Alias
          <input 
            type="text" 
            name="portAlias_5"
            placeholder="LAN_XY"
            value={portAlias_5} 
            onChange={e => setPortAlias_5(e.target.value)}  
            />
        </li>
        <li>
          IP
          <input
            type="text" 
            name="ipaddress_5"
            placeholder="192.168.1.0"
            value={ipaddress_5}
            onChange={e => setIpaddress_5(e.target.value)}  
            />
        </li>
        <li>
          Subnetz
          <input 
            type="text" 
            name="intNetmask_5" 
            placeholder="255.255.255.0"
            value={intNetmask_5} 
            onChange={e => setIntNetmask_5(e.target.value)}  
            />
        </li>
          <div className="adminaccess">
            <ol>
            <p>Admin Access:</p>
              <li>
                https:
                <input 
                  type="checkbox"
                  name="https_5"
                  checked={https_5} 
                  onChange={handleCheckboxChange}
                  />
              </li>
              <li>
                Ping:
                <input 
                  type="checkbox"
                  name="ping_5"
                  checked={ping_5} 
                  onChange={handleCheckboxChange}
                  />
              </li>
            </ol>
          </div>
      </ol>
    {/*activate DHCP*/}
      <div className="object">
        <label>
        DHCP Server
          <input 
              type="checkbox"
              name="enableDhcp_5"
              checked={enableDhcp_5} 
              onChange={handleCheckboxChange}
              />
          </label>
      </div>
        <div className="dhcpmenu">
          <form>
            <ol>
            <li>
                default Gateway:
                <input 
                  type="text" 
                  name="defaultGateway_5" 
                  placeholder="192.168.1.1"
                  value={defaultGateway_5} 
                  onChange={e => setDefaultGateway_5(e.target.value)}  
                  />
              </li>
              <li>
                Netmask
                <input 
                  type="text" 
                  name="dhcpNetmask_5" 
                  placeholder="255.255.255.0"
                  value={dhcpNetmask_5} 
                  onChange={e => setDhcpNetmask_5(e.target.value)}  
                  />
              </li>
              Adress Range:
              <li>
                From:
                <input 
                  type="text" 
                  name="addressRangeFrom_5" 
                  placeholder="192.168.1.100"
                  value={addressRangeFrom_5} 
                  onChange={e => setAddressRangeFrom_5(e.target.value)}  
                  />
              </li>
              <li>
                To:
                <input 
                  type="text" 
                  name="addressRangeTo_5" 
                  placeholder="192.168.1.200"
                  value={addressRangeTo_5} 
                  onChange={e => setAddressRangeTo_5(e.target.value)}
                  />
              </li>
            </ol>
          </form>
        </div>
    </form>
  </div>
  )
}