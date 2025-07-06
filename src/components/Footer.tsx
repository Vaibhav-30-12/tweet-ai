"use client"

import Link from "next/link";
import fontRal from "@/app/font";
import useResult from "@/hooks/useResult";

export default function Footer() {
    const { result } = useResult()
    return (
        <footer className={`mb-4 mt-8 w-full flex flex-col gap-2 items-center transition-all duration-300 ${result ? 'hidden' : ''}`}>
            <div>
                <ul className="flex gap-8 items-center dark:text-gray-400 text-sm max-sm:text-xs">
                    <li>
                        <Link href="https://x.com/Vaibhav14693425">
                            Twitter
                        </Link>
                    </li>

                    <li className="list-disc">
                        <Link href="https://www.instagram.com/vaibhavvvv_002">
                            Developer
                        </Link>
                    </li>
                    <li className="list-disc">
                        <Link href="https://github.com/Vaibhav-30-12">
                            GitHub
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`${fontRal} text-xs text-gray-600`}>© 2025 Tweet.AI from Vaibhav</div>
        </footer>
    )
}