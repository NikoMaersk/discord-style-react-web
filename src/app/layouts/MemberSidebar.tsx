'use client';

import { Crown } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { SidebarSection } from "../components/SidebarSection";
import { buttonStyles } from "../components/button";
import { groupMembers } from "../data/memberSidebarData";

const sorting = (a: any, b: any) => {
    if (a.isGroupOwner && !b.isGroupOwner) {
        return -1;
    }

    if (!a.isGroupOwner && b.isGroupOwner) {
        return 1;
    }

    return 0;
}

export const MemberSidebar = () => {
    return (
        <aside className="overflow-y-auto h-full scrollbar-hidden w-[300px] pb-4 ml-1 bg-gray-800">
            <SidebarSection title="Members" visibleItemCount={10} numberOfMembers={groupMembers.length}>
                {groupMembers.sort(sorting).map(member => (
                    <MemberSidebarItem 
                    key={member.id}
                    iconUrl={member.imgUrl}
                    userName={member.userName}
                    url={member.userUrl}
                    isGroupOwner={member.isGroupOwner}
                    activity={member.activity}
                    />
                ))}
            </SidebarSection>
        </aside>
    )
}


type MemberSidebarItemProps = {
    iconUrl: string
    userName: string
    url: string
    activity?: string
    isGroupOwner?: boolean
}


function MemberSidebarItem({ 
    iconUrl, userName, url, activity, isGroupOwner = false
 }: MemberSidebarItemProps) {
    return (
        <a href={url} className={twMerge(buttonStyles({ variant: "default", size: "icon"}),
        `w-full flex flex-row items-center rounded-lg gap-4 mb-0 p-3 mr-3 font-bold`)}>
            <img src={iconUrl} className="w-8 h-8 rounded-full" />
            <div>
                <div className="flex gap-2 items-center">
                    <div>{userName}</div>
                    {isGroupOwner && <Crown className="w-4 h-4 stroke-yellow-500 fill-yellow-500"/>}
                </div>
                {activity && <div className="whitespace-nowrap overflow-hidden text-ellipsis font-light">{activity}</div>}
            </div>
        </a>
    )
}