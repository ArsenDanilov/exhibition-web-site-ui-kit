interface ContainerProps {
    children: React.ReactNode,
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="sm:px-4 sm:pt-5 pb-0 bg-grey">
            {children}
        </div>
    )
}