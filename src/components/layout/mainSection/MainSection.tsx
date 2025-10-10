import { HelpfullWidgets } from "@/components/cards/helpfullWidgets/HelpfullWidgets"
import { LatestNews } from "@/components/cards/latestNews/LatestNews"

export const MainSection = () => {
    return (
        <main className="mb-5 sm:p-7 lg:px-10 lg:py-12 flex flex-col sm:flex-row gap-8 sm:!bg-white rounded-3xl">
            <LatestNews {...LatestNews.schema.getDefaultProps()} />
            <HelpfullWidgets />
        </main>
    )
}