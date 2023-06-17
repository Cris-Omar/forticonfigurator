import React from "react";

export default function IntWAN1DHCP() {
  return (`#interface WAN configuration:
  config system interface
    edit wan
    set mode dhcp
    set allowaccess {https_WAN1} {ping_WAN1}
  end`
  )
}