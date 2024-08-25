import { Fragment } from "react";

export const ContentBox = ({flip, title, text, img} : {flip: boolean, title: string, text: string, img: string}) => {
    return (
        <section className="flex p-5 lg:p-10 relative border-2 mb-5 rounded-md">
            {flip ? (
                <Fragment>
                 <div className="w-1/2">
                     <img src={img} alt="msub-img" className="w-full h-full object-cover rounded border-2 "/>
                </div>
                <div className="flex flex-col items-center w-1/2 text-right justify-center lg:pl-20">
                    <h2 className="font-bold text-2xl text-right w-full mb-5">{title}</h2>
                    <p className="text-sm text-right w-full">{text}</p>
                 </div>
                 </Fragment>
            ) : (
                <Fragment>
                <div className="flex flex-col items-center w-1/2 pr-20 justify-center">
                    <h2 className="font-bold text-2xl w-full mb-5">{title}</h2>
                    <p className="text-sm w-full">{text}</p>
                 </div>
                 <div className="w-1/2">
                     <img src={img} alt="msub-img" className="w-full h-full object-cover rounded border-2 "/>
                </div>
                 </Fragment>

            )}
        </section>
    );
}