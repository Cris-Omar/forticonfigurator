import React from "react";

export default function IntWAN1PPPoE() {
  return (`#interface WAN configuration:
  config system interface
    edit wan1
    set pppoe enable
    set username {username_WAN1}
    set password {password_WAN1}
    set allowaccess {https_WAN1} {ping_WAN1}
  end`
  )
}