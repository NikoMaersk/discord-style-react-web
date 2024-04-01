'use client';

import { AtSign, Bell, Download, Hash, HelpCircle, Pin, Search, Users } from "lucide-react";
import { Button } from "../components/button";
import React, { useRef, useState } from 'react';

export default function ChatTopbar({ group }: { group: string }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputFocused, setInputFocused] = useState(false)

    return (
        <div className="flex flex-row max-h-screen justify-between">
            <div className="relative flex-row items-center px-5 gap-1 border-r border-r-gray-500 my-2 hidden md:flex">
                <div>
                    <Hash className="stroke-gray-500" />
                </div>
                <div className="text-xl font-semibold text-gray-400 text-nowrap">{group}</div>
            </div>
            <div className="flex justify-end items-center w-full gap-2">
                <div className="flex items-center">
                    <Button>
                        <Bell className="stroke-gray-400" />
                    </Button>
                    <Button>
                        <Pin className="stroke-gray-400" />
                    </Button>
                    <Button>
                        <Users className="stroke-gray-400" />
                    </Button>
                </div>
                <form className="flex items-center my-3 shadow-sm">
                    <div className="flex h-8">
                        <input
                            ref={inputRef}
                            type="search"
                            placeholder="Search"
                            className={`pl-2 text-gray-400 font-medium
                    shadow-inner text-lg rounded-l-xl
                    focus:border-blue-500 outline-none bg-gray-900 transition-all duration-300 ease-in-out ${inputFocused ? " w-64" : " w-24"}`}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    />
                        <Button
                            variant="ghost"
                            className="rounded-r-xl h-8 rounded-l-none outline-none bg-gray-900 cursor-text"
                            onClick={(e) => {
                                e.preventDefault();
                                inputRef && inputRef.current?.focus()
                            }}>
                            <Search className="stroke-gray-400" />
                        </Button>
                    </div>
                </form>
                <div className="flex">
                    <Button>
                        <Download className="stroke-gray-400" />
                    </Button>
                    <Button>
                        <AtSign className="stroke-gray-400" />
                    </Button>
                    <Button>
                        <HelpCircle className="stroke-gray-400" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
