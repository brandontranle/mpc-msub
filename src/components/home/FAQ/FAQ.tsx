import {faqs} from "../../../constants";
import {FAQDropdown} from "./FAQ-Dropdown";
import {useState} from "react";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <section className="flex flex-col items-center justify-center pb-20 relative">
            <span className="font-bold text-2xl mb-5">Frequently Asked Questions</span>
            {faqs.map((faq, index) => (
                <FAQDropdown
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
    

            </section>
    )


}