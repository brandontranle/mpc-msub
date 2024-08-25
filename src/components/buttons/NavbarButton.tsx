import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

interface NavbarButtonProps {
  text: string;
  menuItems?: { label: string; link: string }[];
}

export const NavbarButton: React.FC<NavbarButtonProps> = ({ text, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (menuItems && menuItems.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`
          relative text-gray-900 text-base py-0 h-10
          hover:no-underline focus:no-underline
          after:content-[''] after:absolute after:w-full after:h-0.5 after:-bottom-0.5 after:left-0
          after:bg-primary after:transition-all after:duration-300 after:ease-in-out
          ${isOpen ? 'after:visible after:scale-x-100' : 'after:invisible after:scale-x-0'}
          hover:after:visible hover:after:scale-x-100 focus:after:visible focus:after:scale-x-100
        `}
      >
        <span className="flex items-center justify-center">
          {text}
          {menuItems && (
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              className="ml-1"
            />
          )}
        </span>
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <div
          ref={menuRef}
          className="absolute z-10 mt-2 w-40 origin-top-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          style={{
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {menuItems?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};