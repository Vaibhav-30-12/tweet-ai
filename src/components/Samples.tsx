'use client';

import useTweet from "@/hooks/useTweet";
import { samples } from "../constants/samples";
import { FiArrowUpRight } from "react-icons/fi";
import useResult from "@/hooks/useResult";

export default function Samples() {
    const { setTweet } = useTweet();
    const { result } = useResult();

    return (
        <section className={`mt-3 pb-4 bg-transparent ${result ? 'hidden' : 'block'}`}>
            <div className="flex gap-5 flex-wrap justify-center">
                {samples.map((sample, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 bg-transparent rounded-full before:bg-opacity-5 backdrop-blur-lg border border-gray-400/50 dark:border-white/20 dark:text-white p-1"
                        onClick={() => setTweet(sample)}
                    >
                        <span className="text-sm font-semibold">
                            {sample}
                        </span>
                        <span>
                            <FiArrowUpRight />
                        </span>
                    </button>
                ))}
            </div>

            {/* Fourth button centered separately below */}
            <div className="mt-4 flex justify-center">
                <button
                    className="flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 bg-transparent rounded-full before:bg-opacity-5 backdrop-blur-lg border border-gray-400/50 dark:border-white/20 dark:text-white p-1"
                    onClick={() => setTweet("Rainy day, steaming tea, and elegant algorithms")}
                >
                    <span className="text-sm font-semibold">
                        Rainy day, steaming tea, and elegant algorithms
                    </span>
                    <span>
                        <FiArrowUpRight />
                    </span>
                </button>
            </div>
        </section>
    );
}
