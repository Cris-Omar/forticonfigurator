import React from "react";

export default function DHCPServ() {
  return (`##system dhcp server
  config system dhcp server
    edit 3
      set dns-service default
      set default-gateway {defaultGateway_3}
      set netmask {dhcpNetmask_3}
      set interface "lan"
      config ip-range
        edit 3
          set start-ip {addressRangeFrom_3}
          set end-ip {addressRangeTo_3}
        next
        set dhcp-server primary-dns {dnsServer1_3}
        set dhcp-server secondary-dns {dnsServer2_3}
      end`
  )
}
