import React, {useContext} from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

export default function Interface3 () {

  const {int_3, setInt_3 } = useContext(GlobalVarContext);
  const {enableDhcp_3, setEnableDhcp_3} = useContext(GlobalVarContext);
  const {portAlias_3, setPortAlias_3} = useContext(GlobalVarContext);
  const {ipaddress_3, setIpaddress_3} = useContext(GlobalVarContext);
  const {intNetmask_3, setIntNetmask_3} = useContext(GlobalVarContext);
  const {https_3, setHttps_3} = useContext(GlobalVarContext);
  const {ping_3, setPing_3} = useContext(GlobalVarContext);
  const {defaultGateway_3, setDefaultGateway_3} = useContext(GlobalVarContext);
  const {addressRangeFrom_3, setAddressRangeFrom_3} = useContext(GlobalVarContext);
  const {addressRangeTo_3, setAddressRangeTo_3}  = useContext(GlobalVarContext);
  const {dhcpNetmask_3, setDhcpNetmask_3} = useContext(GlobalVarContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_3": setInt_3(checked);
        break;
      case "enableDhcp_3": setEnableDhcp_3(checked);
        break;
      case "https_3": setHttps_3(checked);
      break;
      case "ping_3": setPing_3(checked);
      break;
      default:
    break;
    }
  };

  return (
  <div className="submenu">
    Port <b>3</b> configuration
    <form>
      <ol>
        <li>
          enable
          <input 
              type="checkbox"
              name="int_3"
              checked={int_3} 
              onChange={handleCheckboxChange}
              />
        </li>

        <li>
          Port Alias
          <input 
            type="text" 
            name="portAlias_3"
            placeholder="LAN_XY"
            value={portAlias_3} 
            onChange={e => setPortAlias_3(e.target.value)}  
            />
        </li>
        <li>
          IP
          <input
            type="text" 
            name="ipaddress_3"
            placeholder="192.168.1.0"
            value={ipaddress_3}
            onChange={e => setIpaddress_3(e.target.value)}  
            />
        </li>
        <li>
          Subnet
          <input 
            type="text" 
            name="intNetmask_3" 
            placeholder="255.255.255.0"
            value={intNetmask_3} 
            onChange={e => setIntNetmask_3(e.target.value)}  
            />
        </li>
          <div className="adminaccess">
            <ol>
            <p>Admin Access</p>
              <li>
                https
                <input 
                  type="checkbox"
                  name="https_3"
                  checked={https_3} 
                  onChange={handleCheckboxChange}
                />
              </li>
              <li>
                Ping
                <input 
                  type="checkbox"
                  name="ping_3"
                  checked={ping_3} 
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
              name="enableDhcp_3"
              checked={enableDhcp_3} 
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
                  name="defaultGateway_3" 
                  placeholder="192.168.1.1"
                  value={defaultGateway_3} 
                  onChange={e => setDefaultGateway_3(e.target.value)}  
                  />
              </li>
              <li>
                Subnet
                <input 
                  type="text" 
                  name="dhcpNetmask_3" 
                  placeholder="255.255.255.0"
                  value={dhcpNetmask_3} 
                  onChange={e => setDhcpNetmask_3(e.target.value)}  
                  />
              </li>
              Adress Range
              <li>
                From
                <input 
                  type="text" 
                  name="addressRangeFrom_3" 
                  placeholder="192.168.1.100"
                  value={addressRangeFrom_3} 
                  onChange={e => setAddressRangeFrom_3(e.target.value)}  
                  />
              </li>
              <li>
                To
                <input 
                  type="text" 
                  name="addressRangeTo_3" 
                  placeholder="192.168.1.200"
                  value={addressRangeTo_3} 
                  onChange={e => setAddressRangeTo_3(e.target.value)}
                  />
              </li>
            </ol>
          </form>
        </div>
    </form>
  </div>
  )
}