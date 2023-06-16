import React from "react";

export default function DHCPServ4() {
  return (`#system dhcp server
  config system dhcp server
    edit 4
      set dns-service default
      set default-gateway {defaultGateway_4}
      set netmask {dhcpNetmask_4}
      set interface "lan"
      config ip-range
        edit 4
          set start-ip {addressRangeFrom_4}
          set end-ip {addressRangeTo_4}
        next
        set dhcp-server primary-dns {dnsServer1_4}
        set dhcp-server secondary-dns {dnsServer2_4}
      end`
  )
}
