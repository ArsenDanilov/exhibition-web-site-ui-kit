import wfConnectLogo  from '@/assets/wfconnect.svg'
import { Image } from './Image';
import { Link } from './Link';

export const Logo = () => {
    return (
        <div className="flex items-center">
            <Link href="/">
                <Image src={wfConnectLogo} alt="WorldFood Connect"/>
            </Link>
        </div>
    )
}