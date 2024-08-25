import {useState} from 'react';
import img from "../../../assets/images/trio_logo.webp"
import {Dropdown} from "./Dropdown";
import {NavbarContent} from "./NavbarContent";

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {  
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const isMobile = window.innerWidth < 768;   

    return (
        <nav className="fixed bg-transparent text-black left-0 right-0 w-full z-50 py-5"  >
            <div className="xl:px-64 flex items-center">
            <a href="/">
            <img src={img}
                className="w-[140px] mr-auto rounded border-2 shadow-sm"
                alt="msub-logo"
            />
            </a>
            {isMobile ? (
                <Dropdown 
                    anchorEl={anchorEl}
                    open={open}
                    handleClose={handleClose}
                    handleMenu={handleMenu}
                    />
            ) : (
                <NavbarContent  />
            )}
            </div>
        </nav>
    )


}