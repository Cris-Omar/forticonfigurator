import React from "react";

export default function DHCPServ5() {
  return (`#system dhcp server
  config system dhcp server
    edit 5
      set dns-service default
      set default-gateway {defaultGateway_5}
      set netmask {dhcpNetmask_5}
      set interface "lan"
      config ip-range
        edit 5
          set start-ip {addressRangeFrom_5}
          set end-ip {addressRangeTo_5}
        next
      end`
  )
}
