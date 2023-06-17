import React, { createContext, useState } from "react";

export const GlobalVarContext = createContext();

export const VarContextProvider = ({ children }) => {
  // port 1
  const [int_1, setInt_1] = useState(false);
  const [enableDhcp_1, setEnableDhcp_1] = useState(false);
  const [portAlias_1, setPortAlias_1] = useState('');
  const [ipaddress_1, setIpaddress_1] = useState('');
  const [intNetmask_1, setIntNetmask_1] = useState('');
  const [https_1, setHttps_1] = useState(true);
  const [ping_1, setPing_1] = useState(true);
  const [defaultGateway_1, setDefaultGateway_1] = useState('');
  const [addressRangeFrom_1, setAddressRangeFrom_1] = useState('');
  const [addressRangeTo_1, setAddressRangeTo_1] = useState('');
  const [dhcpNetmask_1, setDhcpNetmask_1] = useState('');
  const [dnsServer1_1, setDnsServer1_1] = useState('');
  const [dnsServer2_1, setDnsServer2_1] = useState('');
  // port 2
  const [int_2, setInt_2 ] = useState(false);
  const [enableDhcp_2, setEnableDhcp_2] =  useState(false);
  const [portAlias_2, setPortAlias_2] =  useState('');
  const [ipaddress_2, setIpaddress_2] = useState('');
  const [intNetmask_2, setIntNetmask_2] =  useState('');
  const [https_2, setHttps_2] =  useState('');
  const [ping_2, setPing_2] =  useState('');
  const [defaultGateway_2, setDefaultGateway_2] = useState('');
  const [addressRangeFrom_2, setAddressRangeFrom_2] =  useState('');
  const [addressRangeTo_2, setAddressRangeTo_2]  =  useState('');
  const [dhcpNetmask_2, setDhcpNetmask_2] =  useState('');
  const [dnsServer1_2, setDnsServer1_2] = useState('');
  const [dnsServer2_2, setDnsServer2_2] = useState('');
  // port 3
  const [int_3, setInt_3 ] = useState(false);
  const [enableDhcp_3, setEnableDhcp_3] =  useState(false);
  const [portAlias_3, setPortAlias_3] =  useState('');
  const [ipaddress_3, setIpaddress_3] = useState('');
  const [intNetmask_3, setIntNetmask_3] =  useState('');
  const [https_3, setHttps_3] =  useState('');
  const [ping_3, setPing_3] =  useState('');
  const [defaultGateway_3, setDefaultGateway_3] = useState('');
  const [addressRangeFrom_3, setAddressRangeFrom_3] =  useState('');
  const [addressRangeTo_3, setAddressRangeTo_3]  =  useState('');
  const [dhcpNetmask_3, setDhcpNetmask_3] =  useState('');
  const [dnsServer1_3, setDnsServer1_3] = useState('');
  const [dnsServer2_3, setDnsServer2_3] = useState('');
  // port 4
  const [int_4, setInt_4 ] = useState(false);
  const [enableDhcp_4, setEnableDhcp_4] =  useState(false);
  const [portAlias_4, setPortAlias_4] =  useState('');
  const [ipaddress_4, setIpaddress_4] = useState('');
  const [intNetmask_4, setIntNetmask_4] =  useState('');
  const [https_4, setHttps_4] =  useState('');
  const [ping_4, setPing_4] =  useState('');
  const [defaultGateway_4, setDefaultGateway_4] = useState('');
  const [addressRangeFrom_4, setAddressRangeFrom_4] =  useState('');
  const [addressRangeTo_4, setAddressRangeTo_4]  =  useState('');
  const [dhcpNetmask_4, setDhcpNetmask_4] =  useState('');
  const [dnsServer1_4, setDnsServer1_4] = useState('');
  const [dnsServer2_4, setDnsServer2_4] = useState('');
  // port 5
  const [int_5, setInt_5 ] = useState(false);
  const [enableDhcp_5, setEnableDhcp_5] =  useState(false);
  const [portAlias_5, setPortAlias_5] =  useState('');
  const [ipaddress_5, setIpaddress_5] = useState('');
  const [intNetmask_5, setIntNetmask_5] =  useState('');
  const [https_5, setHttps_5] =  useState('');
  const [ping_5, setPing_5] =  useState('');
  const [defaultGateway_5, setDefaultGateway_5] = useState('');
  const [addressRangeFrom_5, setAddressRangeFrom_5] =  useState('');
  const [addressRangeTo_5, setAddressRangeTo_5]  =  useState('');
  const [dhcpNetmask_5, setDhcpNetmask_5] =  useState('');
  const [dnsServer1_5, setDnsServer1_5] = useState('');
  const [dnsServer2_5, setDnsServer2_5] = useState('');
  // port A
  const [int_A, setInt_A ] = useState(false);
  const [enableDhcp_A, setEnableDhcp_A] =  useState(false);
  const [portAlias_A, setPortAlias_A] =  useState('');
  const [ipaddress_A, setIpaddress_A] = useState('');
  const [intNetmask_A, setIntNetmask_A] =  useState('');
  const [https_A, setHttps_A] =  useState('');
  const [ping_A, setPing_A] =  useState('');
  const [defaultGateway_A, setDefaultGateway_A] = useState('');
  const [addressRangeFrom_A, setAddressRangeFrom_A] =  useState('');
  const [addressRangeTo_A, setAddressRangeTo_A]  =  useState('');
  const [dhcpNetmask_A, setDhcpNetmask_A] =  useState('');
  const [dnsServer1_A, setDnsServer1_A] = useState('');
  const [dnsServer2_A, setDnsServer2_A] = useState('');
  // port B
  const [int_B, setInt_B ] = useState(false);
  const [enableDhcp_B, setEnableDhcp_B] =  useState(false);
  const [portAlias_B, setPortAlias_B] =  useState('');
  const [ipaddress_B, setIpaddress_B] = useState('');
  const [intNetmask_B, setIntNetmask_B] =  useState('');
  const [https_B, setHttps_B] =  useState('');
  const [ping_B, setPing_B] =  useState('');
  const [defaultGateway_B, setDefaultGateway_B] = useState('');
  const [addressRangeFrom_B, setAddressRangeFrom_B] =  useState('');
  const [addressRangeTo_B, setAddressRangeTo_B]  =  useState('');
  const [dhcpNetmask_B, setDhcpNetmask_B] =  useState('');
  const [dnsServer1_B, setDnsServer1_B] = useState('');
  const [dnsServer2_B, setDnsServer2_B] = useState('');
  // port WAN1
  const [int_WAN1DHCP, setInt_WAN1DHCP ] = useState(false);
  const [int_WAN1PPPoE, setInt_WAN1PPPoE] = useState (false);
  const [username_WAN1, setUsername_WAN1] =  useState('');
  const [password_WAN1, setPassword_WAN1] =  useState('');
  const [https_WAN1, setHttps_WAN1] =  useState('');
  const [ping_WAN1, setPing_WAN1] =  useState('');
  // port WAN2
  const [int_WAN2DHCP, setInt_WAN2DHCP ] = useState(false);
  const [ int_WAN2PPPoE, setInt_WAN2PPPoE] = useState (false);
  const [username_WAN2, setUsername_WAN2] =  useState('');
  const [password_WAN2, setPassword_WAN2] =  useState('');
  const [https_WAN2, setHttps_WAN2] =  useState('');
  const [ping_WAN2, setPing_WAN2] =  useState('');

  const contextValues = {
    //port 1
    int_1, setInt_1, enableDhcp_1, setEnableDhcp_1, portAlias_1, setPortAlias_1, ipaddress_1, setIpaddress_1, intNetmask_1, setIntNetmask_1, https_1, setHttps_1,
    ping_1, setPing_1, defaultGateway_1, setDefaultGateway_1, addressRangeFrom_1, setAddressRangeFrom_1, addressRangeTo_1, setAddressRangeTo_1, dhcpNetmask_1, setDhcpNetmask_1,
    dnsServer1_1, setDnsServer1_1, dnsServer2_1, setDnsServer2_1,
    //port 2
    int_2, setInt_2, enableDhcp_2, setEnableDhcp_2, portAlias_2, setPortAlias_2, ipaddress_2, setIpaddress_2, intNetmask_2, setIntNetmask_2, https_2, setHttps_2,
    ping_2, setPing_2, defaultGateway_2, setDefaultGateway_2, addressRangeFrom_2, setAddressRangeFrom_2, addressRangeTo_2, setAddressRangeTo_2, dhcpNetmask_2, setDhcpNetmask_2,
    dnsServer1_2, setDnsServer1_2, dnsServer2_2, setDnsServer2_2,
    //port 3
    int_3, setInt_3, enableDhcp_3, setEnableDhcp_3, portAlias_3, setPortAlias_3, ipaddress_3, setIpaddress_3, intNetmask_3, setIntNetmask_3, https_3, setHttps_3,
    ping_3, setPing_3, defaultGateway_3, setDefaultGateway_3, addressRangeFrom_3, setAddressRangeFrom_3, addressRangeTo_3, setAddressRangeTo_3, dhcpNetmask_3, setDhcpNetmask_3,
    dnsServer1_3, setDnsServer1_3, dnsServer2_3, setDnsServer2_3,
    //port 4
    int_4, setInt_4, enableDhcp_4, setEnableDhcp_4, portAlias_4, setPortAlias_4, ipaddress_4, setIpaddress_4, intNetmask_4, setIntNetmask_4, https_4, setHttps_4,
    ping_4, setPing_4, defaultGateway_4, setDefaultGateway_4, addressRangeFrom_4, setAddressRangeFrom_4, addressRangeTo_4, setAddressRangeTo_4, dhcpNetmask_4, setDhcpNetmask_4,
    dnsServer1_4, setDnsServer1_4, dnsServer2_4, setDnsServer2_4,
    //port 5
    int_5, setInt_5, enableDhcp_5, setEnableDhcp_5, portAlias_5, setPortAlias_5, ipaddress_5, setIpaddress_5, intNetmask_5, setIntNetmask_5, https_5, setHttps_5,
    ping_5, setPing_5, defaultGateway_5, setDefaultGateway_5, addressRangeFrom_5, setAddressRangeFrom_5, addressRangeTo_5, setAddressRangeTo_5, dhcpNetmask_5, setDhcpNetmask_5,
    dnsServer1_5, setDnsServer1_5, dnsServer2_5, setDnsServer2_5,
    //port A
    int_A, setInt_A, enableDhcp_A, setEnableDhcp_A, portAlias_A, setPortAlias_A, ipaddress_A, setIpaddress_A, intNetmask_A, setIntNetmask_A, https_A, setHttps_A,
    ping_A, setPing_A, defaultGateway_A, setDefaultGateway_A, addressRangeFrom_A, setAddressRangeFrom_A, addressRangeTo_A, setAddressRangeTo_A, dhcpNetmask_A, setDhcpNetmask_A,
    dnsServer1_A, setDnsServer1_A, dnsServer2_A, setDnsServer2_A,
    //port B
    int_B, setInt_B, enableDhcp_B, setEnableDhcp_B, portAlias_B, setPortAlias_B, ipaddress_B, setIpaddress_B, intNetmask_B, setIntNetmask_B, https_B, setHttps_B,
    ping_B, setPing_B, defaultGateway_B, setDefaultGateway_B, addressRangeFrom_B, setAddressRangeFrom_B, addressRangeTo_B, setAddressRangeTo_B, dhcpNetmask_B, setDhcpNetmask_B,
    dnsServer1_B, setDnsServer1_B, dnsServer2_B, setDnsServer2_B,
    //port WAN1
    int_WAN1DHCP, setInt_WAN1DHCP, int_WAN1PPPoE, setInt_WAN1PPPoE, username_WAN1, setUsername_WAN1, password_WAN1, setPassword_WAN1, https_WAN1, setHttps_WAN1, ping_WAN1, setPing_WAN1,
    //port WAN2
    int_WAN2DHCP, setInt_WAN2DHCP, int_WAN2PPPoE, setInt_WAN2PPPoE, username_WAN2, setUsername_WAN2, password_WAN2, setPassword_WAN2, https_WAN2, setHttps_WAN2, ping_WAN2, setPing_WAN2,
  };

  return (
    <GlobalVarContext.Provider value={contextValues}>
      {children}
    </GlobalVarContext.Provider>
  );
};
