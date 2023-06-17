import React from "react";

export default function int5() {
  return (
`#interface 5 configuration:
  edit "lan5"
    set vdom "root"
    set alias {portAlias_5}
    set ip {ipaddress_5} {intNetmask_5}
    set allowaccess {https_5} {ping_5}
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`
  )
}