import React from "react";

export default function IntWAN2PPPoE() {
  return (`#interface WAN2 configuration:
  config system interface
    edit wan2
    set pppoe enable
    set username {username_WAN2}
    set password {password_WAN2}
    set allowaccess {https_WAN2} {ping_WAN2}
  end`
  )
}