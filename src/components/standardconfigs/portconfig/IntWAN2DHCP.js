import React from "react";

export default function IntWAN2DHCP() {
  return (`#interface WAN configuration:
  config system interface
    edit wan
    set mode dhcp
    set allowaccess {https_WAN2} {ping_WAN2}
  end`
  )
}