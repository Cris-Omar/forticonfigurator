import React, {useContext} from "react"
import { GlobalVarContext } from "../context/GlobalVarContext";

export default function Interface2 () {

  const {int_2, setInt_2 } = useContext(GlobalVarContext);
  const {enableDhcp_2, setEnableDhcp_2} = useContext(GlobalVarContext);
  const {portAlias_2, setPortAlias_2} = useContext(GlobalVarContext);
  const {ipaddress_2, setIpaddress_2} = useContext(GlobalVarContext);
  const {intNetmask_2, setIntNetmask_2} = useContext(GlobalVarContext);
  const {https_2, setHttps_2} = useContext(GlobalVarContext);
  const {ping_2, setPing_2} = useContext(GlobalVarContext);
  const {defaultGateway_2, setDefaultGateway_2} = useContext(GlobalVarContext);
  const {addressRangeFrom_2, setAddressRangeFrom_2} = useContext(GlobalVarContext);
  const {addressRangeTo_2, setAddressRangeTo_2}  = useContext(GlobalVarContext);
  const {dhcpNetmask_2, setDhcpNetmask_2} = useContext(GlobalVarContext);
  const {dnsServer1_2, setDnsServer1_2} = useContext(GlobalVarContext);
  const {dnsServer2_2, setDnsServer2_2} = useContext(GlobalVarContext);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_2": setInt_2(checked);
        break;
      case "enableDhcp_2": setEnableDhcp_2(checked);
        break;
      case "https_2": setHttps_2(checked);
      break;
      case "ping_2": setPing_2(checked);
      break;
      default:
    break;
    }
  };

  return (

  <div className="submenu">
    Port <b>2</b> configuration
    <form>
      <ol>
        <li>
          enable
          <input 
              type="checkbox"
              name="int_2"
              checked={int_2} 
              onChange={handleCheckboxChange}
              />
        </li>

        <li>
          Port Alias
          <input 
            type="text" 
            name="portAlias_2"
            placeholder="LAN_XY"
            value={portAlias_2} 
            onChange={e => setPortAlias_2(e.target.value)}  
            />
        </li>
        <li>
          IP
          <input
            type="text" 
            name="ipaddress_2"
            placeholder="192.168.1.0"
            value={ipaddress_2}
            onChange={e => setIpaddress_2(e.target.value)}  
            />
        </li>
        <li>
          Subnet
          <input 
            type="text" 
            name="intNetmask_2" 
            placeholder="255.255.255.0"
            value={intNetmask_2} 
            onChange={e => setIntNetmask_2(e.target.value)}  
            />
        </li>
          <div className="adminaccess">
            <ol>
            <p>Admin Access</p>
              <li>
                https
                <input 
                  type="checkbox"
                  name="https_2"
                  checked={https_2} 
                  onChange={handleCheckboxChange}
                />
              </li>
              <li>
                Ping
                <input 
                  type="checkbox"
                  name="ping_2"
                  checked={ping_2} 
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
              name="enableDhcp_2"
              checked={enableDhcp_2} 
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
                  name="defaultGateway_2" 
                  placeholder="192.168.1.1"
                  value={defaultGateway_2} 
                  onChange={e => setDefaultGateway_2(e.target.value)}  
                  />
              </li>
              <li>
                Subnet
                <input 
                  type="text" 
                  name="dhcpNetmask_2" 
                  placeholder="255.255.255.0"
                  value={dhcpNetmask_2} 
                  onChange={e => setDhcpNetmask_2(e.target.value)}  
                  />
              </li>
              Adress Range
              <li>
                From
                <input 
                  type="text" 
                  name="addressRangeFrom_2" 
                  placeholder="192.168.1.100"
                  value={addressRangeFrom_2} 
                  onChange={e => setAddressRangeFrom_2(e.target.value)}  
                  />
              </li>
              <li>
                To
                <input 
                  type="text" 
                  name="addressRangeTo_2" 
                  placeholder="192.168.1.200"
                  value={addressRangeTo_2} 
                  onChange={e => setAddressRangeTo_2(e.target.value)}
                  />
              </li>
              <li>
                DNS Serv. 1 
                <input 
                  type="text" 
                  name="dnsServer1_2" 
                  value={dnsServer1_2}
                  placeholder="1.1.1.1"
                  onChange={e => setDnsServer1_2(e.target.value)} 
                />
              </li>
              <li>
                DNS Serv. 2 
                <input 
                  type="text" 
                  name="dnsServer2_2" 
                  value={dnsServer2_2}
                  placeholder="1.1.1.1"
                  onChange={e => setDnsServer2_2(e.target.value)} 
                />
              </li>
            </ol>
          </form>
        </div>
    </form>
  </div>
  )
}