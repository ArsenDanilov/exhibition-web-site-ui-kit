import wfConnectLogo from '@/assets/wfconnect.svg'
import wfConnectLogoMobile from '@/assets/wfconnect_mobile.svg'
import { Image } from './Image';
import { Link } from './Link';

interface LogoProps {
    className?: string
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <div className={`flex items-center ${className}`}>
            <Link href="/">
                <Image src={wfConnectLogo} alt="WorldFood Connect" className='hidden lg:block'/>
                <Image src={wfConnectLogoMobile} alt="WorldFood Connect" className='block lg:hidden'/>
            </Link>
        </div>
    )
}