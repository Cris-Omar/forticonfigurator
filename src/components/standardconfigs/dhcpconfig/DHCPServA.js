import React from "react";

export default function DHCPServ() {
  return (`#system dhcp server
  config system dhcp server
    edit A
      set dns-service default
      set default-gateway {defaultGateway_A}
      set netmask {dhcpNetmask_A}
      set interface "lan"
      config ip-range
        edit A
          set start-ip {addressRangeFrom_A}
          set end-ip {addressRangeTo_A}
        next
        set dhcp-server primary-dns {dnsServer1_A}
        set dhcp-server secondary-dns {dnsServer2_A}
      end`
  )
}
