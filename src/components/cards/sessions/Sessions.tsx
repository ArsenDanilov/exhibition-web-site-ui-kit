import { SessionCard } from "./SessionCard"
import { sessionsData } from "./sessions.data"
import { Text } from "@/components/ui/Text";

export const Sessions = () => {
    return (
        <div className="px-7 py-5 rounded-3xl border border-black30">
            <Text tag="h3" textStyle="2xl" className="mb-5 font-semibold">Sessions</Text>
            {sessionsData.map((data, index) => (
                <SessionCard key={index} title={data.title} description={data.description} postedAt={data.postedAt} tags={data.tags} />
            ))}
        </div>
    )
}