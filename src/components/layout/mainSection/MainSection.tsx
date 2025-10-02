import { HelpfullWidgets } from "@/components/cards/helpfullWidgets/HelpfullWidgets"
import { LatestNews } from "@/components/cards/latestNews/LatestNews"

export const MainSection = () => {
    return (
        <main className="px-10 py-12 flex gap-8">
            <LatestNews />
            <HelpfullWidgets />
        </main>
    )
}