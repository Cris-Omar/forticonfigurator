import React from "react";

export default function intB() {
  return (
`#interface B configuration:
  edit "lanB"
    set vdom "root"
    set alias {portAlias_B}
    set ip {ipaddress_B} {intNetmask_B}
    set allowaccess {https_B} {ping_B}
    set status down
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`
  )
}