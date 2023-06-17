import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// Style
import "../style/styles.css"
// External Dependencies
import Clipboard from "../components/icons/Clipboard";
import Download from "../components/icons/Download"
import Mail from "../components/icons/Mail"
// Internal Components
import Ports40F from "../components/ports/Ports40F";
import Ports60F from "../components/ports/Ports60F";
import Policy from "../components/standardconfigs/Policy"
import SipAlg from "../components/standardconfigs/SipAlg"
import Services from "../components/standardconfigs/Services";
import VPNUser from "../components/standardconfigs/VPNUser";

import { GlobalVarContext } from "../components/context/GlobalVarContext";
import Int1 from "../components/standardconfigs/portconfig/Int1"
import DHCPServ1 from "../components/standardconfigs/dhcpconfig/DHCPServ1";
import Int2 from "../components/standardconfigs/portconfig/Int2"
import DHCPServ2 from "../components/standardconfigs/dhcpconfig/DHCPServ2";
import Int3 from "../components/standardconfigs/portconfig/Int3"
import DHCPServ3 from "../components/standardconfigs/dhcpconfig/DHCPServ3";
import Int4 from "../components/standardconfigs/portconfig/Int4"
import DHCPServ4 from "../components/standardconfigs/dhcpconfig/DHCPServ4";
import Int5 from "../components/standardconfigs/portconfig/Int5"
import DHCPServ5 from "../components/standardconfigs/dhcpconfig/DHCPServ5";
import IntA from "../components/standardconfigs/portconfig/IntA"
import DHCPServA from "../components/standardconfigs/dhcpconfig/DHCPServA";
import IntB from "../components/standardconfigs/portconfig/IntB"
import DHCPServB from "../components/standardconfigs/dhcpconfig/DHCPServB";
import IntWAN1PPPoE from "../components/standardconfigs/portconfig/IntWAN1PPPoE";
import IntWAN1DHCP from "../components/standardconfigs/portconfig/IntWAN1DHCP";
import IntWAN2PPPoE from "../components/standardconfigs/portconfig/IntWAN2PPPoE";
import IntWAN2DHCP from "../components/standardconfigs/portconfig/IntWAN2DHCP";

export default function Fortigate () {
  //config changer
  const inputHandler = event => {
    setText(event.target.value);
  }
  
  //handle copy
  const copy = async () => {
    await navigator.clipboard.writeText(content);
    alert('Konfiguration wurde Kopiert');
  }

  //handle Download
  function downloadFile(){
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "config.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    alert('Konfiguration wurde heruntergeladen');
  }

  const {
    int_1, enableDhcp_1, portAlias_1,  ipaddress_1, intNetmask_1, https_1, ping_1, defaultGateway_1, addressRangeFrom_1, addressRangeTo_1, dhcpNetmask_1, dnsServer1_1, dnsServer2_1,
    int_2, enableDhcp_2, portAlias_2,  ipaddress_2, intNetmask_2, https_2, ping_2, defaultGateway_2, addressRangeFrom_2, addressRangeTo_2, dhcpNetmask_2, dnsServer1_2, dnsServer2_2,
    int_3, enableDhcp_3, portAlias_3,  ipaddress_3, intNetmask_3, https_3, ping_3, defaultGateway_3, addressRangeFrom_3, addressRangeTo_3, dhcpNetmask_3, dnsServer1_3, dnsServer2_3,
    int_4, enableDhcp_4, portAlias_4,  ipaddress_4, intNetmask_4, https_4, ping_4, defaultGateway_4, addressRangeFrom_4, addressRangeTo_4, dhcpNetmask_4, dnsServer1_4, dnsServer2_4,
    int_5, enableDhcp_5, portAlias_5,  ipaddress_5, intNetmask_5, https_5, ping_5, defaultGateway_5, addressRangeFrom_5, addressRangeTo_5, dhcpNetmask_5, dnsServer1_5, dnsServer2_5,
    int_A, enableDhcp_A, portAlias_A,  ipaddress_A, intNetmask_A, https_A, ping_A, defaultGateway_A, addressRangeFrom_A, addressRangeTo_A, dhcpNetmask_A, dnsServer1_A, dnsServer2_A,
    int_B, enableDhcp_B, portAlias_B,  ipaddress_B, intNetmask_B, https_B, ping_B, defaultGateway_B, addressRangeFrom_B, addressRangeTo_B, dhcpNetmask_B, dnsServer1_B, dnsServer2_B,
    int_WAN1DHCP, int_WAN1PPPoE, username_WAN1, password_WAN1, https_WAN1,  ping_WAN1,
    int_WAN2DHCP, int_WAN2PPPoE, username_WAN2, password_WAN2, https_WAN2,  ping_WAN2,
   } = useContext(GlobalVarContext);

  //const to handle forti config file
  const [text, setText] = useState('');
  const [hostname, setHostname] = useState('');
  const [idleTime, setIdleTime] = useState("");
  const [selectedConfig, setSelectedConfig] = useState("40F")
  const [data, setData] = useState(selectedConfig);
  const [content, setContent] = useState("")
  const [portConfig, setPortConfig] = useState(null);
  const [policy, setPolicy] = useState(true);
  const [services, setServices] = useState(true);
  const [vpnUser, setVpnUser] = useState(true);
  const [sipAlg, setSipAlg] = useState(true);

  //handleCheckbox state change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "policy": setPolicy(checked);
        break;
      case "services": setServices(checked);
        break;
      case "vpnUser": setVpnUser(checked);
        break;
      case "sipAlg": setSipAlg(checked);
      break;
      default:
      break;
    }
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/configFiles/${selectedConfig}`);
        const regexHostname = new RegExp('{hostname}', 'g');
        const regexIdleTime = new RegExp('{idletimeout}', 'g');
        // poort 1
        const regexPortAlias_1 = new RegExp('{portAlias_1}', 'g')
        const regexIpaddress_1 = new RegExp('{ipaddress_1}', 'g')
        const regexIntNetmask_1 = new RegExp('{intNetmask_1}', 'g')
        const regexDefaultGateway_1 = new RegExp('{defaultGateway_1}', 'g')
        const regexDhcpNetmask_1 = new RegExp('{dhcpNetmask_1}', 'g')
        const regexAddressRangeFrom_1 = new RegExp('{addressRangeFrom_1}', 'g')
        const regexAddressRangeTo_1 = new RegExp('{addressRangeTo_1}', 'g')
        const regexDnsServer1_1 = new RegExp('{dnsServer1_1}', 'g')
        const regexDnsServer2_1 = new RegExp('{dnsServer2_1}', 'g')
        // poort 2
        const regexPortAlias_2 = new RegExp('{portAlias_2}', 'g')
        const regexIpaddress_2 = new RegExp('{ipaddress_2}', 'g')
        const regexIntNetmask_2 = new RegExp('{intNetmask_2}', 'g')
        const regexDefaultGateway_2 = new RegExp('{defaultGateway_2}', 'g')
        const regexDhcpNetmask_2 = new RegExp('{dhcpNetmask_2}', 'g')
        const regexAddressRangeFrom_2 = new RegExp('{addressRangeFrom_2}', 'g')
        const regexAddressRangeTo_2 = new RegExp('{addressRangeTo_2}', 'g')
        const regexDnsServer1_2 = new RegExp('{dnsServer1_2}', 'g')
        const regexDnsServer2_2 = new RegExp('{dnsServer2_2}', 'g')
        // poort 3
        const regexPortAlias_3 = new RegExp('{portAlias_3}', 'g')
        const regexIpaddress_3 = new RegExp('{ipaddress_3}', 'g')
        const regexIntNetmask_3 = new RegExp('{intNetmask_3}', 'g')
        const regexDefaultGateway_3 = new RegExp('{defaultGateway_3}', 'g')
        const regexDhcpNetmask_3 = new RegExp('{dhcpNetmask_3}', 'g')
        const regexAddressRangeFrom_3 = new RegExp('{addressRangeFrom_3}', 'g')
        const regexAddressRangeTo_3 = new RegExp('{addressRangeTo_3}', 'g')
        const regexDnsServer1_3 = new RegExp('{dnsServer1_3}', 'g')
        const regexDnsServer2_3 = new RegExp('{dnsServer2_3}', 'g')
        // poort 4
        const regexPortAlias_4 = new RegExp('{portAlias_4}', 'g')
        const regexIpaddress_4 = new RegExp('{ipaddress_4}', 'g')
        const regexIntNetmask_4 = new RegExp('{intNetmask_4}', 'g')
        const regexDefaultGateway_4 = new RegExp('{defaultGateway_4}', 'g')
        const regexDhcpNetmask_4 = new RegExp('{dhcpNetmask_4}', 'g')
        const regexAddressRangeFrom_4 = new RegExp('{addressRangeFrom_4}', 'g')
        const regexAddressRangeTo_4 = new RegExp('{addressRangeTo_4}', 'g')
        const regexDnsServer1_4 = new RegExp('{dnsServer1_4}', 'g')
        const regexDnsServer2_4 = new RegExp('{dnsServer2_4}', 'g')
        // poort 5
        const regexPortAlias_5 = new RegExp('{portAlias_5}', 'g')
        const regexIpaddress_5 = new RegExp('{ipaddress_5}', 'g')
        const regexIntNetmask_5 = new RegExp('{intNetmask_5}', 'g')
        const regexDefaultGateway_5 = new RegExp('{defaultGateway_5}', 'g')
        const regexDhcpNetmask_5 = new RegExp('{dhcpNetmask_5}', 'g')
        const regexAddressRangeFrom_5 = new RegExp('{addressRangeFrom_5}', 'g')
        const regexAddressRangeTo_5 = new RegExp('{addressRangeTo_5}', 'g')
        const regexDnsServer1_5 = new RegExp('{dnsServer1_5}', 'g')
        const regexDnsServer2_5 = new RegExp('{dnsServer2_5}', 'g')
        // poort A
        const regexPortAlias_A = new RegExp('{portAlias_A}', 'g')
        const regexIpaddress_A = new RegExp('{ipaddress_A}', 'g')
        const regexIntNetmask_A = new RegExp('{intNetmask_A}', 'g')
        const regexDefaultGateway_A = new RegExp('{defaultGateway_A}', 'g')
        const regexDhcpNetmask_A = new RegExp('{dhcpNetmask_A}', 'g')
        const regexAddressRangeFrom_A = new RegExp('{addressRangeFrom_A}', 'g')
        const regexAddressRangeTo_A = new RegExp('{addressRangeTo_A}', 'g')
        const regexDnsServer1_A = new RegExp('{dnsServer1_A}', 'g')
        const regexDnsServer2_A = new RegExp('{dnsServer2_A}', 'g')
        // Poort B
        const regexPortAlias_B = new RegExp('{portAlias_B}', 'g')
        const regexIpaddress_B = new RegExp('{ipaddress_B}', 'g')
        const regexIntNetmask_B = new RegExp('{intNetmask_B}', 'g')
        const regexDefaultGateway_B = new RegExp('{defaultGateway_B}', 'g')
        const regexDhcpNetmask_B = new RegExp('{dhcpNetmask_B}', 'g')
        const regexAddressRangeFrom_B = new RegExp('{addressRangeFrom_B}', 'g')
        const regexAddressRangeTo_B = new RegExp('{addressRangeTo_B}', 'g')
        const regexDnsServer1_B = new RegExp('{dnsServer1_B}', 'g')
        const regexDnsServer2_B = new RegExp('{dnsServer2_B}', 'g')
        // port WAN
        const regexUsername_WAN1 = new RegExp('{username_WAN1}', 'g')
        const regexPassword_WAN1 = new RegExp('{password_WAN1}', 'g')
        // Port WAN2
        const regexUsername_WAN2 = new RegExp('{username_WAN2}', 'g')
        const regexPassword_WAN2 = new RegExp('{password_WAN2}', 'g')

        const replacedText = response.data
          //replace data comming from "Fortigate.js"
          .replace(regexHostname, hostname)
          .replace(regexIdleTime, idleTime)
          .replace('{policy}', policy ? Policy : '')
          .replace('{services}', services ? Services : '')
          .replace('{vpnuser}', vpnUser ? VPNUser : '')
          .replace('{sipalg}', sipAlg ? SipAlg : '')
          // port 1
          .replace('{int_1}', int_1 ? Int1 : '')
          .replace('{dhcp_1}', enableDhcp_1 ? DHCPServ1 : '')
          .replace(regexPortAlias_1, portAlias_1)
          .replace(regexIpaddress_1, ipaddress_1)
          .replace(regexIntNetmask_1, intNetmask_1)
          .replace('{https_1}', https_1 ? "https" : '')
          .replace('{ping_1}', ping_1 ? "ping" : '')
          .replace(regexDefaultGateway_1, defaultGateway_1)
          .replace(regexDhcpNetmask_1, dhcpNetmask_1)
          .replace(regexAddressRangeFrom_1, addressRangeFrom_1)
          .replace(regexAddressRangeTo_1, addressRangeTo_1)
          .replace(regexDnsServer1_1, dnsServer1_1)
          .replace(regexDnsServer2_1, dnsServer2_1)
          // port 2
          .replace('{int_2}', int_2 ? Int2 : '')
          .replace('{dhcp_2}', enableDhcp_2 ? DHCPServ2 : '')
          .replace(regexPortAlias_2, portAlias_2)
          .replace(regexIpaddress_2, ipaddress_2)
          .replace(regexIntNetmask_2, intNetmask_2)
          .replace('{https_2}', https_2 ? "https" : '')
          .replace('{ping_2}', ping_2 ? "ping" : '')
          .replace(regexDefaultGateway_2, defaultGateway_2)
          .replace(regexDhcpNetmask_2, dhcpNetmask_2)
          .replace(regexAddressRangeFrom_2, addressRangeFrom_2)
          .replace(regexAddressRangeTo_2, addressRangeTo_2)
          .replace(regexDnsServer1_2, dnsServer1_2)
          .replace(regexDnsServer2_2, dnsServer2_2)
          // port 3
          .replace('{int_3}', int_3 ? Int3 : '')
          .replace('{dhcp_3}', enableDhcp_3 ? DHCPServ3 : '')
          .replace(regexPortAlias_3, portAlias_3)
          .replace(regexIpaddress_3, ipaddress_3)
          .replace(regexIntNetmask_3, intNetmask_3)
          .replace('{https_3}', https_3 ? "https" : '')
          .replace('{ping_3}', ping_3 ? "ping" : '')
          .replace(regexDefaultGateway_3, defaultGateway_3)
          .replace(regexDhcpNetmask_3, dhcpNetmask_3)
          .replace(regexAddressRangeFrom_3, addressRangeFrom_3)
          .replace(regexAddressRangeTo_3, addressRangeTo_3)
          .replace(regexDnsServer1_3, dnsServer1_3)
          .replace(regexDnsServer2_3, dnsServer2_3)
          // port 4
          .replace('{int_4}', int_4 ? Int4 : '')
          .replace('{dhcp_4}', enableDhcp_4 ? DHCPServ4 : '')
          .replace(regexPortAlias_4, portAlias_4)
          .replace(regexIpaddress_4, ipaddress_4)
          .replace(regexIntNetmask_4, intNetmask_4)
          .replace('{https_4}', https_4 ? "https" : '')
          .replace('{ping_4}', ping_4 ? "ping" : '')
          .replace(regexDefaultGateway_4, defaultGateway_4)
          .replace(regexDhcpNetmask_4, dhcpNetmask_4)
          .replace(regexAddressRangeFrom_4, addressRangeFrom_4)
          .replace(regexAddressRangeTo_4, addressRangeTo_4)
          .replace(regexDnsServer1_4, dnsServer1_4)
          .replace(regexDnsServer2_4, dnsServer2_4)
          // port 5
          .replace('{int_5}', int_5 ? Int5 : '')
          .replace('{dhcp_5}', enableDhcp_5 ? DHCPServ5 : '')
          .replace(regexPortAlias_5, portAlias_5)
          .replace(regexIpaddress_5, ipaddress_5)
          .replace(regexIntNetmask_5, intNetmask_5)
          .replace('{https_5}', https_5 ? "https" : '')
          .replace('{ping_5}', ping_5 ? "ping" : '')
          .replace(regexDefaultGateway_5, defaultGateway_5)
          .replace(regexDhcpNetmask_5, dhcpNetmask_5)
          .replace(regexAddressRangeFrom_5, addressRangeFrom_5)
          .replace(regexAddressRangeTo_5, addressRangeTo_5)
          .replace(regexDnsServer1_5, dnsServer1_5)
          .replace(regexDnsServer2_5, dnsServer2_5)
          // port A
          .replace('{int_A}', int_A ? IntA : '')
          .replace('{dhcp_A}', enableDhcp_A ? DHCPServA : '')
          .replace(regexPortAlias_A, portAlias_A)
          .replace(regexIpaddress_A, ipaddress_A)
          .replace(regexIntNetmask_A, intNetmask_A)
          .replace('{https_A}', https_A ? "https" : '')
          .replace('{ping_A}', ping_A ? "ping" : '')
          .replace(regexDefaultGateway_A, defaultGateway_A)
          .replace(regexDhcpNetmask_A, dhcpNetmask_A)
          .replace(regexAddressRangeFrom_A, addressRangeFrom_A)
          .replace(regexAddressRangeTo_A, addressRangeTo_A)
          .replace(regexDnsServer1_A, dnsServer1_A)
          .replace(regexDnsServer2_A, dnsServer2_A)
          // port B
          .replace('{int_B}', int_B ? IntB : '')
          .replace('{dhcp_B}', enableDhcp_B ? DHCPServB : '')
          .replace(regexPortAlias_B, portAlias_B)
          .replace(regexIpaddress_B, ipaddress_B)
          .replace(regexIntNetmask_B, intNetmask_B)
          .replace('{https_B}', https_B ? "https" : '')
          .replace('{ping_B}', ping_B ? "ping" : '')
          .replace(regexDefaultGateway_B, defaultGateway_B)
          .replace(regexDhcpNetmask_B, dhcpNetmask_B)
          .replace(regexAddressRangeFrom_B, addressRangeFrom_B)
          .replace(regexAddressRangeTo_B, addressRangeTo_B)
          .replace(regexDnsServer1_B, dnsServer1_B)
          .replace(regexDnsServer2_B, dnsServer2_B)
          // port WAN1
          .replace('{int_WAN1DHCP}', int_WAN1DHCP ? IntWAN1DHCP : '')
          .replace('{int_WAN1PPPoE}', int_WAN1PPPoE ? IntWAN1PPPoE : '')
          .replace(regexUsername_WAN1, username_WAN1)
          .replace(regexPassword_WAN1, password_WAN1)
          .replace('{https_WAN1}', https_WAN1 ? "https" : '')
          .replace('{ping_WAN1}', ping_WAN1 ? "ping" : '')
          // port WAN2
          .replace('{int_WAN2DHCP}', int_WAN2DHCP ? IntWAN2DHCP : '')
          .replace('{int_WAN2PPPoE}', int_WAN2PPPoE ? IntWAN2PPPoE : '')
          .replace(regexUsername_WAN2, username_WAN2)
          .replace(regexPassword_WAN2, password_WAN2)
          .replace('{https_WAN2}', https_WAN2 ? "https" : '')
          .replace('{ping_WAN2}', ping_WAN2 ? "ping" : '')

          setContent(replacedText)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();

  }, [selectedConfig, hostname, policy, services, vpnUser, sipAlg, idleTime,
    int_1, enableDhcp_1, portAlias_1,  ipaddress_1, intNetmask_1, https_1, ping_1, defaultGateway_1, addressRangeFrom_1, addressRangeTo_1, dhcpNetmask_1, dnsServer1_1, dnsServer2_1,
    int_2, enableDhcp_2, portAlias_2,  ipaddress_2, intNetmask_2, https_2, ping_2, defaultGateway_2, addressRangeFrom_2, addressRangeTo_2, dhcpNetmask_2, dnsServer1_2, dnsServer2_2,
    int_3, enableDhcp_3, portAlias_3,  ipaddress_3, intNetmask_3, https_3, ping_3, defaultGateway_3, addressRangeFrom_3, addressRangeTo_3, dhcpNetmask_3, dnsServer1_3, dnsServer2_3,
    int_4, enableDhcp_4, portAlias_4,  ipaddress_4, intNetmask_4, https_4, ping_4, defaultGateway_4, addressRangeFrom_4, addressRangeTo_4, dhcpNetmask_4, dnsServer1_4, dnsServer2_4,
    int_5, enableDhcp_5, portAlias_5,  ipaddress_5, intNetmask_5, https_5, ping_5, defaultGateway_5, addressRangeFrom_5, addressRangeTo_5, dhcpNetmask_5, dnsServer1_5, dnsServer2_5,
    int_A, enableDhcp_A, portAlias_A,  ipaddress_A, intNetmask_A, https_A, ping_A, defaultGateway_A, addressRangeFrom_A, addressRangeTo_A, dhcpNetmask_A, dnsServer1_A, dnsServer2_A,
    int_B, enableDhcp_B, portAlias_B,  ipaddress_B, intNetmask_B, https_B, ping_B, defaultGateway_B, addressRangeFrom_B, addressRangeTo_B, dhcpNetmask_B, dnsServer1_B, dnsServer2_B,
    int_WAN1DHCP, int_WAN1PPPoE, username_WAN1, password_WAN1, https_WAN1,  ping_WAN1,
    int_WAN2DHCP, int_WAN2PPPoE, username_WAN2, password_WAN2, https_WAN2,  ping_WAN2,
   ]);

  return(
    <div className="fortigate">
      <div className="configuration">
        <h1>Forticonfigurator</h1>

        {/*consig choose dropdown*/}
        <label>
           firewall configfile:  
          <select defaultValue="40F" onChange={e => setSelectedConfig(e.target.value)} >
            <option value="40F">40F</option>
            <option value="60F">60F</option>
          </select>
        </label>

        <form>
          {/*hosname field*/}
          <div className="object">
            <label>
              Hostname: 
              <input 
                type="text" 
                name="hostname" 
                value={hostname}
                placeholder="SDAGFW01"
                onChange={e => setHostname(e.target.value)} 
              />
            </label>
          </div>

          {selectedConfig === '40F' && <Ports40F />}
          {selectedConfig === '60F' && <Ports60F />}

          <div className="sdagstandards">
            <p>Which SDAG standards do you want to activate?</p>
            <ol>
              <li>
                Policies:
                <input 
                  type="checkbox"
                  name="policy"
                  checked={policy}
                  onChange={handleCheckboxChange}
                />
              </li>

              <li>
                SDAG Services:
                <input 
                  type="checkbox"
                  name="services"
                  checked={services}
                  onChange={handleCheckboxChange}
                />
              </li>

              <li>
                VPN User:
                <input 
                  type="checkbox"
                  name="vpnUser" 
                  checked={vpnUser}
                  onChange={handleCheckboxChange}
                />
              </li>
              <li>
                shutdown SIP ALG:
                <input 
                  type="checkbox"
                  name="sipAlg"
                  checked={sipAlg}
                  onChange={handleCheckboxChange}
                />
              </li>
            </ol>
          </div>

          {/*idletimeout field*/}
          <div className="object">
            <ol>
              <li>
              idletimeout:
              <input type="text"
                name="idleTime" 
                value={idleTime} 
                placeholder="in minuten"
                onChange={e => setIdleTime(e.target.value)} 
              />
              </li>
            </ol>
          </div>
        </form>
      </div>

        {/*functions(download, copy & send Mail) and config file*/}
      <div className="textfile">
        <Link onClick={copy}><Clipboard /></Link>
        <Link onClick={downloadFile} download><Download/></Link>
        
        <Link to="#" onClick={() => (window.location = `mailto:?subject=${encodeURIComponent(`Fortigate Konfigdatei für Model: ${selectedConfig}`)}
          &body=${encodeURIComponent('Achtung, keine Sensiblen Daten versenden!')}`)}>
          <Mail />
        </Link>

        {/*change values of config file*/}
        <div className="rawconfig">
          <h3>Konfig für {selectedConfig}</h3>
          <textarea type="text" spellCheck="false" value={content} onChange={inputHandler} />
        </div>
      </div>
    </div>
  );
}