import React, {useContext} from "react"
import { GlobalVarContext } from "../context/GlobalVarContext"

export default function Interface1 () {

  const {int_1, setInt_1 } = useContext(GlobalVarContext);
  const {enableDhcp_1, setEnableDhcp_1} = useContext(GlobalVarContext);
  const {portAlias_1, setPortAlias_1} = useContext(GlobalVarContext);
  const {ipaddress_1, setIpaddress_1} = useContext(GlobalVarContext);
  const {intNetmask_1, setIntNetmask_1} = useContext(GlobalVarContext);
  const {https_1, setHttps_1} = useContext(GlobalVarContext);
  const {ping_1, setPing_1} = useContext(GlobalVarContext);
  const {defaultGateway_1, setDefaultGateway_1} = useContext(GlobalVarContext);
  const {addressRangeFrom_1, setAddressRangeFrom_1} = useContext(GlobalVarContext);
  const {addressRangeTo_1, setAddressRangeTo_1}  = useContext(GlobalVarContext);
  const {dhcpNetmask_1, setDhcpNetmask_1} = useContext(GlobalVarContext);
  const {dnsServer1_1, setDnsServer1_1} = useContext(GlobalVarContext);
  const {dnsServer2_1, setDnsServer2_1} = useContext(GlobalVarContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_1": setInt_1(checked);
        break;
      case "enableDhcp_1": setEnableDhcp_1(checked);
        break;
      case "https_1": setHttps_1(checked);
      break;
      case "ping_1": setPing_1(checked);
      break;
      default:
    break;
    }
  };

  return (

  <div className="submenu">
    Port <b>1</b> configuration
    <form>
      <ol>
        <li>
          enable
          <input 
              type="checkbox"
              name="int_1"
              checked={int_1} 
              onChange={handleCheckboxChange}
              />
        </li>
        <li>
          Port Alias
          <input 
            type="text" 
            name="portAlias_1"
            placeholder="LAN_XY"
            value={portAlias_1} 
            onChange={e => setPortAlias_1(e.target.value)}  
            />
        </li>
        <li>
          IP
          <input
            type="text" 
            name="ipaddress_1"
            placeholder="192.168.1.0"
            value={ipaddress_1}
            onChange={e => setIpaddress_1(e.target.value)}  
            />
        </li>
        <li>
          Subnet
          <input 
            type="text" 
            name="intNetmask_1" 
            placeholder="255.255.255.0"
            value={intNetmask_1} 
            onChange={e => setIntNetmask_1(e.target.value)}  
            />
        </li>
          <div className="adminaccess">
            <ol>
            <p>Admin Access</p>
              <li>
                https
                <input 
                  type="checkbox"
                  name="https_1"
                  checked={https_1} 
                  onChange={handleCheckboxChange}
                  />
              </li>
              <li>
                Ping
                <input 
                  type="checkbox"
                  name="ping_1"
                  checked={ping_1} 
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
              name="enableDhcp_1"
              checked={enableDhcp_1} 
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
                  name="defaultGateway_1" 
                  placeholder="192.168.1.1"
                  value={defaultGateway_1} 
                  onChange={e => setDefaultGateway_1(e.target.value)}  
                  />
              </li>
              <li>
                Subnet
                <input 
                  type="text" 
                  name="dhcpNetmask_1" 
                  placeholder="255.255.255.0"
                  value={dhcpNetmask_1} 
                  onChange={e => setDhcpNetmask_1(e.target.value)}  
                  />
              </li>
              Adress Range
              <li>
                From
                <input 
                  type="text" 
                  name="addressRangeFrom_1" 
                  placeholder="192.168.1.100"
                  value={addressRangeFrom_1} 
                  onChange={e => setAddressRangeFrom_1(e.target.value)}  
                  />
              </li>
              <li>
                To
                <input 
                  type="text" 
                  name="addressRangeTo_1" 
                  placeholder="192.168.1.200"
                  value={addressRangeTo_1} 
                  onChange={e => setAddressRangeTo_1(e.target.value)}
                  />
              </li>
              <li>
                DNS Serv. 1 
                <input 
                  type="text" 
                  name="dnsServer1_1" 
                  value={dnsServer1_1}
                  placeholder="1.1.1.1"
                  onChange={e => setDnsServer1_1(e.target.value)} 
                />
              </li>
              <li>
                DNS Serv. 2 
                <input 
                  type="text" 
                  name="dnsServer2_1" 
                  value={dnsServer2_1}
                  placeholder="1.1.1.1"
                  onChange={e => setDnsServer2_1(e.target.value)} 
                />
              </li>
            </ol>
          </form>
        </div>
    </form>
  </div>
  )
}