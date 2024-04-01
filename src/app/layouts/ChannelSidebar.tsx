import { twMerge } from "tailwind-merge";
import { SidebarSection } from "../components/SidebarSection";
import { buttonStyles } from "../components/button";
import { groupMembers } from "../data/memberSidebarData";


export function ChannelSideBar() {
    return <div className="max-h-screen flex-shrink flex">
        <aside className="max-h-screen h-full scrollbar-hidden w-64 md:w-72 lg:w-80 xl:w-96 pb-4 ml-1 bg-gray-800">

        </aside>
    </div>


}

type ChannelSideBarItem = {
    iconUrl: string
    userName: string
    url: string
    isOnline?: boolean
}

function ChannelSideBarItem({ iconUrl, userName, url, isOnline
}: ChannelSideBarItem) {

    return (
        <a href={url} className={twMerge(buttonStyles({ variant: "default", size: "icon" }),
            `w-full flex flex-row items-center rounded-lg gap-4 mb-0 p-3 mr-3 font-bold`)}>
            <img src={iconUrl} className={`w-8 h-8 rounded-full border-2 ${isOnline ? " border-green-500" : "border-transparent"}`} />
            <div>
                <div>{userName}</div>
            </div>
        </a>
    )
}


