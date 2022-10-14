import { LogoIcon } from "../icons/icons"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate ();
    return (
        <div className="bg-gray-800 text-white h-14 flex items-center">
            <div className="wrapper-container">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
                   <LogoIcon />
                   <p className="font-semibold">
                    <span className="text-yellow-500">C</span>rypto<span className="text-yellow-500">U</span>pdate<span className="text-red-500"> - BREAKING NEWS : CRIZA ENERGETICA DISTRUGE PIATA CRYPTO</span><span className="text-blue-500"> : CIPRIAN VARSA LA FIECARE MINUT O LACRIMA</span></p>
                </div>
               
            </div>
        </div>
    )
}

export default Navbar