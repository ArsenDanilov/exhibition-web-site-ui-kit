import { HelpfullWidgets } from "@/components/cards/helpfullWidgets/HelpfullWidgets"
import { LatestNews } from "@/components/cards/latestNews/LatestNews"

export const MainSection = () => {
    return (
        <main className="mb-5 px-10 py-12 flex gap-8 !bg-white rounded-3xl">
            <LatestNews {...LatestNews.schema.getDefaultProps()} />
            <HelpfullWidgets />
        </main>
    )
}