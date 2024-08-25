import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FAQDropdownProps } from "../../../constants";
import { useRef, useEffect, useState } from 'react';

export const FAQDropdown = ({ question, answer, isOpen, onClick }: FAQDropdownProps) => {
    const [contentHeight, setContentHeight] = useState<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="border-b-2 w-full">
            <div
                className="flex justify-between items-center pt-5 pb-3 cursor-pointer hover:underline"
                onClick={onClick}
            >
                <h2 className="text-md font-bold">{question}</h2>
                <span>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </span>
            </div>
            <div
                ref={contentRef}
                className={`faq-content transition-all duration-300 ease-in-out ${isOpen ? 'open' : ''}`}
                style={{ maxHeight: isOpen ? `${contentHeight}px` : '0' }}
            >
                <p className="pt-0 pb-5 pl-0">{answer}</p>
            </div>
        </div>
    );
};
