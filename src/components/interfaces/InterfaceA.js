import React, {useContext}from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

export default function InterfaceA () {

  const {int_A, setInt_A } = useContext(GlobalVarContext);
  const {enableDhcp_A, setEnableDhcp_A} = useContext(GlobalVarContext);
  const {portAlias_A, setPortAlias_A} = useContext(GlobalVarContext);
  const {ipaddress_A, setIpaddress_A} = useContext(GlobalVarContext);
  const {intNetmask_A, setIntNetmask_A} = useContext(GlobalVarContext);
  const {https_A, setHttps_A} = useContext(GlobalVarContext);
  const {defaultGateway_A, setDefaultGateway_A} = useContext(GlobalVarContext);
  const {ping_A, setPing_A} = useContext(GlobalVarContext);
  const {addressRangeFrom_A, setAddressRangeFrom_A} = useContext(GlobalVarContext);
  const {addressRangeTo_A, setAddressRangeTo_A}  = useContext(GlobalVarContext);
  const {dhcpNetmask_A, setDhcpNetmask_A} = useContext(GlobalVarContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_A": setInt_A(checked);
        break;
      case "enableDhcp_A": setEnableDhcp_A(checked);
        break;
      case "https_A": setHttps_A(checked);
      break;
      case "ping_A": setPing_A(checked);
      break;
      default:
    break;
    }
  };

  return (

  <div className="submenu">
    Port <b>A</b> Configuration
    <form>
      <ol>
        <li>
          enable:
          <input 
              type="checkbox"
              name="int_A"
              checked={int_A} 
              onChange={handleCheckboxChange}
              />
        </li>

        <li>
          Port Alias
          <input 
            type="text" 
            name="portAlias_A"
            placeholder="LAN_XY"
            value={portAlias_A} 
            onChange={e => setPortAlias_A(e.target.value)}  
            />
        </li>
        <li>
          IP
          <input
            type="text" 
            name="ipaddress_A"
            placeholder="192.168.1.0"
            value={ipaddress_A}
            onChange={e => setIpaddress_A(e.target.value)}  
            />
        </li>
        <li>
          Subnetz
          <input 
            type="text" 
            name="intNetmask_A" 
            placeholder="255.255.255.0"
            value={intNetmask_A} 
            onChange={e => setIntNetmask_A(e.target.value)}  
            />
        </li>
          <div className="adminaccess">
            <ol>
            <p>Admin Access:</p>
              <li>
                https:
                <input 
                  type="checkbox"
                  name="https_A"
                  checked={https_A} 
                  onChange={handleCheckboxChange}
                />
              </li>
              <li>
                Ping:
                <input 
                  type="checkbox"
                  name="ping_A"
                  checked={ping_A} 
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
              name="enableDhcp_A"
              checked={enableDhcp_A} 
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
                  name="defaultGateway_A" 
                  placeholder="192.168.1.1"
                  value={defaultGateway_A} 
                  onChange={e => setDefaultGateway_A(e.target.value)}  
                  />
              </li>
              <li>
                Netmask
                <input 
                  type="text" 
                  name="dhcpNetmask_A" 
                  placeholder="255.255.255.0"
                  value={dhcpNetmask_A} 
                  onChange={e => setDhcpNetmask_A(e.target.value)}  
                  />
              </li>
              Adress Range:
              <li>
                From:
                <input 
                  type="text" 
                  name="addressRangeFrom_A" 
                  placeholder="192.168.1.100"
                  value={addressRangeFrom_A} 
                  onChange={e => setAddressRangeFrom_A(e.target.value)}  
                  />
              </li>
              <li>
                To:
                <input 
                  type="text" 
                  name="addressRangeTo_A" 
                  placeholder="192.168.1.200"
                  value={addressRangeTo_A} 
                  onChange={e => setAddressRangeTo_A(e.target.value)}
                  />
              </li>
            </ol>
          </form>
        </div>
    </form>
  </div>
  )
}