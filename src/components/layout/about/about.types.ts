export interface AboutData {
    title: string,
    description: string,
    banner: {
        img: string,
        alt: string
    }
}

export type AboutBannerProps = AboutData['banner']