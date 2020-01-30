(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{357:function(s,t,a){"use strict";a.r(t);var e=a(43),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/powershell/azure/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Overview of Azure PowerShell"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("h4",{attrs:{id:"export-azure-resources-to-csv-files-with-powershell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-azure-resources-to-csv-files-with-powershell","aria-hidden":"true"}},[s._v("#")]),s._v(" Export Azure Resources to CSV files with PowerShell")]),s._v(" "),a("p",[s._v("If you've ever had a need to create a CSV file of various Azure Resources for reports, etc. than this post is for you. I'm going to quickly show you how to generate a CSV file with PowerShell that lists VMs in the active subscription along with a couple of additional details.")]),s._v(" "),a("p",[s._v("Begin by typing "),a("code",[s._v("Install-Module -Name AzureRM")]),s._v(" and follow along with the prompts below. You may also install the update if you wish, but this should work fine in 5.x.")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("Windows PowerShell\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Microsoft Corporation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" All rights reserved"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\Windows\\system32> Install"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Module "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Name AzureRM\n\nNuGet provider is required to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v("\nPowerShellGet requires NuGet provider version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.8.5.201'")]),s._v(" or newer to interact with NuGet"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("based repositories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" The NuGet\n provider must be available in "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Program Files\\PackageManagement\\ProviderAssemblies'")]),s._v(" or\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Users\\mbcrump\\AppData\\Local\\PackageManagement\\ProviderAssemblies'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" You can also install the NuGet provider by\nrunning "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Do")]),s._v(" you want PowerShellGet to install\nand import the NuGet provider now?\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Y]")]),s._v(" Yes  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[N]")]),s._v(" No  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[S]")]),s._v(" Suspend  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Help "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default is "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\nUntrusted repository\nYou are installing the modules "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" an untrusted repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),s._v(" you trust this repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" change its\nInstallationPolicy value by running the "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("PSRepository cmdlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Are you sure you want to install the modules "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PSGallery'")]),s._v("?\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Y]")]),s._v(" Yes  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[A]")]),s._v(" Yes to All  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[N]")]),s._v(" No  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[L]")]),s._v(" No to All  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[S]")]),s._v(" Suspend  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Help "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default is "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"N"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Y\nWARNING: Version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5.7.0'")]),s._v(" of module "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'AzureRM'")]),s._v(" is already installed at "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Program\nFiles\\WindowsPowerShell\\Modules\\AzureRM\\5.7.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" To install version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6.3.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" run Install"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Module and add the "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Force\nparameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" this command will install version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6.3.0'")]),s._v(" in side"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("by"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("side with version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5.7.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("Run the "),a("code",[s._v("Import-Module AzureRM")]),s._v(" command and then type "),a("code",[s._v("A")]),s._v(" as shown below:")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" C:\\Windows\\system32> "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Import-Module")]),s._v(" AzureRM\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Do")]),s._v(" you want to run software "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" this untrusted publisher?\nFile C:\\Program Files\\WindowsPowerShell\\Modules\\AzureRM\\5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0\\AzureRM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("psm1 is published by CN=Microsoft Corporation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nO=Microsoft Corporation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" L=Redmond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" S=Washington"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" C=US and is not trusted on your system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Only run scripts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" trusted\n publishers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[V]")]),s._v(" Never run  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[D]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Do")]),s._v(" not run  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[R]")]),s._v(" Run once  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[A]")]),s._v(" Always run  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Help "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default is "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": A\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("In case you aren't in the working subscription where you have your resources then you might have to type "),a("code",[s._v("Set-AzureRmContext -SubscriptionId <SubId>")]),s._v(" where "),a("code",[s._v("SubId")]),s._v(" is the subscription id that you want to query.")]),s._v(" "),a("p",[s._v("Now add the following in your PowerShell window.")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VMs")]),s._v(" = Get"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("AzureRmVM\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vmOutput")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VMs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ForEach-Object")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[PSCustomObject]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM Name"')]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Name\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM Type"')]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("StorageProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("osDisk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("osType\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM Profile"')]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HardwareProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VmSize\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM OS Disk Size"')]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("StorageProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OsDisk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DiskSizeGB\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VM Data Disk Size"')]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("StorageProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DataDisks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DiskSizeGB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vmOutput")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("export-csv")]),s._v(" C:\\Users\\mbcrump\\"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("delimiter "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('";"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("force "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("notypeinformation\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("You can now open this CSV file in Excel and use a "),a("code",[s._v(";")]),s._v(" delimeter to format each item into columns.")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/powershellexport.png")}})])},[],!1,null,null,null);t.default=n.exports}}]);