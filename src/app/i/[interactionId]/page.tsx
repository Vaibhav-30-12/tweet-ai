import Utility from "@/app/history/components/Utility";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";
import { HistoryType } from "@/types/HistoryType";
import { InteractionPageProps } from "@/types/InteractionPageProps";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { ShinyButton } from "@/components/ui/shiny-button";
import { ShinyHeading } from "@/components/ui/shiny-head";

export default async function InteractionPage({ params }: InteractionPageProps) {
    const { interactionId } = await params;
    const session = await getServerSession(authOptions)

    if (!session?.user) return redirect('/')

    const interaction: HistoryType | null = await prisma.interaction.findUnique({
        where: {
            id: interactionId
        }
    })

    if (!interaction) return redirect('/')

   return (
  <div className="flex flex-col items-center w-full">
    {/* Heading */}
    <ShinyHeading>
      <h1 className="text-5xl font-semibold text-black text-center mt-10 mb-6 dark:text-gray-200">
      Interaction Details
    </h1>
    </ShinyHeading>
    

    {/* Interaction content below heading */}
    <section className="w-full px-4 sm:px-20 flex justify-center">
      <div className="flex flex-col w-full max-w-4xl space-y-5">
        {/* Prompt Box */}
        <div className="flex justify-end pl-10 sm:pl-40">
          <div className="bg-gray-400/10 rounded-xl px-6 py-4 text-left">
            <p className="text-sm sm:text-base">{interaction.userPrompt}</p>
            <div className="space-x-3 mt-2">
              <span className='text-xs bg-gray-300/10 px-2 py-1 rounded-md'>{interaction.mood}</span>
              <span className='text-xs bg-gray-300/10 px-2 py-1 rounded-md'>{interaction.action}</span>
            </div>
          </div>
        </div>

        {/* AI Response Box */}
        <div className="flex justify-start gap-3">
          <Avatar>
            <AvatarImage src="/p8.png" alt="profile" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <p className="leading-7 text-sm sm:text-base">{interaction.aiResponse}</p>
            <div className="flex justify-end space-x-3 mt-2 mb-2">
              <span className="text-xs bg-gray-100/10 rounded-md px-3 py-1">-ai response</span>
            </div>
            <div className="flex items-center gap-5 mt-1">
              <span className="text-xs">{interaction.createdAt.toDateString()}</span>
              <Utility aiResponse={interaction.aiResponse} id={interaction.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}