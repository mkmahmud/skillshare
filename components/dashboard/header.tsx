"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function DashboardHeader() {
    return (
        <div className=" sticky top-0 z-50 flex h-[60px] items-center justify-between px-4  p-2">
            <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                    <Image src="/assets/logo.png" width={50} height={50} alt="star logo" />
                    <span className=" font-bold">SkillShare</span>
                </Link>
            </div>

            {/* Menus */}
            <div>
                <ul>
                    <li className="inline-block mr-4">
                        <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
                            Dashboard
                        </Link>
                    </li>
                    <li className="inline-block mr-4">
                        <Link href="/dashboard/courses" className="text-sm font-semibold leading-6 text-gray-900">
                            Messages
                        </Link>
                        <span className="bg-gray-200 text-sm mx-2 px-2">2</span>
                    </li>

                </ul>
            </div>
            {/* Profile */}
            <div className="relative group">
                <Image
                    src="/assets/profile.avif"
                    width={40}
                    height={40}
                    alt="profile"
                    className="rounded-full cursor-pointer"
                />
                <div className="absolute right-0 mt-0 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity z-50">
                    <ul>

                        <li onClick={() => signOut()} className="cursor-pointer">
                            <button className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100">

                                Logout
                            </button>

                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}