import React from "react";

export default function DHCPServB() {
  return (`#system dhcp server
  config system dhcp server
    edit B
      set dns-service default
      set default-gateway {defaultGateway_B}
      set netmask {dhcpNetmask_B}
      set interface "lan"
      config ip-range
        edit B
          set start-ip {addressRangeFrom_B}
          set end-ip {addressRangeTo_B}
        next
        set dhcp-server primary-dns {dnsServer1_B}
        set dhcp-server secondary-dns {dnsServer2_B}
      end`
  )
}
