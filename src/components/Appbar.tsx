import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import Profile from "./Profile";
import { ShinyHeading } from "./ui/shiny-head";

export default function Appbar() {
    return (
        <header className="w-full  mt-3 max-sm:mt-7 rounded-lg px-8 max-sm:px-4">
            <nav className="w-full flex items-center justify-between">
                {/* <ShinyHeading className=" text-black dark:text-white"> */}
                    <Link href="/" className={`font-extrabold text-xl max-sm:text-lg tracking-tight`}>
                        Tweet.AI
                    </Link>
                {/* </ShinyHeading> */}

                <div className="flex items-center gap-4">
                    <ThemeToggleButton />
                    <Profile />
                </div>
            </nav>
        </header>
    )
}