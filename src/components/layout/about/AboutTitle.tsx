import { Text } from "../../ui/Text"

export const AboutTitle = ({ children }: {children: React.ReactNode}) => {
    return (
        <Text tag="h1" textStyle="5xl" className="font-bold leading-[114.99%] mb-4 w-3/4">{children}</Text>
    )
}