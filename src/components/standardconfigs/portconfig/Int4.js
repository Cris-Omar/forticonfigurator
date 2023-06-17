import React from "react";

export default function int4() {
  return (
`#interface 4 configuration:
  edit "lan4"
    set vdom "root"
    set alias {portAlias_4}
    set ip {ipaddress_4} {intNetmask_4}
    set allowaccess {https_4} {ping_4}
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`
  )
}