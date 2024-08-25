import {navigations} from "../../../constants";
import { ApplyButton } from "../../buttons/ApplyButton";
import {NavbarButton} from "../../buttons/NavbarButton";

export const NavbarContent = () => {
    return (
        <div className="flex w-full items-center justify-end gap-5 ml-auto font-bold">
            {navigations.map((nav, index) => (
                <NavbarButton
                    key={index}
                    text={nav.title}
                    menuItems={nav.menuItems}
                />
            ))}
            <ApplyButton/>
        </div>
    )
}