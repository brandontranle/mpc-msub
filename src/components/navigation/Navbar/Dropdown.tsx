import React, { useState, useEffect } from 'react';
import { navigations } from '../../../constants'; // Ensure this import path is correct

interface DropdownProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
    handleMenu: (value: React.MouseEvent<HTMLElement>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    anchorEl,
    open,
    handleClose,
    handleMenu
}) => {
    // Manage dropdown open state based on external props
    const [isOpen, setIsOpen] = useState(open);

    // Sync internal open state with prop
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    // Handle outside click to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (anchorEl && !anchorEl.contains(event.target as HTMLElement) && isOpen) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [anchorEl, isOpen, handleClose]);

    return (
        <div className="relative">
            <button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleMenu}
            />
            {isOpen && anchorEl && (
                <div className="absolute z-50 w-48 bg-white rounded-md shadow-lg top-full mt-1"
                    style={{ left: anchorEl.getBoundingClientRect().left + window.scrollX, top: anchorEl.getBoundingClientRect().bottom + window.scrollY }}>
                    <ul className="divide-y divide-gray-100">
                        {navigations.map((nav, index) => (
                            <li key={index} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {; handleClose(); }}>
                                {nav.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
