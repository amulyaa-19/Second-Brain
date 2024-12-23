import { LogoIcon } from "../icons/LogoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
  return <div className="h-screen border-r w-72 fixed left-0 top-0 pl-6">
    <div className="flex text-2xl pt-4 items-center">
      <div className="pr-2 text-purple-700">
      <LogoIcon/>
      </div>
      Brainly
    </div>
    <div className="pt-4 pl-4">
      <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
      <SidebarItem text="YouTube" icon={<YoutubeIcon/>}/>

    </div>
  </div>
}