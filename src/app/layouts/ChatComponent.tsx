'use client';

import { formatTime } from "@/utils/formatTime";
import { ChatData } from "../data/chatData";
import { ChannelSideBar } from "./ChannelSidebar";
import ChatTopbar from "./ChatTopbar";
import { MemberSidebar } from "./MemberSidebar";
import { Bot, PlusCircleIcon } from "lucide-react";

export default function ChatComponent() {

    return <div className="h-screen flex flex-row">
        <ChannelSideBar />
        <div className="flex flex-col w-full">
            <div className="flex flex-col shadow-lg">
                <ChatTopbar group="My Group" />
            </div>
            <div className="flex flex-row whitespace-nowrap overflow-y-auto scrollbar">
                <div className="flex flex-col w-full justify-between whitespace-nowrap overflow-y-auto scrollbar">
                    <ContentContainer />
                    <BottomBar />
                </div>
                <MemberSidebar />
            </div>
        </div>
    </div>
}


function ContentContainer() {
    return (
        <div className="flex flex-col w-full whitespace-nowrap overflow-y-auto bg-transparent scrollbar-hidden">
            <div className="gap-4 flex flex-col">
                {ChatData.map(chatData => (
                    <ContentItem
                        key={chatData.id}
                        userName={chatData.userName}
                        timestamp={chatData.timestamp}
                        text={chatData.text}
                    />
                ))}
            </div>
        </div>
    )
}

type ContentItemProp = {
    userName: string
    timestamp: Date
    text: string
}

function ContentItem({ userName, timestamp, text }: ContentItemProp) {
    let icon = ""

    if (userName === "TechSavvy") {
        icon = "https://randomuser.me/api/portraits/lego/1.jpg"
    } else if (userName === "CyberNinja") {
        icon = "https://randomuser.me/api/portraits/lego/2.jpg"
    } else {
        icon = "https://randomuser.me/api/portraits/lego/4.jpg"
    }

    return (
        <div className="w-full flex flex-row items-start gap-5 py-4 px-8 m-0">
            <a>
                <div className="flex flex-col w-12 m-0 ml-auto mb-auto ">
                    <img className="flex-none w-12 h-full rounded-full shadow-md object-cover mb-auto mt-0 mx-0"
                        src={icon} />
                </div>
            </a>
            <div className="flex flex-col">
                <div className="flex items-center gap-2 h-8" >
                    <div className="font-semibold dark:text-white">{userName}</div>
                    <small className="text-xs font-semibold text-gray-500 dark:text-gray-500">{formatTime(timestamp)}</small>
                </div>
                <p className="whitespace-normal">{text}</p>
            </div>
        </div>
    )
}


function BottomBar() {
    return (
        <div className="flex 
        w-full 
        bg-gray-700 
        items-end
        justify-center 
        px-10
        py-5
        h-32">
            <div className="flex flex-row justify-between items-center 
            relative bottom-2 rounded-lg shadow-lg 
            bg-gray-400 dark:bg-gray-600 px-2 h-13 w-full">
                <PlusCircleIcon className=" size-10 fill-gray-400 stroke-gray-600" />
                <input
                    placeholder="Enter message..."
                    className="font-semibold w-full bg-transparent
            outline-none ml-4 mr-auto text-gray-400 dark:text-gray-400
            cursor-text placeholder-gray-500"/>
            </div>
        </div>
    )
}