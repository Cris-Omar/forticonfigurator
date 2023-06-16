import React, {useContext} from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

export default function Interface4 () {

  const {int_4, setInt_4 } = useContext(GlobalVarContext);
  const {enableDhcp_4, setEnableDhcp_4} = useContext(GlobalVarContext);
  const {portAlias_4, setPortAlias_4} = useContext(GlobalVarContext);
  const {ipaddress_4, setIpaddress_4} = useContext(GlobalVarContext);
  const {intNetmask_4, setIntNetmask_4} = useContext(GlobalVarContext);
  const {https_4, setHttps_4} = useContext(GlobalVarContext);
  const {ping_4, setPing_4} = useContext(GlobalVarContext);
  const {defaultGateway_4, setDefaultGateway_4} = useContext(GlobalVarContext);
  const {addressRangeFrom_4, setAddressRangeFrom_4} = useContext(GlobalVarContext);
  const {addressRangeTo_4, setAddressRangeTo_4}  = useContext(GlobalVarContext);
  const {dhcpNetmask_4, setDhcpNetmask_4} = useContext(GlobalVarContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_4": setInt_4(checked);
        break;
      case "enableDhcp_4": setEnableDhcp_4(checked);
        break;
      case "https_4": setHttps_4(checked);
      break;
      case "ping_4": setPing_4(checked);
      break;
      default:
    break;
    }
  };

  return (

  <div className="submenu">
    Port <b>4</b> configuration
    <form>
      <ol>
        <li>
          enable
          <input 
              type="checkbox"
              name="int_4"
              checked={int_4} 
              onChange={handleCheckboxChange}
              />
        </li>
        <li>
          Port Alias
          <input 
            type="text" 
            name="portAlias_4"
            placeholder="LAN_XY"
            value={portAlias_4} 
            onChange={e => setPortAlias_4(e.target.value)}  
            />
        </li>
        <li>
          IP
          <input
            type="text" 
            name="ipaddress_4"
            placeholder="192.168.1.0"
            value={ipaddress_4}
            onChange={e => setIpaddress_4(e.target.value)}  
            />
        </li>
        <li>
          Subnet
          <input 
            type="text" 
            name="intNetmask_4" 
            placeholder="255.255.255.0"
            value={intNetmask_4} 
            onChange={e => setIntNetmask_4(e.target.value)}  
            />
        </li>
          <div className="adminaccess">
            <ol>
            <p>Admin Access</p>
              <li>
                https
                <input 
                  type="checkbox"
                  name="https_4"
                  checked={https_4} 
                  onChange={handleCheckboxChange}
                  />
              </li>
              <li>
                Ping
                <input 
                  type="checkbox"
                  name="ping_4"
                  checked={ping_4} 
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
              name="enableDhcp_4"
              checked={enableDhcp_4} 
              onChange={handleCheckboxChange}
              />
          </label>
      </div>
        <div className="dhcpmenu">
          <form>
            <ol>
            <li>
                default Gateway
                <input 
                  type="text" 
                  name="defaultGateway_4" 
                  placeholder="192.168.1.1"
                  value={defaultGateway_4} 
                  onChange={e => setDefaultGateway_4(e.target.value)}  
                  />
              </li>
              <li>
                Subnet
                <input 
                  type="text" 
                  name="dhcpNetmask_4" 
                  placeholder="255.255.255.0"
                  value={dhcpNetmask_4} 
                  onChange={e => setDhcpNetmask_4(e.target.value)}  
                  />
              </li>
              Adress Range
              <li>
                From
                <input 
                  type="text" 
                  name="addressRangeFrom_4" 
                  placeholder="192.168.1.100"
                  value={addressRangeFrom_4} 
                  onChange={e => setAddressRangeFrom_4(e.target.value)}  
                  />
              </li>
              <li>
                To
                <input 
                  type="text" 
                  name="addressRangeTo_4" 
                  placeholder="192.168.1.200"
                  value={addressRangeTo_4} 
                  onChange={e => setAddressRangeTo_4(e.target.value)}
                  />
              </li>
            </ol>
          </form>
        </div>
    </form>
  </div>
  )
}