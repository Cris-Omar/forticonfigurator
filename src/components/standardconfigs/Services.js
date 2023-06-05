export default function Services() {
  
  return (`#Configure internet-service-name
  config firewall internet-service-name
  edit "Google-Other"
      set internet-service-id 65536
  next
  edit "Google-Web"
      set internet-service-id 65537
  next
  edit "Google-ICMP"
      set internet-service-id 65538
  next
  edit "Google-DNS"
      set internet-service-id 65539
  next
  edit "Google-Outbound_Email"
      set internet-service-id 65540
  next
  edit "Google-SSH"
      set internet-service-id 65542
  next
  edit "Google-FTP"
      set internet-service-id 65543
  next
  edit "Google-NTP"
      set internet-service-id 65544
  next
  edit "Google-Inbound_Email"
      set internet-service-id 65545
  next
  edit "Google-LDAP"
      set internet-service-id 65550
  next
  edit "Google-NetBIOS.Session.Service"
      set internet-service-id 65551
  next
  edit "Google-RTMP"
      set internet-service-id 65552
  next
  edit "Google-NetBIOS.Name.Service"
      set internet-service-id 65560
  next
  edit "Google-Google.Cloud"
      set internet-service-id 65641
  next
  edit "Google-Google.Bot"
      set internet-service-id 65643
  next
  edit "Google-Gmail"
      set internet-service-id 65646
  next
  edit "Facebook-Other"
      set internet-service-id 131072
  next
  edit "Facebook-Web"
      set internet-service-id 131073
  next
  edit "Facebook-ICMP"
      set internet-service-id 131074
  next
  edit "Facebook-DNS"
      set internet-service-id 131075
  next
  edit "Facebook-Outbound_Email"
      set internet-service-id 131076
  next
  edit "Facebook-SSH"
      set internet-service-id 131078
  next
  edit "Facebook-FTP"
      set internet-service-id 131079
  next
  edit "Facebook-NTP"
      set internet-service-id 131080
  next
  edit "Facebook-Inbound_Email"
      set internet-service-id 131081
  next
  edit "Facebook-LDAP"
      set internet-service-id 131086
  next
  edit "Facebook-NetBIOS.Session.Service"
      set internet-service-id 131087
  next
  edit "Facebook-RTMP"
      set internet-service-id 131088
  next
  edit "Facebook-NetBIOS.Name.Service"
      set internet-service-id 131096
  next
  edit "Facebook-Whatsapp"
      set internet-service-id 131184
  next
  edit "Facebook-Instagram"
      set internet-service-id 131189
  next
  edit "Apple-Other"
      set internet-service-id 196608
  next
  edit "Apple-Web"
      set internet-service-id 196609
  next
  edit "Apple-ICMP"
      set internet-service-id 196610
  next
  edit "Apple-DNS"
      set internet-service-id 196611
  next
  edit "Apple-Outbound_Email"
      set internet-service-id 196612
  next
  edit "Apple-SSH"
      set internet-service-id 196614
  next
  edit "Apple-FTP"
      set internet-service-id 196615
  next
  edit "Apple-NTP"
      set internet-service-id 196616
  next
  edit "Apple-Inbound_Email"
      set internet-service-id 196617
  next
  edit "Apple-LDAP"
      set internet-service-id 196622
  next
  edit "Apple-NetBIOS.Session.Service"
      set internet-service-id 196623
  next
  edit "Apple-RTMP"
      set internet-service-id 196624
  next
  edit "Apple-NetBIOS.Name.Service"
      set internet-service-id 196632
  next
  edit "Apple-App.Store"
      set internet-service-id 196723
  next
  edit "Apple-APNs"
      set internet-service-id 196747
  next
  edit "Yahoo-Other"
      set internet-service-id 262144
  next
  edit "Yahoo-Web"
      set internet-service-id 262145
  next
  edit "Yahoo-ICMP"
      set internet-service-id 262146
  next
  edit "Yahoo-DNS"
      set internet-service-id 262147
  next
  edit "Yahoo-Outbound_Email"
      set internet-service-id 262148
  next
  edit "Yahoo-SSH"
      set internet-service-id 262150
  next
  edit "Yahoo-FTP"
      set internet-service-id 262151
  next
  edit "Yahoo-NTP"
      set internet-service-id 262152
  next
  edit "Yahoo-Inbound_Email"
      set internet-service-id 262153
  next
  edit "Yahoo-LDAP"
      set internet-service-id 262158
  next
  edit "Yahoo-NetBIOS.Session.Service"
      set internet-service-id 262159
  next
  edit "Yahoo-RTMP"
      set internet-service-id 262160
  next
  edit "Yahoo-NetBIOS.Name.Service"
      set internet-service-id 262168
  next
  edit "Microsoft-Other"
      set internet-service-id 327680
  next
  edit "Microsoft-Web"
      set internet-service-id 327681
  next
  edit "Microsoft-ICMP"
      set internet-service-id 327682
  next
  edit "Microsoft-DNS"
      set internet-service-id 327683
  next
  edit "Microsoft-Outbound_Email"
      set internet-service-id 327684
  next
  edit "Microsoft-SSH"
      set internet-service-id 327686
  next
  edit "Microsoft-FTP"
      set internet-service-id 327687
  next
  edit "Microsoft-NTP"
      set internet-service-id 327688
  next
  edit "Microsoft-Inbound_Email"
      set internet-service-id 327689
  next
  edit "Microsoft-LDAP"
      set internet-service-id 327694
  next
  edit "Microsoft-NetBIOS.Session.Service"
      set internet-service-id 327695
  next
  edit "Microsoft-RTMP"
      set internet-service-id 327696
  next
  edit "Microsoft-NetBIOS.Name.Service"
      set internet-service-id 327704
  next
  edit "Microsoft-Skype_Teams"
      set internet-service-id 327781
  next
  edit "Microsoft-Office365"
      set internet-service-id 327782
  next
  edit "Microsoft-Azure"
      set internet-service-id 327786
  next
  edit "Microsoft-Bing.Bot"
      set internet-service-id 327788
  next
  edit "Microsoft-Outlook"
      set internet-service-id 327791
  next
  edit "Microsoft-Microsoft.Update"
      set internet-service-id 327793
  next
  edit "Microsoft-Dynamics"
      set internet-service-id 327837
  next
  edit "Microsoft-WNS"
      set internet-service-id 327839
  next
  edit "Microsoft-Office365.Published"
      set internet-service-id 327880
  next
  edit "Amazon-Other"
      set internet-service-id 393216
  next
  edit "Amazon-Web"
      set internet-service-id 393217
  next
  edit "Amazon-ICMP"
      set internet-service-id 393218
  next
  edit "Amazon-DNS"
      set internet-service-id 393219
  next
  edit "Amazon-Outbound_Email"
      set internet-service-id 393220
  next
  edit "Amazon-SSH"
      set internet-service-id 393222
  next
  edit "Amazon-FTP"
      set internet-service-id 393223
  next
  edit "Amazon-NTP"
      set internet-service-id 393224
  next
  edit "Amazon-Inbound_Email"
      set internet-service-id 393225
  next
  edit "Amazon-LDAP"
      set internet-service-id 393230
  next
  edit "Amazon-NetBIOS.Session.Service"
      set internet-service-id 393231
  next
  edit "Amazon-RTMP"
      set internet-service-id 393232
  next
  edit "Amazon-NetBIOS.Name.Service"
      set internet-service-id 393240
  next
  edit "Amazon-AWS"
      set internet-service-id 393320
  next
  edit "Amazon-AWS.WorkSpaces.Gateway"
      set internet-service-id 393403
  next
  edit "eBay-Other"
      set internet-service-id 458752
  next
  edit "eBay-Web"
      set internet-service-id 458753
  next
  edit "eBay-ICMP"
      set internet-service-id 458754
  next
  edit "eBay-DNS"
      set internet-service-id 458755
  next
  edit "eBay-Outbound_Email"
      set internet-service-id 458756
  next
  edit "eBay-SSH"
      set internet-service-id 458758
  next
  edit "eBay-FTP"
      set internet-service-id 458759
  next
  edit "eBay-NTP"
      set internet-service-id 458760
  next
  edit "eBay-Inbound_Email"
      set internet-service-id 458761
  next
  edit "eBay-LDAP"
      set internet-service-id 458766
  next
  edit "eBay-NetBIOS.Session.Service"
      set internet-service-id 458767
  next
  edit "eBay-RTMP"
      set internet-service-id 458768
  next
  edit "eBay-NetBIOS.Name.Service"
      set internet-service-id 458776
  next
  edit "PayPal-Other"
      set internet-service-id 524288
  next
  edit "PayPal-Web"
      set internet-service-id 524289
  next
  edit "PayPal-ICMP"
      set internet-service-id 524290
  next
  edit "PayPal-DNS"
      set internet-service-id 524291
  next
  edit "PayPal-Outbound_Email"
      set internet-service-id 524292
  next
  edit "PayPal-SSH"
      set internet-service-id 524294
  next
  edit "PayPal-FTP"
      set internet-service-id 524295
  next
  edit "PayPal-NTP"
      set internet-service-id 524296
  next
  edit "PayPal-Inbound_Email"
      set internet-service-id 524297
  next
  edit "PayPal-LDAP"
      set internet-service-id 524302
  next
  edit "PayPal-NetBIOS.Session.Service"
      set internet-service-id 524303
  next
  edit "PayPal-RTMP"
      set internet-service-id 524304
  next
  edit "PayPal-NetBIOS.Name.Service"
      set internet-service-id 524312
  next
  edit "Box-Other"
      set internet-service-id 589824
  next
  edit "Box-Web"
      set internet-service-id 589825
  next
  edit "Box-ICMP"
      set internet-service-id 589826
  next
  edit "Box-DNS"
      set internet-service-id 589827
  next
  edit "Box-Outbound_Email"
      set internet-service-id 589828
  next
  edit "Box-SSH"
      set internet-service-id 589830
  next
  edit "Box-FTP"
      set internet-service-id 589831
  next
  edit "Box-NTP"
      set internet-service-id 589832
  next
  edit "Box-Inbound_Email"
      set internet-service-id 589833
  next
  edit "Box-LDAP"
      set internet-service-id 589838
  next
  edit "Box-NetBIOS.Session.Service"
      set internet-service-id 589839
  next
  edit "Box-RTMP"
      set internet-service-id 589840
  next
  edit "Box-NetBIOS.Name.Service"
      set internet-service-id 589848
  next
  edit "Salesforce-Other"
      set internet-service-id 655360
  next
  edit "Salesforce-Web"
      set internet-service-id 655361
  next
  edit "Salesforce-ICMP"
      set internet-service-id 655362
  next
  edit "Salesforce-DNS"
      set internet-service-id 655363
  next
  edit "Salesforce-Outbound_Email"
      set internet-service-id 655364
  next
  edit "Salesforce-SSH"
      set internet-service-id 655366
  next
  edit "Salesforce-FTP"
      set internet-service-id 655367
  next
  edit "Salesforce-NTP"
      set internet-service-id 655368
  next
  edit "Salesforce-Inbound_Email"
      set internet-service-id 655369
  next
  edit "Salesforce-LDAP"
      set internet-service-id 655374
  next
  edit "Salesforce-NetBIOS.Session.Service"
      set internet-service-id 655375
  next
  edit "Salesforce-RTMP"
      set internet-service-id 655376
  next
  edit "Salesforce-NetBIOS.Name.Service"
      set internet-service-id 655384
  next
  edit "Salesforce-Email.Relay"
      set internet-service-id 655530
  next
  edit "Dropbox-Other"
      set internet-service-id 720896
  next
  edit "Dropbox-Web"
      set internet-service-id 720897
  next
  edit "Dropbox-ICMP"
      set internet-service-id 720898
  next
  edit "Dropbox-DNS"
      set internet-service-id 720899
  next
  edit "Dropbox-Outbound_Email"
      set internet-service-id 720900
  next
  edit "Dropbox-SSH"
      set internet-service-id 720902
  next
  edit "Dropbox-FTP"
      set internet-service-id 720903
  next
  edit "Dropbox-NTP"
      set internet-service-id 720904
  next
  edit "Dropbox-Inbound_Email"
      set internet-service-id 720905
  next
  edit "Dropbox-LDAP"
      set internet-service-id 720910
  next
  edit "Dropbox-NetBIOS.Session.Service"
      set internet-service-id 720911
  next
  edit "Dropbox-RTMP"
      set internet-service-id 720912
  next
  edit "Dropbox-NetBIOS.Name.Service"
      set internet-service-id 720920
  next
  edit "Netflix-Other"
      set internet-service-id 786432
  next
  edit "Netflix-Web"
      set internet-service-id 786433
  next
  edit "Netflix-ICMP"
      set internet-service-id 786434
  next
  edit "Netflix-DNS"
      set internet-service-id 786435
  next
  edit "Netflix-Outbound_Email"
      set internet-service-id 786436
  next
  edit "Netflix-SSH"
      set internet-service-id 786438
  next
  edit "Netflix-FTP"
      set internet-service-id 786439
  next
  edit "Netflix-NTP"
      set internet-service-id 786440
  next
  edit "Netflix-Inbound_Email"
      set internet-service-id 786441
  next
  edit "Netflix-LDAP"
      set internet-service-id 786446
  next
  edit "Netflix-NetBIOS.Session.Service"
      set internet-service-id 786447
  next
  edit "Netflix-RTMP"
      set internet-service-id 786448
  next
  edit "Netflix-NetBIOS.Name.Service"
      set internet-service-id 786456
  next
  edit "LinkedIn-Other"
      set internet-service-id 851968
  next
  edit "LinkedIn-Web"
      set internet-service-id 851969
  next
  edit "LinkedIn-ICMP"
      set internet-service-id 851970
  next
  edit "LinkedIn-DNS"
      set internet-service-id 851971
  next
  edit "LinkedIn-Outbound_Email"
      set internet-service-id 851972
  next
  edit "LinkedIn-SSH"
      set internet-service-id 851974
  next
  edit "LinkedIn-FTP"
      set internet-service-id 851975
  next
  edit "LinkedIn-NTP"
      set internet-service-id 851976
  next
  edit "LinkedIn-Inbound_Email"
      set internet-service-id 851977
  next
  edit "LinkedIn-LDAP"
      set internet-service-id 851982
  next
  edit "LinkedIn-NetBIOS.Session.Service"
      set internet-service-id 851983
  next
  edit "LinkedIn-RTMP"
      set internet-service-id 851984
  next
  edit "LinkedIn-NetBIOS.Name.Service"
      set internet-service-id 851992
  next
  edit "Adobe-Other"
      set internet-service-id 917504
  next
  edit "Adobe-Web"
      set internet-service-id 917505
  next
  edit "Adobe-ICMP"
      set internet-service-id 917506
  next
  edit "Adobe-DNS"
      set internet-service-id 917507
  next
  edit "Adobe-Outbound_Email"
      set internet-service-id 917508
  next
  edit "Adobe-SSH"
      set internet-service-id 917510
  next
  edit "Adobe-FTP"
      set internet-service-id 917511
  next
  edit "Adobe-NTP"
      set internet-service-id 917512
  next
  edit "Adobe-Inbound_Email"
      set internet-service-id 917513
  next
  edit "Adobe-LDAP"
      set internet-service-id 917518
  next
  edit "Adobe-NetBIOS.Session.Service"
      set internet-service-id 917519
  next
  edit "Adobe-RTMP"
      set internet-service-id 917520
  next
  edit "Adobe-NetBIOS.Name.Service"
      set internet-service-id 917528
  next
  edit "Adobe-Adobe.Cloud"
      set internet-service-id 917640
  next
  edit "Oracle-Other"
      set internet-service-id 983040
  next
  edit "Oracle-Web"
      set internet-service-id 983041
  next
  edit "Oracle-ICMP"
      set internet-service-id 983042
  next
  edit "Oracle-DNS"
      set internet-service-id 983043
  next
  edit "Oracle-Outbound_Email"
      set internet-service-id 983044
  next
  edit "Oracle-SSH"
      set internet-service-id 983046
  next
  edit "Oracle-FTP"
      set internet-service-id 983047
  next
  edit "Oracle-NTP"
      set internet-service-id 983048
  next
  edit "Oracle-Inbound_Email"
      set internet-service-id 983049
  next
  edit "Oracle-LDAP"
      set internet-service-id 983054
  next
  edit "Oracle-NetBIOS.Session.Service"
      set internet-service-id 983055
  next
  edit "Oracle-RTMP"
      set internet-service-id 983056
  next
  edit "Oracle-NetBIOS.Name.Service"
      set internet-service-id 983064
  next
  edit "Oracle-Oracle.Cloud"
      set internet-service-id 983171
  next
  edit "Hulu-Other"
      set internet-service-id 1048576
  next
  edit "Hulu-Web"
      set internet-service-id 1048577
  next
  edit "Hulu-ICMP"
      set internet-service-id 1048578
  next
  edit "Hulu-DNS"
      set internet-service-id 1048579
  next
  edit "Hulu-Outbound_Email"
      set internet-service-id 1048580
  next
  edit "Hulu-SSH"
      set internet-service-id 1048582
  next
  edit "Hulu-FTP"
      set internet-service-id 1048583
  next
  edit "Hulu-NTP"
      set internet-service-id 1048584
  next
  edit "Hulu-Inbound_Email"
      set internet-service-id 1048585
  next
  edit "Hulu-LDAP"
      set internet-service-id 1048590
  next
  edit "Hulu-NetBIOS.Session.Service"
      set internet-service-id 1048591
  next
  edit "Hulu-RTMP"
      set internet-service-id 1048592
  next
  edit "Hulu-NetBIOS.Name.Service"
      set internet-service-id 1048600
  next
  edit "Pinterest-Other"
      set internet-service-id 1114112
  next
  edit "Pinterest-Web"
      set internet-service-id 1114113
  next
  edit "Pinterest-ICMP"
      set internet-service-id 1114114
  next
  edit "Pinterest-DNS"
      set internet-service-id 1114115
  next
  edit "Pinterest-Outbound_Email"
      set internet-service-id 1114116
  next
  edit "Pinterest-SSH"
      set internet-service-id 1114118
  next
  edit "Pinterest-FTP"
      set internet-service-id 1114119
  next
  edit "Pinterest-NTP"
      set internet-service-id 1114120
  next
  edit "Pinterest-Inbound_Email"
      set internet-service-id 1114121
  next
  edit "Pinterest-LDAP"
      set internet-service-id 1114126
  next
  edit "Pinterest-NetBIOS.Session.Service"
      set internet-service-id 1114127
  next
  edit "Pinterest-RTMP"
      set internet-service-id 1114128
  next
  edit "Pinterest-NetBIOS.Name.Service"
      set internet-service-id 1114136
  next
  edit "LogMeIn-Other"
      set internet-service-id 1179648
  next
  edit "LogMeIn-Web"
      set internet-service-id 1179649
  next
  edit "LogMeIn-ICMP"
      set internet-service-id 1179650
  next
  edit "LogMeIn-DNS"
      set internet-service-id 1179651
  next
  edit "LogMeIn-Outbound_Email"
      set internet-service-id 1179652
  next
  edit "LogMeIn-SSH"
      set internet-service-id 1179654
  next
  edit "LogMeIn-FTP"
      set internet-service-id 1179655
  next
  edit "LogMeIn-NTP"
      set internet-service-id 1179656
  next
  edit "LogMeIn-Inbound_Email"
      set internet-service-id 1179657
  next
  edit "LogMeIn-LDAP"
      set internet-service-id 1179662
  next
  edit "LogMeIn-NetBIOS.Session.Service"
      set internet-service-id 1179663
  next
  edit "LogMeIn-RTMP"
      set internet-service-id 1179664
  next
  edit "LogMeIn-NetBIOS.Name.Service"
      set internet-service-id 1179672
  next
  edit "LogMeIn-GoTo.Suite"
      set internet-service-id 1179767
  next
  edit "Fortinet-Other"
      set internet-service-id 1245184
  next
  edit "Fortinet-Web"
      set internet-service-id 1245185
  next
  edit "Fortinet-ICMP"
      set internet-service-id 1245186
  next
  edit "Fortinet-DNS"
      set internet-service-id 1245187
  next
  edit "Fortinet-Outbound_Email"
      set internet-service-id 1245188
  next
  edit "Fortinet-SSH"
      set internet-service-id 1245190
  next
  edit "Fortinet-FTP"
      set internet-service-id 1245191
  next
  edit "Fortinet-NTP"
      set internet-service-id 1245192
  next
  edit "Fortinet-Inbound_Email"
      set internet-service-id 1245193
  next
  edit "Fortinet-LDAP"
      set internet-service-id 1245198
  next
  edit "Fortinet-NetBIOS.Session.Service"
      set internet-service-id 1245199
  next
  edit "Fortinet-RTMP"
      set internet-service-id 1245200
  next
  edit "Fortinet-NetBIOS.Name.Service"
      set internet-service-id 1245208
  next
  edit "Fortinet-FortiGuard"
      set internet-service-id 1245324
  next
  edit "Fortinet-FortiMail.Cloud"
      set internet-service-id 1245325
  next
  edit "Fortinet-FortiCloud"
      set internet-service-id 1245326
  next
  edit "Kaspersky-Other"
      set internet-service-id 1310720
  next
  edit "Kaspersky-Web"
      set internet-service-id 1310721
  next
  edit "Kaspersky-ICMP"
      set internet-service-id 1310722
  next
  edit "Kaspersky-DNS"
      set internet-service-id 1310723
  next
  edit "Kaspersky-Outbound_Email"
      set internet-service-id 1310724
  next
  edit "Kaspersky-SSH"
      set internet-service-id 1310726
  next
  edit "Kaspersky-FTP"
      set internet-service-id 1310727
  next
  edit "Kaspersky-NTP"
      set internet-service-id 1310728
  next
  edit "Kaspersky-Inbound_Email"
      set internet-service-id 1310729
  next
  edit "Kaspersky-LDAP"
      set internet-service-id 1310734
  next
  edit "Kaspersky-NetBIOS.Session.Service"
      set internet-service-id 1310735
  next
  edit "Kaspersky-RTMP"
      set internet-service-id 1310736
  next
  edit "Kaspersky-NetBIOS.Name.Service"
      set internet-service-id 1310744
  next
  edit "McAfee-Other"
      set internet-service-id 1376256
  next
  edit "McAfee-Web"
      set internet-service-id 1376257
  next
  edit "McAfee-ICMP"
      set internet-service-id 1376258
  next
  edit "McAfee-DNS"
      set internet-service-id 1376259
  next
  edit "McAfee-Outbound_Email"
      set internet-service-id 1376260
  next
  edit "McAfee-SSH"
      set internet-service-id 1376262
  next
  edit "McAfee-FTP"
      set internet-service-id 1376263
  next
  edit "McAfee-NTP"
      set internet-service-id 1376264
  next
  edit "McAfee-Inbound_Email"
      set internet-service-id 1376265
  next
  edit "McAfee-LDAP"
      set internet-service-id 1376270
  next
  edit "McAfee-NetBIOS.Session.Service"
      set internet-service-id 1376271
  next
  edit "McAfee-RTMP"
      set internet-service-id 1376272
  next
  edit "McAfee-NetBIOS.Name.Service"
      set internet-service-id 1376280
  next
  edit "Symantec-Other"
      set internet-service-id 1441792
  next
  edit "Symantec-Web"
      set internet-service-id 1441793
  next
  edit "Symantec-ICMP"
      set internet-service-id 1441794
  next
  edit "Symantec-DNS"
      set internet-service-id 1441795
  next
  edit "Symantec-Outbound_Email"
      set internet-service-id 1441796
  next
  edit "Symantec-SSH"
      set internet-service-id 1441798
  next
  edit "Symantec-FTP"
      set internet-service-id 1441799
  next
  edit "Symantec-NTP"
      set internet-service-id 1441800
  next
  edit "Symantec-Inbound_Email"
      set internet-service-id 1441801
  next
  edit "Symantec-LDAP"
      set internet-service-id 1441806
  next
  edit "Symantec-NetBIOS.Session.Service"
      set internet-service-id 1441807
  next
  edit "Symantec-RTMP"
      set internet-service-id 1441808
  next
  edit "Symantec-NetBIOS.Name.Service"
      set internet-service-id 1441816
  next
  edit "Symantec-Symantec.Cloud"
      set internet-service-id 1441922
  next
  edit "VMware-Other"
      set internet-service-id 1507328
  next
  edit "VMware-Web"
      set internet-service-id 1507329
  next
  edit "VMware-ICMP"
      set internet-service-id 1507330
  next
  edit "VMware-DNS"
      set internet-service-id 1507331
  next
  edit "VMware-Outbound_Email"
      set internet-service-id 1507332
  next
  edit "VMware-SSH"
      set internet-service-id 1507334
  next
  edit "VMware-FTP"
      set internet-service-id 1507335
  next
  edit "VMware-NTP"
      set internet-service-id 1507336
  next
  edit "VMware-Inbound_Email"
      set internet-service-id 1507337
  next
  edit "VMware-LDAP"
      set internet-service-id 1507342
  next
  edit "VMware-NetBIOS.Session.Service"
      set internet-service-id 1507343
  next
  edit "VMware-RTMP"
      set internet-service-id 1507344
  next
  edit "VMware-NetBIOS.Name.Service"
      set internet-service-id 1507352
  next
  edit "VMware-Airwatch"
      set internet-service-id 1507461
  next
  edit "AOL-Other"
      set internet-service-id 1572864
  next
  edit "AOL-Web"
      set internet-service-id 1572865
  next
  edit "AOL-ICMP"
      set internet-service-id 1572866
  next
  edit "AOL-DNS"
      set internet-service-id 1572867
  next
  edit "AOL-Outbound_Email"
      set internet-service-id 1572868
  next
  edit "AOL-SSH"
      set internet-service-id 1572870
  next
  edit "AOL-FTP"
      set internet-service-id 1572871
  next
  edit "AOL-NTP"
      set internet-service-id 1572872
  next
  edit "AOL-Inbound_Email"
      set internet-service-id 1572873
  next
  edit "AOL-LDAP"
      set internet-service-id 1572878
  next
  edit "AOL-NetBIOS.Session.Service"
      set internet-service-id 1572879
  next
  edit "AOL-RTMP"
      set internet-service-id 1572880
  next
  edit "AOL-NetBIOS.Name.Service"
      set internet-service-id 1572888
  next
  edit "RealNetworks-Other"
      set internet-service-id 1638400
  next
  edit "RealNetworks-Web"
      set internet-service-id 1638401
  next
  edit "RealNetworks-ICMP"
      set internet-service-id 1638402
  next
  edit "RealNetworks-DNS"
      set internet-service-id 1638403
  next
  edit "RealNetworks-Outbound_Email"
      set internet-service-id 1638404
  next
  edit "RealNetworks-SSH"
      set internet-service-id 1638406
  next
  edit "RealNetworks-FTP"
      set internet-service-id 1638407
  next
  edit "RealNetworks-NTP"
      set internet-service-id 1638408
  next
  edit "RealNetworks-Inbound_Email"
      set internet-service-id 1638409
  next
  edit "RealNetworks-LDAP"
      set internet-service-id 1638414
  next
  edit "RealNetworks-NetBIOS.Session.Service"
      set internet-service-id 1638415
  next
  edit "RealNetworks-RTMP"
      set internet-service-id 1638416
  next
  edit "RealNetworks-NetBIOS.Name.Service"
      set internet-service-id 1638424
  next
  edit "Zoho-Other"
      set internet-service-id 1703936
  next
  edit "Zoho-Web"
      set internet-service-id 1703937
  next
  edit "Zoho-ICMP"
      set internet-service-id 1703938
  next
  edit "Zoho-DNS"
      set internet-service-id 1703939
  next
  edit "Zoho-Outbound_Email"
      set internet-service-id 1703940
  next
  edit "Zoho-SSH"
      set internet-service-id 1703942
  next
  edit "Zoho-FTP"
      set internet-service-id 1703943
  next
  edit "Zoho-NTP"
      set internet-service-id 1703944
  next
  edit "Zoho-Inbound_Email"
      set internet-service-id 1703945
  next
  edit "Zoho-LDAP"
      set internet-service-id 1703950
  next
  edit "Zoho-NetBIOS.Session.Service"
      set internet-service-id 1703951
  next
  edit "Zoho-RTMP"
      set internet-service-id 1703952
  next
  edit "Zoho-NetBIOS.Name.Service"
      set internet-service-id 1703960
  next
  edit "Mozilla-Other"
      set internet-service-id 1769472
  next
  edit "Mozilla-Web"
      set internet-service-id 1769473
  next
  edit "Mozilla-ICMP"
      set internet-service-id 1769474
  next
  edit "Mozilla-DNS"
      set internet-service-id 1769475
  next
  edit "Mozilla-Outbound_Email"
      set internet-service-id 1769476
  next
  edit "Mozilla-SSH"
      set internet-service-id 1769478
  next
  edit "Mozilla-FTP"
      set internet-service-id 1769479
  next
  edit "Mozilla-NTP"
      set internet-service-id 1769480
  next
  edit "Mozilla-Inbound_Email"
      set internet-service-id 1769481
  next
  edit "Mozilla-LDAP"
      set internet-service-id 1769486
  next
  edit "Mozilla-NetBIOS.Session.Service"
      set internet-service-id 1769487
  next
  edit "Mozilla-RTMP"
      set internet-service-id 1769488
  next
  edit "Mozilla-NetBIOS.Name.Service"
      set internet-service-id 1769496
  next
  edit "TeamViewer-Other"
      set internet-service-id 1835008
  next
  edit "TeamViewer-Web"
      set internet-service-id 1835009
  next
  edit "TeamViewer-ICMP"
      set internet-service-id 1835010
  next
  edit "TeamViewer-DNS"
      set internet-service-id 1835011
  next
  edit "TeamViewer-Outbound_Email"
      set internet-service-id 1835012
  next
  edit "TeamViewer-SSH"
      set internet-service-id 1835014
  next
  edit "TeamViewer-FTP"
      set internet-service-id 1835015
  next
  edit "TeamViewer-NTP"
      set internet-service-id 1835016
  next
  edit "TeamViewer-Inbound_Email"
      set internet-service-id 1835017
  next
  edit "TeamViewer-LDAP"
      set internet-service-id 1835022
  next
  edit "TeamViewer-NetBIOS.Session.Service"
      set internet-service-id 1835023
  next
  edit "TeamViewer-RTMP"
      set internet-service-id 1835024
  next
  edit "TeamViewer-NetBIOS.Name.Service"
      set internet-service-id 1835032
  next
  edit "TeamViewer-TeamViewer"
      set internet-service-id 1835117
  next
  edit "HP-Other"
      set internet-service-id 1900544
  next
  edit "HP-Web"
      set internet-service-id 1900545
  next
  edit "HP-ICMP"
      set internet-service-id 1900546
  next
  edit "HP-DNS"
      set internet-service-id 1900547
  next
  edit "HP-Outbound_Email"
      set internet-service-id 1900548
  next
  edit "HP-SSH"
      set internet-service-id 1900550
  next
  edit "HP-FTP"
      set internet-service-id 1900551
  next
  edit "HP-NTP"
      set internet-service-id 1900552
  next
  edit "HP-Inbound_Email"
      set internet-service-id 1900553
  next
  edit "HP-LDAP"
      set internet-service-id 1900558
  next
  edit "HP-NetBIOS.Session.Service"
      set internet-service-id 1900559
  next
  edit "HP-RTMP"
      set internet-service-id 1900560
  next
  edit "HP-NetBIOS.Name.Service"
      set internet-service-id 1900568
  next
  edit "HP-Aruba"
      set internet-service-id 1900726
  next
  edit "Cisco-Other"
      set internet-service-id 1966080
  next
  edit "Cisco-Web"
      set internet-service-id 1966081
  next
  edit "Cisco-ICMP"
      set internet-service-id 1966082
  next
  edit "Cisco-DNS"
      set internet-service-id 1966083
  next
  edit "Cisco-Outbound_Email"
      set internet-service-id 1966084
  next
  edit "Cisco-SSH"
      set internet-service-id 1966086
  next
  edit "Cisco-FTP"
      set internet-service-id 1966087
  next
  edit "Cisco-NTP"
      set internet-service-id 1966088
  next
  edit "Cisco-Inbound_Email"
      set internet-service-id 1966089
  next
  edit "Cisco-LDAP"
      set internet-service-id 1966094
  next
  edit "Cisco-NetBIOS.Session.Service"
      set internet-service-id 1966095
  next
  edit "Cisco-RTMP"
      set internet-service-id 1966096
  next
  edit "Cisco-NetBIOS.Name.Service"
      set internet-service-id 1966104
  next
  edit "Cisco-Webex"
      set internet-service-id 1966183
  next
  edit "Cisco-Meraki.Cloud"
      set internet-service-id 1966218
  next
  edit "Cisco-Duo.Security"
      set internet-service-id 1966225
  next
  edit "Cisco-AppDynamic"
      set internet-service-id 1966260
  next
  edit "IBM-Other"
      set internet-service-id 2031616
  next
  edit "IBM-Web"
      set internet-service-id 2031617
  next
  edit "IBM-ICMP"
      set internet-service-id 2031618
  next
  edit "IBM-DNS"
      set internet-service-id 2031619
  next
  edit "IBM-Outbound_Email"
      set internet-service-id 2031620
  next
  edit "IBM-SSH"
      set internet-service-id 2031622
  next
  edit "IBM-FTP"
      set internet-service-id 2031623
  next
  edit "IBM-NTP"
      set internet-service-id 2031624
  next
  edit "IBM-Inbound_Email"
      set internet-service-id 2031625
  next
  edit "IBM-LDAP"
      set internet-service-id 2031630
  next
  edit "IBM-NetBIOS.Session.Service"
      set internet-service-id 2031631
  next
  edit "IBM-RTMP"
      set internet-service-id 2031632
  next
  edit "IBM-NetBIOS.Name.Service"
      set internet-service-id 2031640
  next
  edit "IBM-IBM.Cloud"
      set internet-service-id 2031748
  next
  edit "Citrix-Other"
      set internet-service-id 2097152
  next
  edit "Citrix-Web"
      set internet-service-id 2097153
  next
  edit "Citrix-ICMP"
      set internet-service-id 2097154
  next
  edit "Citrix-DNS"
      set internet-service-id 2097155
  next
  edit "Citrix-Outbound_Email"
      set internet-service-id 2097156
  next
  edit "Citrix-SSH"
      set internet-service-id 2097158
  next
  edit "Citrix-FTP"
      set internet-service-id 2097159
  next
  edit "Citrix-NTP"
      set internet-service-id 2097160
  next
  edit "Citrix-Inbound_Email"
      set internet-service-id 2097161
  next
  edit "Citrix-LDAP"
      set internet-service-id 2097166
  next
  edit "Citrix-NetBIOS.Session.Service"
      set internet-service-id 2097167
  next
  edit "Citrix-RTMP"
      set internet-service-id 2097168
  next
  edit "Citrix-NetBIOS.Name.Service"
      set internet-service-id 2097176
  next
  edit "Twitter-Other"
      set internet-service-id 2162688
  next
  edit "Twitter-Web"
      set internet-service-id 2162689
  next
  edit "Twitter-ICMP"
      set internet-service-id 2162690
  next
  edit "Twitter-DNS"
      set internet-service-id 2162691
  next
  edit "Twitter-Outbound_Email"
      set internet-service-id 2162692
  next
  edit "Twitter-SSH"
      set internet-service-id 2162694
  next
  edit "Twitter-FTP"
      set internet-service-id 2162695
  next
  edit "Twitter-NTP"
      set internet-service-id 2162696
  next
  edit "Twitter-Inbound_Email"
      set internet-service-id 2162697
  next
  edit "Twitter-LDAP"
      set internet-service-id 2162702
  next
  edit "Twitter-NetBIOS.Session.Service"
      set internet-service-id 2162703
  next
  edit "Twitter-RTMP"
      set internet-service-id 2162704
  next
  edit "Twitter-NetBIOS.Name.Service"
      set internet-service-id 2162712
  next
  edit "Dell-Other"
      set internet-service-id 2228224
  next
  edit "Dell-Web"
      set internet-service-id 2228225
  next
  edit "Dell-ICMP"
      set internet-service-id 2228226
  next
  edit "Dell-DNS"
      set internet-service-id 2228227
  next
  edit "Dell-Outbound_Email"
      set internet-service-id 2228228
  next
  edit "Dell-SSH"
      set internet-service-id 2228230
  next
  edit "Dell-FTP"
      set internet-service-id 2228231
  next
  edit "Dell-NTP"
      set internet-service-id 2228232
  next
  edit "Dell-Inbound_Email"
      set internet-service-id 2228233
  next
  edit "Dell-LDAP"
      set internet-service-id 2228238
  next
  edit "Dell-NetBIOS.Session.Service"
      set internet-service-id 2228239
  next
  edit "Dell-RTMP"
      set internet-service-id 2228240
  next
  edit "Dell-NetBIOS.Name.Service"
      set internet-service-id 2228248
  next
  edit "Vimeo-Other"
      set internet-service-id 2293760
  next
  edit "Vimeo-Web"
      set internet-service-id 2293761
  next
  edit "Vimeo-ICMP"
      set internet-service-id 2293762
  next
  edit "Vimeo-DNS"
      set internet-service-id 2293763
  next
  edit "Vimeo-Outbound_Email"
      set internet-service-id 2293764
  next
  edit "Vimeo-SSH"
      set internet-service-id 2293766
  next
  edit "Vimeo-FTP"
      set internet-service-id 2293767
  next
  edit "Vimeo-NTP"
      set internet-service-id 2293768
  next
  edit "Vimeo-Inbound_Email"
      set internet-service-id 2293769
  next
  edit "Vimeo-LDAP"
      set internet-service-id 2293774
  next
  edit "Vimeo-NetBIOS.Session.Service"
      set internet-service-id 2293775
  next
  edit "Vimeo-RTMP"
      set internet-service-id 2293776
  next
  edit "Vimeo-NetBIOS.Name.Service"
      set internet-service-id 2293784
  next
  edit "Redhat-Other"
      set internet-service-id 2359296
  next
  edit "Redhat-Web"
      set internet-service-id 2359297
  next
  edit "Redhat-ICMP"
      set internet-service-id 2359298
  next
  edit "Redhat-DNS"
      set internet-service-id 2359299
  next
  edit "Redhat-Outbound_Email"
      set internet-service-id 2359300
  next
  edit "Redhat-SSH"
      set internet-service-id 2359302
  next
  edit "Redhat-FTP"
      set internet-service-id 2359303
  next
  edit "Redhat-NTP"
      set internet-service-id 2359304
  next
  edit "Redhat-Inbound_Email"
      set internet-service-id 2359305
  next
  edit "Redhat-LDAP"
      set internet-service-id 2359310
  next
  edit "Redhat-NetBIOS.Session.Service"
      set internet-service-id 2359311
  next
  edit "Redhat-RTMP"
      set internet-service-id 2359312
  next
  edit "Redhat-NetBIOS.Name.Service"
      set internet-service-id 2359320
  next
  edit "VK-Other"
      set internet-service-id 2424832
  next
  edit "VK-Web"
      set internet-service-id 2424833
  next
  edit "VK-ICMP"
      set internet-service-id 2424834
  next
  edit "VK-DNS"
      set internet-service-id 2424835
  next
  edit "VK-Outbound_Email"
      set internet-service-id 2424836
  next
  edit "VK-SSH"
      set internet-service-id 2424838
  next
  edit "VK-FTP"
      set internet-service-id 2424839
  next
  edit "VK-NTP"
      set internet-service-id 2424840
  next
  edit "VK-Inbound_Email"
      set internet-service-id 2424841
  next
  edit "VK-LDAP"
      set internet-service-id 2424846
  next
  edit "VK-NetBIOS.Session.Service"
      set internet-service-id 2424847
  next
  edit "VK-RTMP"
      set internet-service-id 2424848
  next
  edit "VK-NetBIOS.Name.Service"
      set internet-service-id 2424856
  next
  edit "TrendMicro-Other"
      set internet-service-id 2490368
  next
  edit "TrendMicro-Web"
      set internet-service-id 2490369
  next
  edit "TrendMicro-ICMP"
      set internet-service-id 2490370
  next
  edit "TrendMicro-DNS"
      set internet-service-id 2490371
  next
  edit "TrendMicro-Outbound_Email"
      set internet-service-id 2490372
  next
  edit "TrendMicro-SSH"
      set internet-service-id 2490374
  next
  edit "TrendMicro-FTP"
      set internet-service-id 2490375
  next
  edit "TrendMicro-NTP"
      set internet-service-id 2490376
  next
  edit "TrendMicro-Inbound_Email"
      set internet-service-id 2490377
  next
  edit "TrendMicro-LDAP"
      set internet-service-id 2490382
  next
  edit "TrendMicro-NetBIOS.Session.Service"
      set internet-service-id 2490383
  next
  edit "TrendMicro-RTMP"
      set internet-service-id 2490384
  next
  edit "TrendMicro-NetBIOS.Name.Service"
      set internet-service-id 2490392
  next
  edit "Tencent-Other"
      set internet-service-id 2555904
  next
  edit "Tencent-Web"
      set internet-service-id 2555905
  next
  edit "Tencent-ICMP"
      set internet-service-id 2555906
  next
  edit "Tencent-DNS"
      set internet-service-id 2555907
  next
  edit "Tencent-Outbound_Email"
      set internet-service-id 2555908
  next
  edit "Tencent-SSH"
      set internet-service-id 2555910
  next
  edit "Tencent-FTP"
      set internet-service-id 2555911
  next
  edit "Tencent-NTP"
      set internet-service-id 2555912
  next
  edit "Tencent-Inbound_Email"
      set internet-service-id 2555913
  next
  edit "Tencent-LDAP"
      set internet-service-id 2555918
  next
  edit "Tencent-NetBIOS.Session.Service"
      set internet-service-id 2555919
  next
  edit "Tencent-RTMP"
      set internet-service-id 2555920
  next
  edit "Tencent-NetBIOS.Name.Service"
      set internet-service-id 2555928
  next
  edit "Ask-Other"
      set internet-service-id 2621440
  next
  edit "Ask-Web"
      set internet-service-id 2621441
  next
  edit "Ask-ICMP"
      set internet-service-id 2621442
  next
  edit "Ask-DNS"
      set internet-service-id 2621443
  next
  edit "Ask-Outbound_Email"
      set internet-service-id 2621444
  next
  edit "Ask-SSH"
      set internet-service-id 2621446
  next
  edit "Ask-FTP"
      set internet-service-id 2621447
  next
  edit "Ask-NTP"
      set internet-service-id 2621448
  next
  edit "Ask-Inbound_Email"
      set internet-service-id 2621449
  next
  edit "Ask-LDAP"
      set internet-service-id 2621454
  next
  edit "Ask-NetBIOS.Session.Service"
      set internet-service-id 2621455
  next
  edit "Ask-RTMP"
      set internet-service-id 2621456
  next
  edit "Ask-NetBIOS.Name.Service"
      set internet-service-id 2621464
  next
  edit "CNN-Other"
      set internet-service-id 2686976
  next
  edit "CNN-Web"
      set internet-service-id 2686977
  next
  edit "CNN-ICMP"
      set internet-service-id 2686978
  next
  edit "CNN-DNS"
      set internet-service-id 2686979
  next
  edit "CNN-Outbound_Email"
      set internet-service-id 2686980
  next
  edit "CNN-SSH"
      set internet-service-id 2686982
  next
  edit "CNN-FTP"
      set internet-service-id 2686983
  next
  edit "CNN-NTP"
      set internet-service-id 2686984
  next
  edit "CNN-Inbound_Email"
      set internet-service-id 2686985
  next
  edit "CNN-LDAP"
      set internet-service-id 2686990
  next
  edit "CNN-NetBIOS.Session.Service"
      set internet-service-id 2686991
  next
  edit "CNN-RTMP"
      set internet-service-id 2686992
  next
  edit "CNN-NetBIOS.Name.Service"
      set internet-service-id 2687000
  next
  edit "Myspace-Other"
      set internet-service-id 2752512
  next
  edit "Myspace-Web"
      set internet-service-id 2752513
  next
  edit "Myspace-ICMP"
      set internet-service-id 2752514
  next
  edit "Myspace-DNS"
      set internet-service-id 2752515
  next
  edit "Myspace-Outbound_Email"
      set internet-service-id 2752516
  next
  edit "Myspace-SSH"
      set internet-service-id 2752518
  next
  edit "Myspace-FTP"
      set internet-service-id 2752519
  next
  edit "Myspace-NTP"
      set internet-service-id 2752520
  next
  edit "Myspace-Inbound_Email"
      set internet-service-id 2752521
  next
  edit "Myspace-LDAP"
      set internet-service-id 2752526
  next
  edit "Myspace-NetBIOS.Session.Service"
      set internet-service-id 2752527
  next
  edit "Myspace-RTMP"
      set internet-service-id 2752528
  next
  edit "Myspace-NetBIOS.Name.Service"
      set internet-service-id 2752536
  next
  edit "Tor-Relay.Node"
      set internet-service-id 2818238
  next
  edit "Tor-Exit.Node"
      set internet-service-id 2818243
  next
  edit "Baidu-Other"
      set internet-service-id 2883584
  next
  edit "Baidu-Web"
      set internet-service-id 2883585
  next
  edit "Baidu-ICMP"
      set internet-service-id 2883586
  next
  edit "Baidu-DNS"
      set internet-service-id 2883587
  next
  edit "Baidu-Outbound_Email"
      set internet-service-id 2883588
  next
  edit "Baidu-SSH"
      set internet-service-id 2883590
  next
  edit "Baidu-FTP"
      set internet-service-id 2883591
  next
  edit "Baidu-NTP"
      set internet-service-id 2883592
  next
  edit "Baidu-Inbound_Email"
      set internet-service-id 2883593
  next
  edit "Baidu-LDAP"
      set internet-service-id 2883598
  next
  edit "Baidu-NetBIOS.Session.Service"
      set internet-service-id 2883599
  next
  edit "Baidu-RTMP"
      set internet-service-id 2883600
  next
  edit "Baidu-NetBIOS.Name.Service"
      set internet-service-id 2883608
  next
  edit "ntp.org-Other"
      set internet-service-id 2949120
  next
  edit "ntp.org-Web"
      set internet-service-id 2949121
  next
  edit "ntp.org-ICMP"
      set internet-service-id 2949122
  next
  edit "ntp.org-DNS"
      set internet-service-id 2949123
  next
  edit "ntp.org-Outbound_Email"
      set internet-service-id 2949124
  next
  edit "ntp.org-SSH"
      set internet-service-id 2949126
  next
  edit "ntp.org-FTP"
      set internet-service-id 2949127
  next
  edit "ntp.org-NTP"
      set internet-service-id 2949128
  next
  edit "ntp.org-Inbound_Email"
      set internet-service-id 2949129
  next
  edit "ntp.org-LDAP"
      set internet-service-id 2949134
  next
  edit "ntp.org-NetBIOS.Session.Service"
      set internet-service-id 2949135
  next
  edit "ntp.org-RTMP"
      set internet-service-id 2949136
  next
  edit "ntp.org-NetBIOS.Name.Service"
      set internet-service-id 2949144
  next
  edit "Proxy-Proxy.Server"
      set internet-service-id 3014850
  next
  edit "Botnet-C&C.Server"
      set internet-service-id 3080383
  next
  edit "Spam-Spamming.Server"
      set internet-service-id 3145920
  next
  edit "Phishing-Phishing.Server"
      set internet-service-id 3211457
  next
  edit "Zendesk-Other"
      set internet-service-id 3407872
  next
  edit "Zendesk-Web"
      set internet-service-id 3407873
  next
  edit "Zendesk-ICMP"
      set internet-service-id 3407874
  next
  edit "Zendesk-DNS"
      set internet-service-id 3407875
  next
  edit "Zendesk-Outbound_Email"
      set internet-service-id 3407876
  next
  edit "Zendesk-SSH"
      set internet-service-id 3407878
  next
  edit "Zendesk-FTP"
      set internet-service-id 3407879
  next
  edit "Zendesk-NTP"
      set internet-service-id 3407880
  next
  edit "Zendesk-Inbound_Email"
      set internet-service-id 3407881
  next
  edit "Zendesk-LDAP"
      set internet-service-id 3407886
  next
  edit "Zendesk-NetBIOS.Session.Service"
      set internet-service-id 3407887
  next
  edit "Zendesk-RTMP"
      set internet-service-id 3407888
  next
  edit "Zendesk-NetBIOS.Name.Service"
      set internet-service-id 3407896
  next
  edit "Zendesk-Zendesk.Suite"
      set internet-service-id 3408047
  next
  edit "DocuSign-Other"
      set internet-service-id 3473408
  next
  edit "DocuSign-Web"
      set internet-service-id 3473409
  next
  edit "DocuSign-ICMP"
      set internet-service-id 3473410
  next
  edit "DocuSign-DNS"
      set internet-service-id 3473411
  next
  edit "DocuSign-Outbound_Email"
      set internet-service-id 3473412
  next
  edit "DocuSign-SSH"
      set internet-service-id 3473414
  next
  edit "DocuSign-FTP"
      set internet-service-id 3473415
  next
  edit "DocuSign-NTP"
      set internet-service-id 3473416
  next
  edit "DocuSign-Inbound_Email"
      set internet-service-id 3473417
  next
  edit "DocuSign-LDAP"
      set internet-service-id 3473422
  next
  edit "DocuSign-NetBIOS.Session.Service"
      set internet-service-id 3473423
  next
  edit "DocuSign-RTMP"
      set internet-service-id 3473424
  next
  edit "DocuSign-NetBIOS.Name.Service"
      set internet-service-id 3473432
  next
  edit "ServiceNow-Other"
      set internet-service-id 3538944
  next
  edit "ServiceNow-Web"
      set internet-service-id 3538945
  next
  edit "ServiceNow-ICMP"
      set internet-service-id 3538946
  next
  edit "ServiceNow-DNS"
      set internet-service-id 3538947
  next
  edit "ServiceNow-Outbound_Email"
      set internet-service-id 3538948
  next
  edit "ServiceNow-SSH"
      set internet-service-id 3538950
  next
  edit "ServiceNow-FTP"
      set internet-service-id 3538951
  next
  edit "ServiceNow-NTP"
      set internet-service-id 3538952
  next
  edit "ServiceNow-Inbound_Email"
      set internet-service-id 3538953
  next
  edit "ServiceNow-LDAP"
      set internet-service-id 3538958
  next
  edit "ServiceNow-NetBIOS.Session.Service"
      set internet-service-id 3538959
  next
  edit "ServiceNow-RTMP"
      set internet-service-id 3538960
  next
  edit "ServiceNow-NetBIOS.Name.Service"
      set internet-service-id 3538968
  next
  edit "GitHub-GitHub"
      set internet-service-id 3604638
  next
  edit "Workday-Other"
      set internet-service-id 3670016
  next
  edit "Workday-Web"
      set internet-service-id 3670017
  next
  edit "Workday-ICMP"
      set internet-service-id 3670018
  next
  edit "Workday-DNS"
      set internet-service-id 3670019
  next
  edit "Workday-Outbound_Email"
      set internet-service-id 3670020
  next
  edit "Workday-SSH"
      set internet-service-id 3670022
  next
  edit "Workday-FTP"
      set internet-service-id 3670023
  next
  edit "Workday-NTP"
      set internet-service-id 3670024
  next
  edit "Workday-Inbound_Email"
      set internet-service-id 3670025
  next
  edit "Workday-LDAP"
      set internet-service-id 3670030
  next
  edit "Workday-NetBIOS.Session.Service"
      set internet-service-id 3670031
  next
  edit "Workday-RTMP"
      set internet-service-id 3670032
  next
  edit "Workday-NetBIOS.Name.Service"
      set internet-service-id 3670040
  next
  edit "HubSpot-Other"
      set internet-service-id 3735552
  next
  edit "HubSpot-Web"
      set internet-service-id 3735553
  next
  edit "HubSpot-ICMP"
      set internet-service-id 3735554
  next
  edit "HubSpot-DNS"
      set internet-service-id 3735555
  next
  edit "HubSpot-Outbound_Email"
      set internet-service-id 3735556
  next
  edit "HubSpot-SSH"
      set internet-service-id 3735558
  next
  edit "HubSpot-FTP"
      set internet-service-id 3735559
  next
  edit "HubSpot-NTP"
      set internet-service-id 3735560
  next
  edit "HubSpot-Inbound_Email"
      set internet-service-id 3735561
  next
  edit "HubSpot-LDAP"
      set internet-service-id 3735566
  next
  edit "HubSpot-NetBIOS.Session.Service"
      set internet-service-id 3735567
  next
  edit "HubSpot-RTMP"
      set internet-service-id 3735568
  next
  edit "HubSpot-NetBIOS.Name.Service"
      set internet-service-id 3735576
  next
  edit "Twilio-Other"
      set internet-service-id 3801088
  next
  edit "Twilio-Web"
      set internet-service-id 3801089
  next
  edit "Twilio-ICMP"
      set internet-service-id 3801090
  next
  edit "Twilio-DNS"
      set internet-service-id 3801091
  next
  edit "Twilio-Outbound_Email"
      set internet-service-id 3801092
  next
  edit "Twilio-SSH"
      set internet-service-id 3801094
  next
  edit "Twilio-FTP"
      set internet-service-id 3801095
  next
  edit "Twilio-NTP"
      set internet-service-id 3801096
  next
  edit "Twilio-Inbound_Email"
      set internet-service-id 3801097
  next
  edit "Twilio-LDAP"
      set internet-service-id 3801102
  next
  edit "Twilio-NetBIOS.Session.Service"
      set internet-service-id 3801103
  next
  edit "Twilio-RTMP"
      set internet-service-id 3801104
  next
  edit "Twilio-NetBIOS.Name.Service"
      set internet-service-id 3801112
  next
  edit "Twilio-Elastic.SIP.Trunking"
      set internet-service-id 3801277
  next
  edit "Coupa-Other"
      set internet-service-id 3866624
  next
  edit "Coupa-Web"
      set internet-service-id 3866625
  next
  edit "Coupa-ICMP"
      set internet-service-id 3866626
  next
  edit "Coupa-DNS"
      set internet-service-id 3866627
  next
  edit "Coupa-Outbound_Email"
      set internet-service-id 3866628
  next
  edit "Coupa-SSH"
      set internet-service-id 3866630
  next
  edit "Coupa-FTP"
      set internet-service-id 3866631
  next
  edit "Coupa-NTP"
      set internet-service-id 3866632
  next
  edit "Coupa-Inbound_Email"
      set internet-service-id 3866633
  next
  edit "Coupa-LDAP"
      set internet-service-id 3866638
  next
  edit "Coupa-NetBIOS.Session.Service"
      set internet-service-id 3866639
  next
  edit "Coupa-RTMP"
      set internet-service-id 3866640
  next
  edit "Coupa-NetBIOS.Name.Service"
      set internet-service-id 3866648
  next
  edit "Atlassian-Other"
      set internet-service-id 3932160
  next
  edit "Atlassian-Web"
      set internet-service-id 3932161
  next
  edit "Atlassian-ICMP"
      set internet-service-id 3932162
  next
  edit "Atlassian-DNS"
      set internet-service-id 3932163
  next
  edit "Atlassian-Outbound_Email"
      set internet-service-id 3932164
  next
  edit "Atlassian-SSH"
      set internet-service-id 3932166
  next
  edit "Atlassian-FTP"
      set internet-service-id 3932167
  next
  edit "Atlassian-NTP"
      set internet-service-id 3932168
  next
  edit "Atlassian-Inbound_Email"
      set internet-service-id 3932169
  next
  edit "Atlassian-LDAP"
      set internet-service-id 3932174
  next
  edit "Atlassian-NetBIOS.Session.Service"
      set internet-service-id 3932175
  next
  edit "Atlassian-RTMP"
      set internet-service-id 3932176
  next
  edit "Atlassian-NetBIOS.Name.Service"
      set internet-service-id 3932184
  next
  edit "Xero-Other"
      set internet-service-id 3997696
  next
  edit "Xero-Web"
      set internet-service-id 3997697
  next
  edit "Xero-ICMP"
      set internet-service-id 3997698
  next
  edit "Xero-DNS"
      set internet-service-id 3997699
  next
  edit "Xero-Outbound_Email"
      set internet-service-id 3997700
  next
  edit "Xero-SSH"
      set internet-service-id 3997702
  next
  edit "Xero-FTP"
      set internet-service-id 3997703
  next
  edit "Xero-NTP"
      set internet-service-id 3997704
  next
  edit "Xero-Inbound_Email"
      set internet-service-id 3997705
  next
  edit "Xero-LDAP"
      set internet-service-id 3997710
  next
  edit "Xero-NetBIOS.Session.Service"
      set internet-service-id 3997711
  next
  edit "Xero-RTMP"
      set internet-service-id 3997712
  next
  edit "Xero-NetBIOS.Name.Service"
      set internet-service-id 3997720
  next
  edit "Zuora-Other"
      set internet-service-id 4063232
  next
  edit "Zuora-Web"
      set internet-service-id 4063233
  next
  edit "Zuora-ICMP"
      set internet-service-id 4063234
  next
  edit "Zuora-DNS"
      set internet-service-id 4063235
  next
  edit "Zuora-Outbound_Email"
      set internet-service-id 4063236
  next
  edit "Zuora-SSH"
      set internet-service-id 4063238
  next
  edit "Zuora-FTP"
      set internet-service-id 4063239
  next
  edit "Zuora-NTP"
      set internet-service-id 4063240
  next
  edit "Zuora-Inbound_Email"
      set internet-service-id 4063241
  next
  edit "Zuora-LDAP"
      set internet-service-id 4063246
  next
  edit "Zuora-NetBIOS.Session.Service"
      set internet-service-id 4063247
  next
  edit "Zuora-RTMP"
      set internet-service-id 4063248
  next
  edit "Zuora-NetBIOS.Name.Service"
      set internet-service-id 4063256
  next
  edit "AdRoll-Other"
      set internet-service-id 4128768
  next
  edit "AdRoll-Web"
      set internet-service-id 4128769
  next
  edit "AdRoll-ICMP"
      set internet-service-id 4128770
  next
  edit "AdRoll-DNS"
      set internet-service-id 4128771
  next
  edit "AdRoll-Outbound_Email"
      set internet-service-id 4128772
  next
  edit "AdRoll-SSH"
      set internet-service-id 4128774
  next
  edit "AdRoll-FTP"
      set internet-service-id 4128775
  next
  edit "AdRoll-NTP"
      set internet-service-id 4128776
  next
  edit "AdRoll-Inbound_Email"
      set internet-service-id 4128777
  next
  edit "AdRoll-LDAP"
      set internet-service-id 4128782
  next
  edit "AdRoll-NetBIOS.Session.Service"
      set internet-service-id 4128783
  next
  edit "AdRoll-RTMP"
      set internet-service-id 4128784
  next
  edit "AdRoll-NetBIOS.Name.Service"
      set internet-service-id 4128792
  next
  edit "Xactly-Other"
      set internet-service-id 4194304
  next
  edit "Xactly-Web"
      set internet-service-id 4194305
  next
  edit "Xactly-ICMP"
      set internet-service-id 4194306
  next
  edit "Xactly-DNS"
      set internet-service-id 4194307
  next
  edit "Xactly-Outbound_Email"
      set internet-service-id 4194308
  next
  edit "Xactly-SSH"
      set internet-service-id 4194310
  next
  edit "Xactly-FTP"
      set internet-service-id 4194311
  next
  edit "Xactly-NTP"
      set internet-service-id 4194312
  next
  edit "Xactly-Inbound_Email"
      set internet-service-id 4194313
  next
  edit "Xactly-LDAP"
      set internet-service-id 4194318
  next
  edit "Xactly-NetBIOS.Session.Service"
      set internet-service-id 4194319
  next
  edit "Xactly-RTMP"
      set internet-service-id 4194320
  next
  edit "Xactly-NetBIOS.Name.Service"
      set internet-service-id 4194328
  next
  edit "Intuit-Other"
      set internet-service-id 4259840
  next
  edit "Intuit-Web"
      set internet-service-id 4259841
  next
  edit "Intuit-ICMP"
      set internet-service-id 4259842
  next
  edit "Intuit-DNS"
      set internet-service-id 4259843
  next
  edit "Intuit-Outbound_Email"
      set internet-service-id 4259844
  next
  edit "Intuit-SSH"
      set internet-service-id 4259846
  next
  edit "Intuit-FTP"
      set internet-service-id 4259847
  next
  edit "Intuit-NTP"
      set internet-service-id 4259848
  next
  edit "Intuit-Inbound_Email"
      set internet-service-id 4259849
  next
  edit "Intuit-LDAP"
      set internet-service-id 4259854
  next
  edit "Intuit-NetBIOS.Session.Service"
      set internet-service-id 4259855
  next
  edit "Intuit-RTMP"
      set internet-service-id 4259856
  next
  edit "Intuit-NetBIOS.Name.Service"
      set internet-service-id 4259864
  next
  edit "Marketo-Other"
      set internet-service-id 4325376
  next
  edit "Marketo-Web"
      set internet-service-id 4325377
  next
  edit "Marketo-ICMP"
      set internet-service-id 4325378
  next
  edit "Marketo-DNS"
      set internet-service-id 4325379
  next
  edit "Marketo-Outbound_Email"
      set internet-service-id 4325380
  next
  edit "Marketo-SSH"
      set internet-service-id 4325382
  next
  edit "Marketo-FTP"
      set internet-service-id 4325383
  next
  edit "Marketo-NTP"
      set internet-service-id 4325384
  next
  edit "Marketo-Inbound_Email"
      set internet-service-id 4325385
  next
  edit "Marketo-LDAP"
      set internet-service-id 4325390
  next
  edit "Marketo-NetBIOS.Session.Service"
      set internet-service-id 4325391
  next
  edit "Marketo-RTMP"
      set internet-service-id 4325392
  next
  edit "Marketo-NetBIOS.Name.Service"
      set internet-service-id 4325400
  next
  edit "Bill-Other"
      set internet-service-id 4456448
  next
  edit "Bill-Web"
      set internet-service-id 4456449
  next
  edit "Bill-ICMP"
      set internet-service-id 4456450
  next
  edit "Bill-DNS"
      set internet-service-id 4456451
  next
  edit "Bill-Outbound_Email"
      set internet-service-id 4456452
  next
  edit "Bill-SSH"
      set internet-service-id 4456454
  next
  edit "Bill-FTP"
      set internet-service-id 4456455
  next
  edit "Bill-NTP"
      set internet-service-id 4456456
  next
  edit "Bill-Inbound_Email"
      set internet-service-id 4456457
  next
  edit "Bill-LDAP"
      set internet-service-id 4456462
  next
  edit "Bill-NetBIOS.Session.Service"
      set internet-service-id 4456463
  next
  edit "Bill-RTMP"
      set internet-service-id 4456464
  next
  edit "Bill-NetBIOS.Name.Service"
      set internet-service-id 4456472
  next
  edit "Shopify-Other"
      set internet-service-id 4521984
  next
  edit "Shopify-Web"
      set internet-service-id 4521985
  next
  edit "Shopify-ICMP"
      set internet-service-id 4521986
  next
  edit "Shopify-DNS"
      set internet-service-id 4521987
  next
  edit "Shopify-Outbound_Email"
      set internet-service-id 4521988
  next
  edit "Shopify-SSH"
      set internet-service-id 4521990
  next
  edit "Shopify-FTP"
      set internet-service-id 4521991
  next
  edit "Shopify-NTP"
      set internet-service-id 4521992
  next
  edit "Shopify-Inbound_Email"
      set internet-service-id 4521993
  next
  edit "Shopify-LDAP"
      set internet-service-id 4521998
  next
  edit "Shopify-NetBIOS.Session.Service"
      set internet-service-id 4521999
  next
  edit "Shopify-RTMP"
      set internet-service-id 4522000
  next
  edit "Shopify-NetBIOS.Name.Service"
      set internet-service-id 4522008
  next
  edit "Shopify-Shopify"
      set internet-service-id 4522162
  next
  edit "MuleSoft-Other"
      set internet-service-id 4587520
  next
  edit "MuleSoft-Web"
      set internet-service-id 4587521
  next
  edit "MuleSoft-ICMP"
      set internet-service-id 4587522
  next
  edit "MuleSoft-DNS"
      set internet-service-id 4587523
  next
  edit "MuleSoft-Outbound_Email"
      set internet-service-id 4587524
  next
  edit "MuleSoft-SSH"
      set internet-service-id 4587526
  next
  edit "MuleSoft-FTP"
      set internet-service-id 4587527
  next
  edit "MuleSoft-NTP"
      set internet-service-id 4587528
  next
  edit "MuleSoft-Inbound_Email"
      set internet-service-id 4587529
  next
  edit "MuleSoft-LDAP"
      set internet-service-id 4587534
  next
  edit "MuleSoft-NetBIOS.Session.Service"
      set internet-service-id 4587535
  next
  edit "MuleSoft-RTMP"
      set internet-service-id 4587536
  next
  edit "MuleSoft-NetBIOS.Name.Service"
      set internet-service-id 4587544
  next
  edit "Cornerstone-Other"
      set internet-service-id 4653056
  next
  edit "Cornerstone-Web"
      set internet-service-id 4653057
  next
  edit "Cornerstone-ICMP"
      set internet-service-id 4653058
  next
  edit "Cornerstone-DNS"
      set internet-service-id 4653059
  next
  edit "Cornerstone-Outbound_Email"
      set internet-service-id 4653060
  next
  edit "Cornerstone-SSH"
      set internet-service-id 4653062
  next
  edit "Cornerstone-FTP"
      set internet-service-id 4653063
  next
  edit "Cornerstone-NTP"
      set internet-service-id 4653064
  next
  edit "Cornerstone-Inbound_Email"
      set internet-service-id 4653065
  next
  edit "Cornerstone-LDAP"
      set internet-service-id 4653070
  next
  edit "Cornerstone-NetBIOS.Session.Service"
      set internet-service-id 4653071
  next
  edit "Cornerstone-RTMP"
      set internet-service-id 4653072
  next
  edit "Cornerstone-NetBIOS.Name.Service"
      set internet-service-id 4653080
  next
  edit "Eventbrite-Other"
      set internet-service-id 4718592
  next
  edit "Eventbrite-Web"
      set internet-service-id 4718593
  next
  edit "Eventbrite-ICMP"
      set internet-service-id 4718594
  next
  edit "Eventbrite-DNS"
      set internet-service-id 4718595
  next
  edit "Eventbrite-Outbound_Email"
      set internet-service-id 4718596
  next
  edit "Eventbrite-SSH"
      set internet-service-id 4718598
  next
  edit "Eventbrite-FTP"
      set internet-service-id 4718599
  next
  edit "Eventbrite-NTP"
      set internet-service-id 4718600
  next
  edit "Eventbrite-Inbound_Email"
      set internet-service-id 4718601
  next
  edit "Eventbrite-LDAP"
      set internet-service-id 4718606
  next
  edit "Eventbrite-NetBIOS.Session.Service"
      set internet-service-id 4718607
  next
  edit "Eventbrite-RTMP"
      set internet-service-id 4718608
  next
  edit "Eventbrite-NetBIOS.Name.Service"
      set internet-service-id 4718616
  next
  edit "Paychex-Other"
      set internet-service-id 4784128
  next
  edit "Paychex-Web"
      set internet-service-id 4784129
  next
  edit "Paychex-ICMP"
      set internet-service-id 4784130
  next
  edit "Paychex-DNS"
      set internet-service-id 4784131
  next
  edit "Paychex-Outbound_Email"
      set internet-service-id 4784132
  next
  edit "Paychex-SSH"
      set internet-service-id 4784134
  next
  edit "Paychex-FTP"
      set internet-service-id 4784135
  next
  edit "Paychex-NTP"
      set internet-service-id 4784136
  next
  edit "Paychex-Inbound_Email"
      set internet-service-id 4784137
  next
  edit "Paychex-LDAP"
      set internet-service-id 4784142
  next
  edit "Paychex-NetBIOS.Session.Service"
      set internet-service-id 4784143
  next
  edit "Paychex-RTMP"
      set internet-service-id 4784144
  next
  edit "Paychex-NetBIOS.Name.Service"
      set internet-service-id 4784152
  next
  edit "NewRelic-Other"
      set internet-service-id 4849664
  next
  edit "NewRelic-Web"
      set internet-service-id 4849665
  next
  edit "NewRelic-ICMP"
      set internet-service-id 4849666
  next
  edit "NewRelic-DNS"
      set internet-service-id 4849667
  next
  edit "NewRelic-Outbound_Email"
      set internet-service-id 4849668
  next
  edit "NewRelic-SSH"
      set internet-service-id 4849670
  next
  edit "NewRelic-FTP"
      set internet-service-id 4849671
  next
  edit "NewRelic-NTP"
      set internet-service-id 4849672
  next
  edit "NewRelic-Inbound_Email"
      set internet-service-id 4849673
  next
  edit "NewRelic-LDAP"
      set internet-service-id 4849678
  next
  edit "NewRelic-NetBIOS.Session.Service"
      set internet-service-id 4849679
  next
  edit "NewRelic-RTMP"
      set internet-service-id 4849680
  next
  edit "NewRelic-NetBIOS.Name.Service"
      set internet-service-id 4849688
  next
  edit "Splunk-Other"
      set internet-service-id 4915200
  next
  edit "Splunk-Web"
      set internet-service-id 4915201
  next
  edit "Splunk-ICMP"
      set internet-service-id 4915202
  next
  edit "Splunk-DNS"
      set internet-service-id 4915203
  next
  edit "Splunk-Outbound_Email"
      set internet-service-id 4915204
  next
  edit "Splunk-SSH"
      set internet-service-id 4915206
  next
  edit "Splunk-FTP"
      set internet-service-id 4915207
  next
  edit "Splunk-NTP"
      set internet-service-id 4915208
  next
  edit "Splunk-Inbound_Email"
      set internet-service-id 4915209
  next
  edit "Splunk-LDAP"
      set internet-service-id 4915214
  next
  edit "Splunk-NetBIOS.Session.Service"
      set internet-service-id 4915215
  next
  edit "Splunk-RTMP"
      set internet-service-id 4915216
  next
  edit "Splunk-NetBIOS.Name.Service"
      set internet-service-id 4915224
  next
  edit "Domo-Other"
      set internet-service-id 4980736
  next
  edit "Domo-Web"
      set internet-service-id 4980737
  next
  edit "Domo-ICMP"
      set internet-service-id 4980738
  next
  edit "Domo-DNS"
      set internet-service-id 4980739
  next
  edit "Domo-Outbound_Email"
      set internet-service-id 4980740
  next
  edit "Domo-SSH"
      set internet-service-id 4980742
  next
  edit "Domo-FTP"
      set internet-service-id 4980743
  next
  edit "Domo-NTP"
      set internet-service-id 4980744
  next
  edit "Domo-Inbound_Email"
      set internet-service-id 4980745
  next
  edit "Domo-LDAP"
      set internet-service-id 4980750
  next
  edit "Domo-NetBIOS.Session.Service"
      set internet-service-id 4980751
  next
  edit "Domo-RTMP"
      set internet-service-id 4980752
  next
  edit "Domo-NetBIOS.Name.Service"
      set internet-service-id 4980760
  next
  edit "FreshBooks-Other"
      set internet-service-id 5046272
  next
  edit "FreshBooks-Web"
      set internet-service-id 5046273
  next
  edit "FreshBooks-ICMP"
      set internet-service-id 5046274
  next
  edit "FreshBooks-DNS"
      set internet-service-id 5046275
  next
  edit "FreshBooks-Outbound_Email"
      set internet-service-id 5046276
  next
  edit "FreshBooks-SSH"
      set internet-service-id 5046278
  next
  edit "FreshBooks-FTP"
      set internet-service-id 5046279
  next
  edit "FreshBooks-NTP"
      set internet-service-id 5046280
  next
  edit "FreshBooks-Inbound_Email"
      set internet-service-id 5046281
  next
  edit "FreshBooks-LDAP"
      set internet-service-id 5046286
  next
  edit "FreshBooks-NetBIOS.Session.Service"
      set internet-service-id 5046287
  next
  edit "FreshBooks-RTMP"
      set internet-service-id 5046288
  next
  edit "FreshBooks-NetBIOS.Name.Service"
      set internet-service-id 5046296
  next
  edit "Tableau-Other"
      set internet-service-id 5111808
  next
  edit "Tableau-Web"
      set internet-service-id 5111809
  next
  edit "Tableau-ICMP"
      set internet-service-id 5111810
  next
  edit "Tableau-DNS"
      set internet-service-id 5111811
  next
  edit "Tableau-Outbound_Email"
      set internet-service-id 5111812
  next
  edit "Tableau-SSH"
      set internet-service-id 5111814
  next
  edit "Tableau-FTP"
      set internet-service-id 5111815
  next
  edit "Tableau-NTP"
      set internet-service-id 5111816
  next
  edit "Tableau-Inbound_Email"
      set internet-service-id 5111817
  next
  edit "Tableau-LDAP"
      set internet-service-id 5111822
  next
  edit "Tableau-NetBIOS.Session.Service"
      set internet-service-id 5111823
  next
  edit "Tableau-RTMP"
      set internet-service-id 5111824
  next
  edit "Tableau-NetBIOS.Name.Service"
      set internet-service-id 5111832
  next
  edit "Druva-Other"
      set internet-service-id 5177344
  next
  edit "Druva-Web"
      set internet-service-id 5177345
  next
  edit "Druva-ICMP"
      set internet-service-id 5177346
  next
  edit "Druva-DNS"
      set internet-service-id 5177347
  next
  edit "Druva-Outbound_Email"
      set internet-service-id 5177348
  next
  edit "Druva-SSH"
      set internet-service-id 5177350
  next
  edit "Druva-FTP"
      set internet-service-id 5177351
  next
  edit "Druva-NTP"
      set internet-service-id 5177352
  next
  edit "Druva-Inbound_Email"
      set internet-service-id 5177353
  next
  edit "Druva-LDAP"
      set internet-service-id 5177358
  next
  edit "Druva-NetBIOS.Session.Service"
      set internet-service-id 5177359
  next
  edit "Druva-RTMP"
      set internet-service-id 5177360
  next
  edit "Druva-NetBIOS.Name.Service"
      set internet-service-id 5177368
  next
  edit "Act-on-Other"
      set internet-service-id 5242880
  next
  edit "Act-on-Web"
      set internet-service-id 5242881
  next
  edit "Act-on-ICMP"
      set internet-service-id 5242882
  next
  edit "Act-on-DNS"
      set internet-service-id 5242883
  next
  edit "Act-on-Outbound_Email"
      set internet-service-id 5242884
  next
  edit "Act-on-SSH"
      set internet-service-id 5242886
  next
  edit "Act-on-FTP"
      set internet-service-id 5242887
  next
  edit "Act-on-NTP"
      set internet-service-id 5242888
  next
  edit "Act-on-Inbound_Email"
      set internet-service-id 5242889
  next
  edit "Act-on-LDAP"
      set internet-service-id 5242894
  next
  edit "Act-on-NetBIOS.Session.Service"
      set internet-service-id 5242895
  next
  edit "Act-on-RTMP"
      set internet-service-id 5242896
  next
  edit "Act-on-NetBIOS.Name.Service"
      set internet-service-id 5242904
  next
  edit "GoodData-Other"
      set internet-service-id 5308416
  next
  edit "GoodData-Web"
      set internet-service-id 5308417
  next
  edit "GoodData-ICMP"
      set internet-service-id 5308418
  next
  edit "GoodData-DNS"
      set internet-service-id 5308419
  next
  edit "GoodData-Outbound_Email"
      set internet-service-id 5308420
  next
  edit "GoodData-SSH"
      set internet-service-id 5308422
  next
  edit "GoodData-FTP"
      set internet-service-id 5308423
  next
  edit "GoodData-NTP"
      set internet-service-id 5308424
  next
  edit "GoodData-Inbound_Email"
      set internet-service-id 5308425
  next
  edit "GoodData-LDAP"
      set internet-service-id 5308430
  next
  edit "GoodData-NetBIOS.Session.Service"
      set internet-service-id 5308431
  next
  edit "GoodData-RTMP"
      set internet-service-id 5308432
  next
  edit "GoodData-NetBIOS.Name.Service"
      set internet-service-id 5308440
  next
  edit "SurveyMonkey-Other"
      set internet-service-id 5373952
  next
  edit "SurveyMonkey-Web"
      set internet-service-id 5373953
  next
  edit "SurveyMonkey-ICMP"
      set internet-service-id 5373954
  next
  edit "SurveyMonkey-DNS"
      set internet-service-id 5373955
  next
  edit "SurveyMonkey-Outbound_Email"
      set internet-service-id 5373956
  next
  edit "SurveyMonkey-SSH"
      set internet-service-id 5373958
  next
  edit "SurveyMonkey-FTP"
      set internet-service-id 5373959
  next
  edit "SurveyMonkey-NTP"
      set internet-service-id 5373960
  next
  edit "SurveyMonkey-Inbound_Email"
      set internet-service-id 5373961
  next
  edit "SurveyMonkey-LDAP"
      set internet-service-id 5373966
  next
  edit "SurveyMonkey-NetBIOS.Session.Service"
      set internet-service-id 5373967
  next
  edit "SurveyMonkey-RTMP"
      set internet-service-id 5373968
  next
  edit "SurveyMonkey-NetBIOS.Name.Service"
      set internet-service-id 5373976
  next
  edit "Cvent-Other"
      set internet-service-id 5439488
  next
  edit "Cvent-Web"
      set internet-service-id 5439489
  next
  edit "Cvent-ICMP"
      set internet-service-id 5439490
  next
  edit "Cvent-DNS"
      set internet-service-id 5439491
  next
  edit "Cvent-Outbound_Email"
      set internet-service-id 5439492
  next
  edit "Cvent-SSH"
      set internet-service-id 5439494
  next
  edit "Cvent-FTP"
      set internet-service-id 5439495
  next
  edit "Cvent-NTP"
      set internet-service-id 5439496
  next
  edit "Cvent-Inbound_Email"
      set internet-service-id 5439497
  next
  edit "Cvent-LDAP"
      set internet-service-id 5439502
  next
  edit "Cvent-NetBIOS.Session.Service"
      set internet-service-id 5439503
  next
  edit "Cvent-RTMP"
      set internet-service-id 5439504
  next
  edit "Cvent-NetBIOS.Name.Service"
      set internet-service-id 5439512
  next
  edit "Blackbaud-Other"
      set internet-service-id 5505024
  next
  edit "Blackbaud-Web"
      set internet-service-id 5505025
  next
  edit "Blackbaud-ICMP"
      set internet-service-id 5505026
  next
  edit "Blackbaud-DNS"
      set internet-service-id 5505027
  next
  edit "Blackbaud-Outbound_Email"
      set internet-service-id 5505028
  next
  edit "Blackbaud-SSH"
      set internet-service-id 5505030
  next
  edit "Blackbaud-FTP"
      set internet-service-id 5505031
  next
  edit "Blackbaud-NTP"
      set internet-service-id 5505032
  next
  edit "Blackbaud-Inbound_Email"
      set internet-service-id 5505033
  next
  edit "Blackbaud-LDAP"
      set internet-service-id 5505038
  next
  edit "Blackbaud-NetBIOS.Session.Service"
      set internet-service-id 5505039
  next
  edit "Blackbaud-RTMP"
      set internet-service-id 5505040
  next
  edit "Blackbaud-NetBIOS.Name.Service"
      set internet-service-id 5505048
  next
  edit "InsideSales-Other"
      set internet-service-id 5570560
  next
  edit "InsideSales-Web"
      set internet-service-id 5570561
  next
  edit "InsideSales-ICMP"
      set internet-service-id 5570562
  next
  edit "InsideSales-DNS"
      set internet-service-id 5570563
  next
  edit "InsideSales-Outbound_Email"
      set internet-service-id 5570564
  next
  edit "InsideSales-SSH"
      set internet-service-id 5570566
  next
  edit "InsideSales-FTP"
      set internet-service-id 5570567
  next
  edit "InsideSales-NTP"
      set internet-service-id 5570568
  next
  edit "InsideSales-Inbound_Email"
      set internet-service-id 5570569
  next
  edit "InsideSales-LDAP"
      set internet-service-id 5570574
  next
  edit "InsideSales-NetBIOS.Session.Service"
      set internet-service-id 5570575
  next
  edit "InsideSales-RTMP"
      set internet-service-id 5570576
  next
  edit "InsideSales-NetBIOS.Name.Service"
      set internet-service-id 5570584
  next
  edit "ServiceMax-Other"
      set internet-service-id 5636096
  next
  edit "ServiceMax-Web"
      set internet-service-id 5636097
  next
  edit "ServiceMax-ICMP"
      set internet-service-id 5636098
  next
  edit "ServiceMax-DNS"
      set internet-service-id 5636099
  next
  edit "ServiceMax-Outbound_Email"
      set internet-service-id 5636100
  next
  edit "ServiceMax-SSH"
      set internet-service-id 5636102
  next
  edit "ServiceMax-FTP"
      set internet-service-id 5636103
  next
  edit "ServiceMax-NTP"
      set internet-service-id 5636104
  next
  edit "ServiceMax-Inbound_Email"
      set internet-service-id 5636105
  next
  edit "ServiceMax-LDAP"
      set internet-service-id 5636110
  next
  edit "ServiceMax-NetBIOS.Session.Service"
      set internet-service-id 5636111
  next
  edit "ServiceMax-RTMP"
      set internet-service-id 5636112
  next
  edit "ServiceMax-NetBIOS.Name.Service"
      set internet-service-id 5636120
  next
  edit "Apptio-Other"
      set internet-service-id 5701632
  next
  edit "Apptio-Web"
      set internet-service-id 5701633
  next
  edit "Apptio-ICMP"
      set internet-service-id 5701634
  next
  edit "Apptio-DNS"
      set internet-service-id 5701635
  next
  edit "Apptio-Outbound_Email"
      set internet-service-id 5701636
  next
  edit "Apptio-SSH"
      set internet-service-id 5701638
  next
  edit "Apptio-FTP"
      set internet-service-id 5701639
  next
  edit "Apptio-NTP"
      set internet-service-id 5701640
  next
  edit "Apptio-Inbound_Email"
      set internet-service-id 5701641
  next
  edit "Apptio-LDAP"
      set internet-service-id 5701646
  next
  edit "Apptio-NetBIOS.Session.Service"
      set internet-service-id 5701647
  next
  edit "Apptio-RTMP"
      set internet-service-id 5701648
  next
  edit "Apptio-NetBIOS.Name.Service"
      set internet-service-id 5701656
  next
  edit "Veracode-Other"
      set internet-service-id 5767168
  next
  edit "Veracode-Web"
      set internet-service-id 5767169
  next
  edit "Veracode-ICMP"
      set internet-service-id 5767170
  next
  edit "Veracode-DNS"
      set internet-service-id 5767171
  next
  edit "Veracode-Outbound_Email"
      set internet-service-id 5767172
  next
  edit "Veracode-SSH"
      set internet-service-id 5767174
  next
  edit "Veracode-FTP"
      set internet-service-id 5767175
  next
  edit "Veracode-NTP"
      set internet-service-id 5767176
  next
  edit "Veracode-Inbound_Email"
      set internet-service-id 5767177
  next
  edit "Veracode-LDAP"
      set internet-service-id 5767182
  next
  edit "Veracode-NetBIOS.Session.Service"
      set internet-service-id 5767183
  next
  edit "Veracode-RTMP"
      set internet-service-id 5767184
  next
  edit "Veracode-NetBIOS.Name.Service"
      set internet-service-id 5767192
  next
  edit "Anaplan-Other"
      set internet-service-id 5832704
  next
  edit "Anaplan-Web"
      set internet-service-id 5832705
  next
  edit "Anaplan-ICMP"
      set internet-service-id 5832706
  next
  edit "Anaplan-DNS"
      set internet-service-id 5832707
  next
  edit "Anaplan-Outbound_Email"
      set internet-service-id 5832708
  next
  edit "Anaplan-SSH"
      set internet-service-id 5832710
  next
  edit "Anaplan-FTP"
      set internet-service-id 5832711
  next
  edit "Anaplan-NTP"
      set internet-service-id 5832712
  next
  edit "Anaplan-Inbound_Email"
      set internet-service-id 5832713
  next
  edit "Anaplan-LDAP"
      set internet-service-id 5832718
  next
  edit "Anaplan-NetBIOS.Session.Service"
      set internet-service-id 5832719
  next
  edit "Anaplan-RTMP"
      set internet-service-id 5832720
  next
  edit "Anaplan-NetBIOS.Name.Service"
      set internet-service-id 5832728
  next
  edit "Rapid7-Other"
      set internet-service-id 5898240
  next
  edit "Rapid7-Web"
      set internet-service-id 5898241
  next
  edit "Rapid7-ICMP"
      set internet-service-id 5898242
  next
  edit "Rapid7-DNS"
      set internet-service-id 5898243
  next
  edit "Rapid7-Outbound_Email"
      set internet-service-id 5898244
  next
  edit "Rapid7-SSH"
      set internet-service-id 5898246
  next
  edit "Rapid7-FTP"
      set internet-service-id 5898247
  next
  edit "Rapid7-NTP"
      set internet-service-id 5898248
  next
  edit "Rapid7-Inbound_Email"
      set internet-service-id 5898249
  next
  edit "Rapid7-LDAP"
      set internet-service-id 5898254
  next
  edit "Rapid7-NetBIOS.Session.Service"
      set internet-service-id 5898255
  next
  edit "Rapid7-RTMP"
      set internet-service-id 5898256
  next
  edit "Rapid7-NetBIOS.Name.Service"
      set internet-service-id 5898264
  next
  edit "Anydesk-Anydesk"
      set internet-service-id 5963927
  next
  edit "ESET-Eset.Service"
      set internet-service-id 6029426
  next
  edit "Slack-Other"
      set internet-service-id 6094848
  next
  edit "Slack-Web"
      set internet-service-id 6094849
  next
  edit "Slack-ICMP"
      set internet-service-id 6094850
  next
  edit "Slack-DNS"
      set internet-service-id 6094851
  next
  edit "Slack-Outbound_Email"
      set internet-service-id 6094852
  next
  edit "Slack-SSH"
      set internet-service-id 6094854
  next
  edit "Slack-FTP"
      set internet-service-id 6094855
  next
  edit "Slack-NTP"
      set internet-service-id 6094856
  next
  edit "Slack-Inbound_Email"
      set internet-service-id 6094857
  next
  edit "Slack-LDAP"
      set internet-service-id 6094862
  next
  edit "Slack-NetBIOS.Session.Service"
      set internet-service-id 6094863
  next
  edit "Slack-RTMP"
      set internet-service-id 6094864
  next
  edit "Slack-NetBIOS.Name.Service"
      set internet-service-id 6094872
  next
  edit "Slack-Slack"
      set internet-service-id 6095024
  next
  edit "ADP-Other"
      set internet-service-id 6160384
  next
  edit "ADP-Web"
      set internet-service-id 6160385
  next
  edit "ADP-ICMP"
      set internet-service-id 6160386
  next
  edit "ADP-DNS"
      set internet-service-id 6160387
  next
  edit "ADP-Outbound_Email"
      set internet-service-id 6160388
  next
  edit "ADP-SSH"
      set internet-service-id 6160390
  next
  edit "ADP-FTP"
      set internet-service-id 6160391
  next
  edit "ADP-NTP"
      set internet-service-id 6160392
  next
  edit "ADP-Inbound_Email"
      set internet-service-id 6160393
  next
  edit "ADP-LDAP"
      set internet-service-id 6160398
  next
  edit "ADP-NetBIOS.Session.Service"
      set internet-service-id 6160399
  next
  edit "ADP-RTMP"
      set internet-service-id 6160400
  next
  edit "ADP-NetBIOS.Name.Service"
      set internet-service-id 6160408
  next
  edit "Blackboard-Other"
      set internet-service-id 6225920
  next
  edit "Blackboard-Web"
      set internet-service-id 6225921
  next
  edit "Blackboard-ICMP"
      set internet-service-id 6225922
  next
  edit "Blackboard-DNS"
      set internet-service-id 6225923
  next
  edit "Blackboard-Outbound_Email"
      set internet-service-id 6225924
  next
  edit "Blackboard-SSH"
      set internet-service-id 6225926
  next
  edit "Blackboard-FTP"
      set internet-service-id 6225927
  next
  edit "Blackboard-NTP"
      set internet-service-id 6225928
  next
  edit "Blackboard-Inbound_Email"
      set internet-service-id 6225929
  next
  edit "Blackboard-LDAP"
      set internet-service-id 6225934
  next
  edit "Blackboard-NetBIOS.Session.Service"
      set internet-service-id 6225935
  next
  edit "Blackboard-RTMP"
      set internet-service-id 6225936
  next
  edit "Blackboard-NetBIOS.Name.Service"
      set internet-service-id 6225944
  next
  edit "SAP-Other"
      set internet-service-id 6291456
  next
  edit "SAP-Web"
      set internet-service-id 6291457
  next
  edit "SAP-ICMP"
      set internet-service-id 6291458
  next
  edit "SAP-DNS"
      set internet-service-id 6291459
  next
  edit "SAP-Outbound_Email"
      set internet-service-id 6291460
  next
  edit "SAP-SSH"
      set internet-service-id 6291462
  next
  edit "SAP-FTP"
      set internet-service-id 6291463
  next
  edit "SAP-NTP"
      set internet-service-id 6291464
  next
  edit "SAP-Inbound_Email"
      set internet-service-id 6291465
  next
  edit "SAP-LDAP"
      set internet-service-id 6291470
  next
  edit "SAP-NetBIOS.Session.Service"
      set internet-service-id 6291471
  next
  edit "SAP-RTMP"
      set internet-service-id 6291472
  next
  edit "SAP-NetBIOS.Name.Service"
      set internet-service-id 6291480
  next
  edit "SAP-HANA"
      set internet-service-id 6291612
  next
  edit "SAP-SuccessFactors"
      set internet-service-id 6291618
  next
  edit "Snap-Snapchat"
      set internet-service-id 6357108
  next
  edit "Zoom.us-Zoom.Meeting"
      set internet-service-id 6422646
  next
  edit "Sophos-Other"
      set internet-service-id 6488064
  next
  edit "Sophos-Web"
      set internet-service-id 6488065
  next
  edit "Sophos-ICMP"
      set internet-service-id 6488066
  next
  edit "Sophos-DNS"
      set internet-service-id 6488067
  next
  edit "Sophos-Outbound_Email"
      set internet-service-id 6488068
  next
  edit "Sophos-SSH"
      set internet-service-id 6488070
  next
  edit "Sophos-FTP"
      set internet-service-id 6488071
  next
  edit "Sophos-NTP"
      set internet-service-id 6488072
  next
  edit "Sophos-Inbound_Email"
      set internet-service-id 6488073
  next
  edit "Sophos-LDAP"
      set internet-service-id 6488078
  next
  edit "Sophos-NetBIOS.Session.Service"
      set internet-service-id 6488079
  next
  edit "Sophos-RTMP"
      set internet-service-id 6488080
  next
  edit "Sophos-NetBIOS.Name.Service"
      set internet-service-id 6488088
  next
  edit "Cloudflare-Other"
      set internet-service-id 6553600
  next
  edit "Cloudflare-Web"
      set internet-service-id 6553601
  next
  edit "Cloudflare-ICMP"
      set internet-service-id 6553602
  next
  edit "Cloudflare-DNS"
      set internet-service-id 6553603
  next
  edit "Cloudflare-Outbound_Email"
      set internet-service-id 6553604
  next
  edit "Cloudflare-SSH"
      set internet-service-id 6553606
  next
  edit "Cloudflare-FTP"
      set internet-service-id 6553607
  next
  edit "Cloudflare-NTP"
      set internet-service-id 6553608
  next
  edit "Cloudflare-Inbound_Email"
      set internet-service-id 6553609
  next
  edit "Cloudflare-LDAP"
      set internet-service-id 6553614
  next
  edit "Cloudflare-NetBIOS.Session.Service"
      set internet-service-id 6553615
  next
  edit "Cloudflare-RTMP"
      set internet-service-id 6553616
  next
  edit "Cloudflare-NetBIOS.Name.Service"
      set internet-service-id 6553624
  next
  edit "Cloudflare-CDN"
      set internet-service-id 6553737
  next
  edit "Pexip-Pexip.Meeting"
      set internet-service-id 6619256
  next
  edit "Zscaler-Other"
      set internet-service-id 6684672
  next
  edit "Zscaler-Web"
      set internet-service-id 6684673
  next
  edit "Zscaler-ICMP"
      set internet-service-id 6684674
  next
  edit "Zscaler-DNS"
      set internet-service-id 6684675
  next
  edit "Zscaler-Outbound_Email"
      set internet-service-id 6684676
  next
  edit "Zscaler-SSH"
      set internet-service-id 6684678
  next
  edit "Zscaler-FTP"
      set internet-service-id 6684679
  next
  edit "Zscaler-NTP"
      set internet-service-id 6684680
  next
  edit "Zscaler-Inbound_Email"
      set internet-service-id 6684681
  next
  edit "Zscaler-LDAP"
      set internet-service-id 6684686
  next
  edit "Zscaler-NetBIOS.Session.Service"
      set internet-service-id 6684687
  next
  edit "Zscaler-RTMP"
      set internet-service-id 6684688
  next
  edit "Zscaler-NetBIOS.Name.Service"
      set internet-service-id 6684696
  next
  edit "Zscaler-Zscaler.Cloud"
      set internet-service-id 6684793
  next
  edit "Yandex-Other"
      set internet-service-id 6750208
  next
  edit "Yandex-Web"
      set internet-service-id 6750209
  next
  edit "Yandex-ICMP"
      set internet-service-id 6750210
  next
  edit "Yandex-DNS"
      set internet-service-id 6750211
  next
  edit "Yandex-Outbound_Email"
      set internet-service-id 6750212
  next
  edit "Yandex-SSH"
      set internet-service-id 6750214
  next
  edit "Yandex-FTP"
      set internet-service-id 6750215
  next
  edit "Yandex-NTP"
      set internet-service-id 6750216
  next
  edit "Yandex-Inbound_Email"
      set internet-service-id 6750217
  next
  edit "Yandex-LDAP"
      set internet-service-id 6750222
  next
  edit "Yandex-NetBIOS.Session.Service"
      set internet-service-id 6750223
  next
  edit "Yandex-RTMP"
      set internet-service-id 6750224
  next
  edit "Yandex-NetBIOS.Name.Service"
      set internet-service-id 6750232
  next
  edit "mail.ru-Other"
      set internet-service-id 6815744
  next
  edit "mail.ru-Web"
      set internet-service-id 6815745
  next
  edit "mail.ru-ICMP"
      set internet-service-id 6815746
  next
  edit "mail.ru-DNS"
      set internet-service-id 6815747
  next
  edit "mail.ru-Outbound_Email"
      set internet-service-id 6815748
  next
  edit "mail.ru-SSH"
      set internet-service-id 6815750
  next
  edit "mail.ru-FTP"
      set internet-service-id 6815751
  next
  edit "mail.ru-NTP"
      set internet-service-id 6815752
  next
  edit "mail.ru-Inbound_Email"
      set internet-service-id 6815753
  next
  edit "mail.ru-LDAP"
      set internet-service-id 6815758
  next
  edit "mail.ru-NetBIOS.Session.Service"
      set internet-service-id 6815759
  next
  edit "mail.ru-RTMP"
      set internet-service-id 6815760
  next
  edit "mail.ru-NetBIOS.Name.Service"
      set internet-service-id 6815768
  next
  edit "Alibaba-Other"
      set internet-service-id 6881280
  next
  edit "Alibaba-Web"
      set internet-service-id 6881281
  next
  edit "Alibaba-ICMP"
      set internet-service-id 6881282
  next
  edit "Alibaba-DNS"
      set internet-service-id 6881283
  next
  edit "Alibaba-Outbound_Email"
      set internet-service-id 6881284
  next
  edit "Alibaba-SSH"
      set internet-service-id 6881286
  next
  edit "Alibaba-FTP"
      set internet-service-id 6881287
  next
  edit "Alibaba-NTP"
      set internet-service-id 6881288
  next
  edit "Alibaba-Inbound_Email"
      set internet-service-id 6881289
  next
  edit "Alibaba-LDAP"
      set internet-service-id 6881294
  next
  edit "Alibaba-NetBIOS.Session.Service"
      set internet-service-id 6881295
  next
  edit "Alibaba-RTMP"
      set internet-service-id 6881296
  next
  edit "Alibaba-NetBIOS.Name.Service"
      set internet-service-id 6881304
  next
  edit "Alibaba-Alibaba.Cloud"
      set internet-service-id 6881402
  next
  edit "GoDaddy-Other"
      set internet-service-id 6946816
  next
  edit "GoDaddy-Web"
      set internet-service-id 6946817
  next
  edit "GoDaddy-ICMP"
      set internet-service-id 6946818
  next
  edit "GoDaddy-DNS"
      set internet-service-id 6946819
  next
  edit "GoDaddy-Outbound_Email"
      set internet-service-id 6946820
  next
  edit "GoDaddy-SSH"
      set internet-service-id 6946822
  next
  edit "GoDaddy-FTP"
      set internet-service-id 6946823
  next
  edit "GoDaddy-NTP"
      set internet-service-id 6946824
  next
  edit "GoDaddy-Inbound_Email"
      set internet-service-id 6946825
  next
  edit "GoDaddy-LDAP"
      set internet-service-id 6946830
  next
  edit "GoDaddy-NetBIOS.Session.Service"
      set internet-service-id 6946831
  next
  edit "GoDaddy-RTMP"
      set internet-service-id 6946832
  next
  edit "GoDaddy-NetBIOS.Name.Service"
      set internet-service-id 6946840
  next
  edit "GoDaddy-GoDaddy.Email"
      set internet-service-id 6946939
  next
  edit "Bluejeans-Other"
      set internet-service-id 7012352
  next
  edit "Bluejeans-Web"
      set internet-service-id 7012353
  next
  edit "Bluejeans-ICMP"
      set internet-service-id 7012354
  next
  edit "Bluejeans-DNS"
      set internet-service-id 7012355
  next
  edit "Bluejeans-Outbound_Email"
      set internet-service-id 7012356
  next
  edit "Bluejeans-SSH"
      set internet-service-id 7012358
  next
  edit "Bluejeans-FTP"
      set internet-service-id 7012359
  next
  edit "Bluejeans-NTP"
      set internet-service-id 7012360
  next
  edit "Bluejeans-Inbound_Email"
      set internet-service-id 7012361
  next
  edit "Bluejeans-LDAP"
      set internet-service-id 7012366
  next
  edit "Bluejeans-NetBIOS.Session.Service"
      set internet-service-id 7012367
  next
  edit "Bluejeans-RTMP"
      set internet-service-id 7012368
  next
  edit "Bluejeans-NetBIOS.Name.Service"
      set internet-service-id 7012376
  next
  edit "Bluejeans-Bluejeans.Meeting"
      set internet-service-id 7012476
  next
  edit "Webroot-Webroot.SecureAnywhere"
      set internet-service-id 7078013
  next
  edit "Avast-Other"
      set internet-service-id 7143424
  next
  edit "Avast-Web"
      set internet-service-id 7143425
  next
  edit "Avast-ICMP"
      set internet-service-id 7143426
  next
  edit "Avast-DNS"
      set internet-service-id 7143427
  next
  edit "Avast-Outbound_Email"
      set internet-service-id 7143428
  next
  edit "Avast-SSH"
      set internet-service-id 7143430
  next
  edit "Avast-FTP"
      set internet-service-id 7143431
  next
  edit "Avast-NTP"
      set internet-service-id 7143432
  next
  edit "Avast-Inbound_Email"
      set internet-service-id 7143433
  next
  edit "Avast-LDAP"
      set internet-service-id 7143438
  next
  edit "Avast-NetBIOS.Session.Service"
      set internet-service-id 7143439
  next
  edit "Avast-RTMP"
      set internet-service-id 7143440
  next
  edit "Avast-NetBIOS.Name.Service"
      set internet-service-id 7143448
  next
  edit "Avast-Avast.Security"
      set internet-service-id 7143550
  next
  edit "Wetransfer-Other"
      set internet-service-id 7208960
  next
  edit "Wetransfer-Web"
      set internet-service-id 7208961
  next
  edit "Wetransfer-ICMP"
      set internet-service-id 7208962
  next
  edit "Wetransfer-DNS"
      set internet-service-id 7208963
  next
  edit "Wetransfer-Outbound_Email"
      set internet-service-id 7208964
  next
  edit "Wetransfer-SSH"
      set internet-service-id 7208966
  next
  edit "Wetransfer-FTP"
      set internet-service-id 7208967
  next
  edit "Wetransfer-NTP"
      set internet-service-id 7208968
  next
  edit "Wetransfer-Inbound_Email"
      set internet-service-id 7208969
  next
  edit "Wetransfer-LDAP"
      set internet-service-id 7208974
  next
  edit "Wetransfer-NetBIOS.Session.Service"
      set internet-service-id 7208975
  next
  edit "Wetransfer-RTMP"
      set internet-service-id 7208976
  next
  edit "Wetransfer-NetBIOS.Name.Service"
      set internet-service-id 7208984
  next
  edit "Sendgrid-Sendgrid.Email"
      set internet-service-id 7274623
  next
  edit "Ubiquiti-UniFi"
      set internet-service-id 7340160
  next
  edit "Lifesize-Lifesize.Cloud"
      set internet-service-id 7405697
  next
  edit "Okta-Other"
      set internet-service-id 7471104
  next
  edit "Okta-Web"
      set internet-service-id 7471105
  next
  edit "Okta-ICMP"
      set internet-service-id 7471106
  next
  edit "Okta-DNS"
      set internet-service-id 7471107
  next
  edit "Okta-Outbound_Email"
      set internet-service-id 7471108
  next
  edit "Okta-SSH"
      set internet-service-id 7471110
  next
  edit "Okta-FTP"
      set internet-service-id 7471111
  next
  edit "Okta-NTP"
      set internet-service-id 7471112
  next
  edit "Okta-Inbound_Email"
      set internet-service-id 7471113
  next
  edit "Okta-LDAP"
      set internet-service-id 7471118
  next
  edit "Okta-NetBIOS.Session.Service"
      set internet-service-id 7471119
  next
  edit "Okta-RTMP"
      set internet-service-id 7471120
  next
  edit "Okta-NetBIOS.Name.Service"
      set internet-service-id 7471128
  next
  edit "Okta-Okta"
      set internet-service-id 7471307
  next
  edit "Cybozu-Other"
      set internet-service-id 7536640
  next
  edit "Cybozu-Web"
      set internet-service-id 7536641
  next
  edit "Cybozu-ICMP"
      set internet-service-id 7536642
  next
  edit "Cybozu-DNS"
      set internet-service-id 7536643
  next
  edit "Cybozu-Outbound_Email"
      set internet-service-id 7536644
  next
  edit "Cybozu-SSH"
      set internet-service-id 7536646
  next
  edit "Cybozu-FTP"
      set internet-service-id 7536647
  next
  edit "Cybozu-NTP"
      set internet-service-id 7536648
  next
  edit "Cybozu-Inbound_Email"
      set internet-service-id 7536649
  next
  edit "Cybozu-LDAP"
      set internet-service-id 7536654
  next
  edit "Cybozu-NetBIOS.Session.Service"
      set internet-service-id 7536655
  next
  edit "Cybozu-RTMP"
      set internet-service-id 7536656
  next
  edit "Cybozu-NetBIOS.Name.Service"
      set internet-service-id 7536664
  next
  edit "VNC-Other"
      set internet-service-id 7602176
  next
  edit "VNC-Web"
      set internet-service-id 7602177
  next
  edit "VNC-ICMP"
      set internet-service-id 7602178
  next
  edit "VNC-DNS"
      set internet-service-id 7602179
  next
  edit "VNC-Outbound_Email"
      set internet-service-id 7602180
  next
  edit "VNC-SSH"
      set internet-service-id 7602182
  next
  edit "VNC-FTP"
      set internet-service-id 7602183
  next
  edit "VNC-NTP"
      set internet-service-id 7602184
  next
  edit "VNC-Inbound_Email"
      set internet-service-id 7602185
  next
  edit "VNC-LDAP"
      set internet-service-id 7602190
  next
  edit "VNC-NetBIOS.Session.Service"
      set internet-service-id 7602191
  next
  edit "VNC-RTMP"
      set internet-service-id 7602192
  next
  edit "VNC-NetBIOS.Name.Service"
      set internet-service-id 7602200
  next
  edit "Egnyte-Egnyte"
      set internet-service-id 7667846
  next
  edit "CrowdStrike-CrowdStrike.Cloud"
      set internet-service-id 7733383
  next
  edit "Aruba.it-Other"
      set internet-service-id 7798784
  next
  edit "Aruba.it-Web"
      set internet-service-id 7798785
  next
  edit "Aruba.it-ICMP"
      set internet-service-id 7798786
  next
  edit "Aruba.it-DNS"
      set internet-service-id 7798787
  next
  edit "Aruba.it-Outbound_Email"
      set internet-service-id 7798788
  next
  edit "Aruba.it-SSH"
      set internet-service-id 7798790
  next
  edit "Aruba.it-FTP"
      set internet-service-id 7798791
  next
  edit "Aruba.it-NTP"
      set internet-service-id 7798792
  next
  edit "Aruba.it-Inbound_Email"
      set internet-service-id 7798793
  next
  edit "Aruba.it-LDAP"
      set internet-service-id 7798798
  next
  edit "Aruba.it-NetBIOS.Session.Service"
      set internet-service-id 7798799
  next
  edit "Aruba.it-RTMP"
      set internet-service-id 7798800
  next
  edit "Aruba.it-NetBIOS.Name.Service"
      set internet-service-id 7798808
  next
  edit "ISLOnline-Other"
      set internet-service-id 7864320
  next
  edit "ISLOnline-Web"
      set internet-service-id 7864321
  next
  edit "ISLOnline-ICMP"
      set internet-service-id 7864322
  next
  edit "ISLOnline-DNS"
      set internet-service-id 7864323
  next
  edit "ISLOnline-Outbound_Email"
      set internet-service-id 7864324
  next
  edit "ISLOnline-SSH"
      set internet-service-id 7864326
  next
  edit "ISLOnline-FTP"
      set internet-service-id 7864327
  next
  edit "ISLOnline-NTP"
      set internet-service-id 7864328
  next
  edit "ISLOnline-Inbound_Email"
      set internet-service-id 7864329
  next
  edit "ISLOnline-LDAP"
      set internet-service-id 7864334
  next
  edit "ISLOnline-NetBIOS.Session.Service"
      set internet-service-id 7864335
  next
  edit "ISLOnline-RTMP"
      set internet-service-id 7864336
  next
  edit "ISLOnline-NetBIOS.Name.Service"
      set internet-service-id 7864344
  next
  edit "Akamai-CDN"
      set internet-service-id 7929993
  next
  edit "Rackspace-CDN"
      set internet-service-id 7995529
  next
  edit "Instart-CDN"
      set internet-service-id 8061065
  next
  edit "Bitdefender-Other"
      set internet-service-id 8126464
  next
  edit "Bitdefender-Web"
      set internet-service-id 8126465
  next
  edit "Bitdefender-ICMP"
      set internet-service-id 8126466
  next
  edit "Bitdefender-DNS"
      set internet-service-id 8126467
  next
  edit "Bitdefender-Outbound_Email"
      set internet-service-id 8126468
  next
  edit "Bitdefender-SSH"
      set internet-service-id 8126470
  next
  edit "Bitdefender-FTP"
      set internet-service-id 8126471
  next
  edit "Bitdefender-NTP"
      set internet-service-id 8126472
  next
  edit "Bitdefender-Inbound_Email"
      set internet-service-id 8126473
  next
  edit "Bitdefender-LDAP"
      set internet-service-id 8126478
  next
  edit "Bitdefender-NetBIOS.Session.Service"
      set internet-service-id 8126479
  next
  edit "Bitdefender-RTMP"
      set internet-service-id 8126480
  next
  edit "Bitdefender-NetBIOS.Name.Service"
      set internet-service-id 8126488
  next
  edit "Pingdom-Other"
      set internet-service-id 8192000
  next
  edit "Pingdom-Web"
      set internet-service-id 8192001
  next
  edit "Pingdom-ICMP"
      set internet-service-id 8192002
  next
  edit "Pingdom-DNS"
      set internet-service-id 8192003
  next
  edit "Pingdom-Outbound_Email"
      set internet-service-id 8192004
  next
  edit "Pingdom-SSH"
      set internet-service-id 8192006
  next
  edit "Pingdom-FTP"
      set internet-service-id 8192007
  next
  edit "Pingdom-NTP"
      set internet-service-id 8192008
  next
  edit "Pingdom-Inbound_Email"
      set internet-service-id 8192009
  next
  edit "Pingdom-LDAP"
      set internet-service-id 8192014
  next
  edit "Pingdom-NetBIOS.Session.Service"
      set internet-service-id 8192015
  next
  edit "Pingdom-RTMP"
      set internet-service-id 8192016
  next
  edit "Pingdom-NetBIOS.Name.Service"
      set internet-service-id 8192024
  next
  edit "UptimeRobot-Other"
      set internet-service-id 8257536
  next
  edit "UptimeRobot-Web"
      set internet-service-id 8257537
  next
  edit "UptimeRobot-ICMP"
      set internet-service-id 8257538
  next
  edit "UptimeRobot-DNS"
      set internet-service-id 8257539
  next
  edit "UptimeRobot-Outbound_Email"
      set internet-service-id 8257540
  next
  edit "UptimeRobot-SSH"
      set internet-service-id 8257542
  next
  edit "UptimeRobot-FTP"
      set internet-service-id 8257543
  next
  edit "UptimeRobot-NTP"
      set internet-service-id 8257544
  next
  edit "UptimeRobot-Inbound_Email"
      set internet-service-id 8257545
  next
  edit "UptimeRobot-LDAP"
      set internet-service-id 8257550
  next
  edit "UptimeRobot-NetBIOS.Session.Service"
      set internet-service-id 8257551
  next
  edit "UptimeRobot-RTMP"
      set internet-service-id 8257552
  next
  edit "UptimeRobot-NetBIOS.Name.Service"
      set internet-service-id 8257560
  next
  edit "UptimeRobot-UptimeRobot.Monitor"
      set internet-service-id 8257709
  next
  edit "Quovadisglobal-Other"
      set internet-service-id 8323072
  next
  edit "Quovadisglobal-Web"
      set internet-service-id 8323073
  next
  edit "Quovadisglobal-ICMP"
      set internet-service-id 8323074
  next
  edit "Quovadisglobal-DNS"
      set internet-service-id 8323075
  next
  edit "Quovadisglobal-Outbound_Email"
      set internet-service-id 8323076
  next
  edit "Quovadisglobal-SSH"
      set internet-service-id 8323078
  next
  edit "Quovadisglobal-FTP"
      set internet-service-id 8323079
  next
  edit "Quovadisglobal-NTP"
      set internet-service-id 8323080
  next
  edit "Quovadisglobal-Inbound_Email"
      set internet-service-id 8323081
  next
  edit "Quovadisglobal-LDAP"
      set internet-service-id 8323086
  next
  edit "Quovadisglobal-NetBIOS.Session.Service"
      set internet-service-id 8323087
  next
  edit "Quovadisglobal-RTMP"
      set internet-service-id 8323088
  next
  edit "Quovadisglobal-NetBIOS.Name.Service"
      set internet-service-id 8323096
  next
  edit "Splashtop-Splashtop"
      set internet-service-id 8388751
  next
  edit "Zoox-Other"
      set internet-service-id 8454144
  next
  edit "Zoox-Web"
      set internet-service-id 8454145
  next
  edit "Zoox-ICMP"
      set internet-service-id 8454146
  next
  edit "Zoox-DNS"
      set internet-service-id 8454147
  next
  edit "Zoox-Outbound_Email"
      set internet-service-id 8454148
  next
  edit "Zoox-SSH"
      set internet-service-id 8454150
  next
  edit "Zoox-FTP"
      set internet-service-id 8454151
  next
  edit "Zoox-NTP"
      set internet-service-id 8454152
  next
  edit "Zoox-Inbound_Email"
      set internet-service-id 8454153
  next
  edit "Zoox-LDAP"
      set internet-service-id 8454158
  next
  edit "Zoox-NetBIOS.Session.Service"
      set internet-service-id 8454159
  next
  edit "Zoox-RTMP"
      set internet-service-id 8454160
  next
  edit "Zoox-NetBIOS.Name.Service"
      set internet-service-id 8454168
  next
  edit "Skyfii-Other"
      set internet-service-id 8519680
  next
  edit "Skyfii-Web"
      set internet-service-id 8519681
  next
  edit "Skyfii-ICMP"
      set internet-service-id 8519682
  next
  edit "Skyfii-DNS"
      set internet-service-id 8519683
  next
  edit "Skyfii-Outbound_Email"
      set internet-service-id 8519684
  next
  edit "Skyfii-SSH"
      set internet-service-id 8519686
  next
  edit "Skyfii-FTP"
      set internet-service-id 8519687
  next
  edit "Skyfii-NTP"
      set internet-service-id 8519688
  next
  edit "Skyfii-Inbound_Email"
      set internet-service-id 8519689
  next
  edit "Skyfii-LDAP"
      set internet-service-id 8519694
  next
  edit "Skyfii-NetBIOS.Session.Service"
      set internet-service-id 8519695
  next
  edit "Skyfii-RTMP"
      set internet-service-id 8519696
  next
  edit "Skyfii-NetBIOS.Name.Service"
      set internet-service-id 8519704
  next
  edit "CoffeeBean-Other"
      set internet-service-id 8585216
  next
  edit "CoffeeBean-Web"
      set internet-service-id 8585217
  next
  edit "CoffeeBean-ICMP"
      set internet-service-id 8585218
  next
  edit "CoffeeBean-DNS"
      set internet-service-id 8585219
  next
  edit "CoffeeBean-Outbound_Email"
      set internet-service-id 8585220
  next
  edit "CoffeeBean-SSH"
      set internet-service-id 8585222
  next
  edit "CoffeeBean-FTP"
      set internet-service-id 8585223
  next
  edit "CoffeeBean-NTP"
      set internet-service-id 8585224
  next
  edit "CoffeeBean-Inbound_Email"
      set internet-service-id 8585225
  next
  edit "CoffeeBean-LDAP"
      set internet-service-id 8585230
  next
  edit "CoffeeBean-NetBIOS.Session.Service"
      set internet-service-id 8585231
  next
  edit "CoffeeBean-RTMP"
      set internet-service-id 8585232
  next
  edit "CoffeeBean-NetBIOS.Name.Service"
      set internet-service-id 8585240
  next
  edit "Cloud4Wi-Other"
      set internet-service-id 8650752
  next
  edit "Cloud4Wi-Web"
      set internet-service-id 8650753
  next
  edit "Cloud4Wi-ICMP"
      set internet-service-id 8650754
  next
  edit "Cloud4Wi-DNS"
      set internet-service-id 8650755
  next
  edit "Cloud4Wi-Outbound_Email"
      set internet-service-id 8650756
  next
  edit "Cloud4Wi-SSH"
      set internet-service-id 8650758
  next
  edit "Cloud4Wi-FTP"
      set internet-service-id 8650759
  next
  edit "Cloud4Wi-NTP"
      set internet-service-id 8650760
  next
  edit "Cloud4Wi-Inbound_Email"
      set internet-service-id 8650761
  next
  edit "Cloud4Wi-LDAP"
      set internet-service-id 8650766
  next
  edit "Cloud4Wi-NetBIOS.Session.Service"
      set internet-service-id 8650767
  next
  edit "Cloud4Wi-RTMP"
      set internet-service-id 8650768
  next
  edit "Cloud4Wi-NetBIOS.Name.Service"
      set internet-service-id 8650776
  next
  edit "Panda-Panda.Security"
      set internet-service-id 8716432
  next
  edit "Ewon-Talk2M"
      set internet-service-id 8781970
  next
  edit "Nutanix-Nutanix.Cloud"
      set internet-service-id 8847507
  next
  edit "Backblaze-Other"
      set internet-service-id 8912896
  next
  edit "Backblaze-Web"
      set internet-service-id 8912897
  next
  edit "Backblaze-ICMP"
      set internet-service-id 8912898
  next
  edit "Backblaze-DNS"
      set internet-service-id 8912899
  next
  edit "Backblaze-Outbound_Email"
      set internet-service-id 8912900
  next
  edit "Backblaze-SSH"
      set internet-service-id 8912902
  next
  edit "Backblaze-FTP"
      set internet-service-id 8912903
  next
  edit "Backblaze-NTP"
      set internet-service-id 8912904
  next
  edit "Backblaze-Inbound_Email"
      set internet-service-id 8912905
  next
  edit "Backblaze-LDAP"
      set internet-service-id 8912910
  next
  edit "Backblaze-NetBIOS.Session.Service"
      set internet-service-id 8912911
  next
  edit "Backblaze-RTMP"
      set internet-service-id 8912912
  next
  edit "Backblaze-NetBIOS.Name.Service"
      set internet-service-id 8912920
  next
  edit "Aerohive-Aerohive.Cloud"
      set internet-service-id 8978580
  next
  edit "XING-Other"
      set internet-service-id 9043968
  next
  edit "XING-Web"
      set internet-service-id 9043969
  next
  edit "XING-ICMP"
      set internet-service-id 9043970
  next
  edit "XING-DNS"
      set internet-service-id 9043971
  next
  edit "XING-Outbound_Email"
      set internet-service-id 9043972
  next
  edit "XING-SSH"
      set internet-service-id 9043974
  next
  edit "XING-FTP"
      set internet-service-id 9043975
  next
  edit "XING-NTP"
      set internet-service-id 9043976
  next
  edit "XING-Inbound_Email"
      set internet-service-id 9043977
  next
  edit "XING-LDAP"
      set internet-service-id 9043982
  next
  edit "XING-NetBIOS.Session.Service"
      set internet-service-id 9043983
  next
  edit "XING-RTMP"
      set internet-service-id 9043984
  next
  edit "XING-NetBIOS.Name.Service"
      set internet-service-id 9043992
  next
  edit "Genesys-PureCloud"
      set internet-service-id 9109653
  next
  edit "BlackBerry-Cylance"
      set internet-service-id 9175190
  next
  edit "DigiCert-OCSP"
      set internet-service-id 9240728
  next
  edit "Infomaniak-SwissTransfer"
      set internet-service-id 9306265
  next
  edit "Fuze-Fuze"
      set internet-service-id 9371802
  next
  edit "Truecaller-Truecaller"
      set internet-service-id 9437339
  next
  edit "GlobalSign-OCSP"
      set internet-service-id 9502872
  next
  edit "VeriSign-OCSP"
      set internet-service-id 9568408
  next
  edit "Sony-PlayStation.Network"
      set internet-service-id 9633952
  next
  edit "Acronis-Cyber.Cloud"
      set internet-service-id 9699489
  next
  edit "RingCentral-RingCentral"
      set internet-service-id 9765027
  next
  edit "FSecure-FSecure"
      set internet-service-id 9830564
  next
  edit "Kaseya-Kaseya.Cloud"
      set internet-service-id 9896101
  next
  edit "Shodan-Scanner"
      set internet-service-id 9961638
  next
  edit "Censys-Scanner"
      set internet-service-id 10027174
  next
  edit "Valve-Steam"
      set internet-service-id 10092711
  next
  edit "YouSeeU-Bongo"
      set internet-service-id 10158248
  next
  edit "Cato-Cato.Cloud"
      set internet-service-id 10223785
  next
  edit "Solarwinds-SpamExperts"
      set internet-service-id 10289323
  next
  edit "Solarwinds-Pingdom.Probe"
      set internet-service-id 10289326
  next
  edit "8X8-8X8.Cloud"
      set internet-service-id 10354860
  next
  edit "Zattoo-Zattoo.TV"
      set internet-service-id 10420401
  next
  edit "Datto-Datto.RMM"
      set internet-service-id 10485939
  next
  edit "Barracuda-Barracuda.Cloud"
      set internet-service-id 10551477
  next
  edit "Naver-Line"
      set internet-service-id 10617015
  next
  edit "Disney-Disney+"
      set internet-service-id 10682552
  next
  edit "DNS-DoH_DoT"
      set internet-service-id 10748089
  next
  edit "Quad9-Quad9.Standard.DNS"
      set internet-service-id 10813626
  next
  edit "Stretchoid-Scanner"
      set internet-service-id 10879142
  next
  edit "Poly-RealConnect.Service"
      set internet-service-id 10944700
  next
  edit "Telegram-Telegram"
      set internet-service-id 11010249
  next
  edit "Spotify-Spotify"
      set internet-service-id 11075786
  next
  edit "NextDNS-NextDNS"
      set internet-service-id 11141324
  next
  edit "Fastly-CDN"
      set internet-service-id 11206793
  next
  edit "Neustar-UltraDNS.Probes"
      set internet-service-id 11272397
  next
end`
  )
}