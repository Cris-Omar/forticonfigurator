export default function VPNUser() {
  return (
    `#Standart VPN User:
    config user local
        edit "standard_User"
            set type password
            set passwd admin
        next
    end`
  )
}