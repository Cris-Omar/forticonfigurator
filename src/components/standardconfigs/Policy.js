export default function Policy() {
  
  return (`#standart Policies:
config firewall policy
  edit 1
      set srcintf "internal"
      set dstintf "wan1"
      set srcaddr "all"
      set dstaddr "all"
      set action accept
      set schedule "always"
      set service "ALL"
      set nat enable
  next
  edit 2
      set name "LAN-to-WAN"
      set srcintf "internal2"
      set dstintf "wan1"
      set srcaddr "E_N_LAN"
      set dstaddr "all"
      set action accept
      set schedule "always"
      set service "G_S_standard"
      set utm-status enable
      {"SSLInspection"}
      set av-profile "standard_antivirus"
      set webfilter-profile "standard_webfilter"
      set dnsfilter-profile "standard_dnsfilter"
      set ips-sensor "standard_ips"
      set application-list "standard_appcontrol"
      set nat enable
  next
  edit 3
      set name "SSL_VPN-to-LAN"
      set srcintf "ssl.root"
      set dstintf "internal2"
      set srcaddr "SSLVPN_TUNNEL_ADDR1"
      set dstaddr "E_N_LAN"
      set action accept
      set schedule "always"
      set service "ALL"
      set groups "G_S_ClientVPN_Local-Auth"
  next
end`
  )
}