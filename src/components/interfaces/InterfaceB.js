import React, {useContext} from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

export default function InterfaceB () {

  const {int_B, setInt_B } = useContext(GlobalVarContext);
  const {enableDhcp_B, setEnableDhcp_B} = useContext(GlobalVarContext);
  const {portAlias_B, setPortAlias_B} = useContext(GlobalVarContext);
  const {ipaddress_B, setIpaddress_B} = useContext(GlobalVarContext);
  const {intNetmask_B, setIntNetmask_B} = useContext(GlobalVarContext);
  const {https_B, setHttps_B} = useContext(GlobalVarContext);
  const {ping_B, setPing_B} = useContext(GlobalVarContext);
  const {defaultGateway_B, setDefaultGateway_B} = useContext(GlobalVarContext);
  const {addressRangeFrom_B, setAddressRangeFrom_B} = useContext(GlobalVarContext);
  const {addressRangeTo_B, setAddressRangeTo_B}  = useContext(GlobalVarContext);
  const {dhcpNetmask_B, setDhcpNetmask_B} = useContext(GlobalVarContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_B": setInt_B(checked);
        break;
      case "enableDhcp_B": setEnableDhcp_B(checked);
        break;
      case "https_B": setHttps_B(checked);
      break;
      case "ping_B": setPing_B(checked);
      break;
      default:
    break;
    }
  };

  return (

  <div className="submenu">
    Port <b>B</b> configuration
    <form>
      <ol>
        <li>
          enable
          <input 
              type="checkbox"
              name="int_B"
              checked={int_B} 
              onChange={handleCheckboxChange}
              />
        </li>
        <li>
          Port Alias
          <input 
            type="text" 
            name="portAlias_B"
            placeholder="LAN_XY"
            value={portAlias_B} 
            onChange={e => setPortAlias_B(e.target.value)}  
            />
        </li>
        <li>
          IP
          <input
            type="text" 
            name="ipaddress_B"
            placeholder="192.168.1.0"
            value={ipaddress_B}
            onChange={e => setIpaddress_B(e.target.value)}  
            />
        </li>
        <li>
          Subnet
          <input 
            type="text" 
            name="intNetmask_B" 
            placeholder="255.255.255.0"
            value={intNetmask_B} 
            onChange={e => setIntNetmask_B(e.target.value)}  
            />
        </li>
          <div className="adminaccess">
            <ol>
            <p>Admin Access</p>
              <li>
                https
                <input 
                  type="checkbox"
                  name="https_B"
                  checked={https_B} 
                  onChange={handleCheckboxChange}
                  />
              </li>
              <li>
                Ping
                <input 
                  type="checkbox"
                  name="ping_B"
                  checked={ping_B} 
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
              name="enableDhcp_B"
              checked={enableDhcp_B} 
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
                  name="defaultGateway_B" 
                  placeholder="192.168.1.1"
                  value={defaultGateway_B} 
                  onChange={e => setDefaultGateway_B(e.target.value)}  
                  />
              </li>
              <li>
               Subnet
                <input 
                  type="text" 
                  name="dhcpNetmask_B" 
                  placeholder="255.255.255.0"
                  value={dhcpNetmask_B} 
                  onChange={e => setDhcpNetmask_B(e.target.value)}  
                  />
              </li>
              Adress Range
              <li>
                From
                <input 
                  type="text" 
                  name="addressRangeFrom_B" 
                  placeholder="192.168.1.100"
                  value={addressRangeFrom_B} 
                  onChange={e => setAddressRangeFrom_B(e.target.value)}  
                  />
              </li>
              <li>
                To
                <input 
                  type="text" 
                  name="addressRangeTo_B" 
                  placeholder="192.168.1.200"
                  value={addressRangeTo_B} 
                  onChange={e => setAddressRangeTo_B(e.target.value)}
                  />
              </li>
            </ol>
          </form>
        </div>
    </form>
  </div>
  )
}