import React, {useContext }from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

  export default function InterfaceWAN () {

    const {int_WAN, setInt_WAN } = useContext(GlobalVarContext);
    const {enableDhcp_WAN, setEnableDhcp_WAN} = useContext(GlobalVarContext);
    const {portAlias_WAN, setPortAlias_WAN} = useContext(GlobalVarContext);
    const {ipaddress_WAN, setIpaddress_WAN} = useContext(GlobalVarContext);
    const {intNetmask_WAN, setIntNetmask_WAN} = useContext(GlobalVarContext);
    const {https_WAN, setHttps_WAN} = useContext(GlobalVarContext);
    const {ping_WAN, setPing_WAN} = useContext(GlobalVarContext);
    const {defaultGateway_WAN, setDefaultGateway_WAN} = useContext(GlobalVarContext);
    const {addressRangeFrom_WAN, setAddressRangeFrom_WAN} = useContext(GlobalVarContext);
    const {addressRangeTo_WAN, setAddressRangeTo_WAN}  = useContext(GlobalVarContext);
    const {dhcpNetmask_WAN, setDhcpNetmask_WAN} = useContext(GlobalVarContext);

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      switch (name) {
        case "int_WAN": setInt_WAN(checked);
          break;
        case "enableDhcp_WAN": setEnableDhcp_WAN(checked);
          break;
        case "https_WAN": setHttps_WAN(checked);
        break;
        case "ping_WAN": setPing_WAN(checked);
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
            enable:
            <input 
                type="checkbox"
                name="int_WAN"
                checked={int_WAN} 
                onChange={handleCheckboxChange}
                />
          </li>
  
          <li>
            Port Alias
            <input 
              type="text" 
              name="portAlias_WAN"
              placeholder="LAN_XY"
              value={portAlias_WAN} 
              onChange={e => setPortAlias_WAN(e.target.value)}  
              />
          </li>
          <li>
            IP
            <input
              type="text" 
              name="ipaddress_WAN"
              placeholder="192.168.1.0"
              value={ipaddress_WAN}
              onChange={e => setIpaddress_WAN(e.target.value)}  
              />
          </li>
          <li>
            Subnetz
            <input 
              type="text" 
              name="intNetmask_WAN" 
              placeholder="255.255.255.0"
              value={intNetmask_WAN} 
              onChange={e => setIntNetmask_WAN(e.target.value)}  
              />
          </li>
            <div className="adminaccess">
              <ol>
              <p>Admin Access:</p>
                <li>
                  https:
                  <input 
                    type="checkbox"
                    name="https_WAN"
                    checked={https_WAN} 
                    onChange={handleCheckboxChange}
                  />
                </li>
                <li>
                  Ping:
                  <input 
                    type="checkbox"
                    name="ping_WAN"
                    checked={ping_WAN} 
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
                name="enableDhcp_WAN"
                checked={enableDhcp_WAN} 
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
                    name="defaultGateway_WAN" 
                    placeholder="192.168.1.1"
                    value={defaultGateway_WAN} 
                    onChange={e => setDefaultGateway_WAN(e.target.value)}  
                    />
                </li>
                <li>
                  Netmask
                  <input 
                    type="text" 
                    name="dhcpNetmask_WAN" 
                    placeholder="255.255.255.0"
                    value={dhcpNetmask_WAN} 
                    onChange={e => setDhcpNetmask_WAN(e.target.value)}  
                    />
                </li>
                Adress Range:
                <li>
                  From:
                  <input 
                    type="text" 
                    name="addressRangeFrom_WAN" 
                    placeholder="192.168.1.100"
                    value={addressRangeFrom_WAN} 
                    onChange={e => setAddressRangeFrom_WAN(e.target.value)}  
                    />
                </li>
                <li>
                  To:
                  <input 
                    type="text" 
                    name="addressRangeTo_WAN" 
                    placeholder="192.168.1.200"
                    value={addressRangeTo_WAN} 
                    onChange={e => setAddressRangeTo_WAN(e.target.value)}
                    />
                </li>
              </ol>
            </form>
          </div>
      </form>
    </div>
    )
  }