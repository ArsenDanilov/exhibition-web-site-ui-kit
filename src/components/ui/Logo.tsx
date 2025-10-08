import wfConnectLogo  from '@/assets/wfconnect.svg'
import { Image } from './Image';
import { Link } from './Link';

interface LogoProps {
    className?: string
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <div className={`flex items-center ${className}`}>
            <Link href="/">
                <Image src={wfConnectLogo} alt="WorldFood Connect"/>
            </Link>
        </div>
    )
}