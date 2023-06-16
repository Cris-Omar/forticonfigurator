import React from "react";

export default function DHCPServ() {
  return (`#system dhcp server
  config system dhcp server
    edit 2
      set dns-service default
      set default-gateway {defaultGateway_2}
      set netmask {dhcpNetmask_2}
      set interface "lan"
      config ip-range
        edit 2
          set start-ip {addressRangeFrom_2}
          set end-ip {addressRangeTo_2}
        next
        set dhcp-server primary-dns {dnsServer1_2}
        set dhcp-server secondary-dns {dnsServer2_2}
      end`
  )
}
