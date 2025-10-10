interface ContainerProps {
    children: React.ReactNode,
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="px-4 pt-5 pb-0 bg-grey">
            {children}
        </div>
    )
}