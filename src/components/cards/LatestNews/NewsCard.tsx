import { Image } from "../../ui/Image"
import { Text } from "../../ui/Text"
import likeIcon from "@/assets/likeIcon.svg"
import commentIcon from "@/assets/commentIcon.svg"
import { type INewsData } from "./news.data"

export const NewsCard = ({ username, avatar, postedAt, text, images, likes, comments }: INewsData) => {
    return (
        <div className="px-4 py-5 rounded-3xl mb-5 border border-black30">
            <div className="flex gap-3 items-center mb-4">
                <div>
                    <Image src={avatar} alt="user avatar"/>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <Text textStyle="lg" className="font-bold">{username}</Text>
                    <Text className="text-black70 font-extralight">{postedAt}</Text>
                </div>
            </div>
            <Text>{text}</Text>
            <button className="font-semibold text-primary mb-4">Показать больше</button>
            <Image src={images} alt="image from post" className="mb-4"/>
            <div className="flex gap-9 items-center">
                <div className="flex gap-2 items-center">
                    <Image src={likeIcon} />
                    <Text tag="span" className="text-darkGrey">{likes}</Text>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src={commentIcon} />
                    <Text tag="span" className="text-darkGrey">{comments}</Text>
                </div>
            </div>
        </div>
    )
}