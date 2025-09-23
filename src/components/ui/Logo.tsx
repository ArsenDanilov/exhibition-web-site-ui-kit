import logoSvg from '../../../public/wfconnect.svg';
import { Image } from './Image';
import { Link } from './Link';

export const Logo = () => {
    return (
        <div className="flex items-center">
            <Link href="/">
                <Image src={logoSvg} alt="WorldFood Connect"/>
            </Link>
        </div>
    )
}