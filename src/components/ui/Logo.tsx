import logoSvg from '../../../public/wfconnect.svg';

export const Logo = () => {
    return (
        <div className="flex items-center">
            <a href="/">
                <img src={logoSvg} alt="WorldFood Connect"/>
            </a>
        </div>
    )
}