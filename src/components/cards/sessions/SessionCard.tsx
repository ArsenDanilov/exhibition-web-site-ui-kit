import { Text } from "@/components/ui/Text";
import { formatPostTime } from "@/utils/formatPostTime";
import { Button } from "@/components/ui/Button";
import { type ISessionsData } from "./sessions.data";

export const SessionCard = ({ title, description, postedAt, tags }: ISessionsData) => {
    return (
        <div className="px-4 py-5">
            <Text className="font-semibold mb-2">{title}&nbsp;| <span className="font-normal">{formatPostTime(postedAt)}</span></Text>
            <Text>{description}</Text>
            <button className="text-primary mb-4 font-semibold">Show more</button>
            <div className="flex gap-2 mb-4 flex-wrap">
                {tags && tags.map((tag, index) => (
                    <div key={index} className="bg-lightGrey text-darkGrey rounded-full text-xs px-3 py-[1px] flex justify-center items-center">{tag}</div>
                ))}
            </div>
            <Button size="xs">Attend</Button>
        </div>
    )
}