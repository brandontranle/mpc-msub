import img from "../../../assets/images/trio_logo.webp";
import mpclogo from "../../../assets/images/mpc-logo.webp";

export const Footer = () => {
    return (
        <section className="flex pb-20 items-center justify-between p-5 lg:px-0">
            <div className="flex flex-col">
                <span className="mb-5">
                    <img src={img} alt="logo" className="w-[100px]" />
                    <p  className="font-bold text-xs text-primary-red">(831) 646-4090</p>
                    <p className="font-bold text-xs">
                        980 Fremont St, SC 123
                        <br />
                        Monterey, CA 93940
                    </p>
                    <p className="font-bold text-xs">
                        Monday - Thursday 9 am - 2 pm
                    </p>
                    <p className="font-bold text-xs">
                        Friday 9 am - 1 pm
                    </p>
                </span>
                <p className="text-tertiary font-bold text-xs">ASSOCIATED WITH</p>
                <img src={mpclogo} alt="mpc-logo" className="w-[200px]" />
            </div>
            <div className="grid grid-cols-2 gap-10 h-full">
                <div className="flex flex-col gap-4">
                    <h3 className="text-md font-bold text-primary">Useful Links</h3>
                    <a href="#" className="text-sm text-tertiary hover:underline  hover:text-hoverTertiary font-bold">Contact</a>
                    <a href="#" className="text-sm text-tertiary hover:underline  hover:text-hoverTertiary font-bold">About Us</a>
                    <a href="#" className="text-sm text-tertiary hover:underline  hover:text-hoverTertiary font-bold">Student Resource</a>
                    <a href="#" className="text-sm text-tertiary hover:text-hoverTertiary hover:underline  font-bold">Parent Resource</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-md font-bold ">Policies</h3>
                    <a href="#" className="text-sm text-tertiary hover:text-hoverTertiary hover:underline  font-bold">Diversity & Inclusion</a>
                    <a href="#" className="text-sm text-tertiary hover:text-hoverTertiary hover:underline  font-bold">Terms of Service</a>
                    <a href="#" className="text-sm text-tertiary hover:text-hoverTertiary hover:underline  font-bold">Privacy Policy</a>
                    <a href="#" className="text-sm text-tertiary hover:text-hoverTertiary hover:underline font-bold">Data Usage Policy</a>
                </div>
            </div>
        </section>
    );
};
