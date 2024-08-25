import { AtomSvg } from '../../assets/svgs/AtomSvg';
import { BrainSvg } from '../../assets/svgs/BrainSvg';
import { DNASvg } from '../../assets/svgs/DnaSvg';
import { ExSvg } from '../../assets/svgs/ExSvg';
import { ApplyButton } from '../buttons/ApplyButton';

export const Banner = () => {
    return (
        <section id="hero" className="max-h-screen lg:max-h-[700px]">
            <div className="absolute inset-0 w-svw h-[200vw] max-h-[2000px] md:max-h-[1000px] lg:max-h-[1050px] ">
                <div className="w-full h-full bg-grid bg-radial-mask">
                    <div className="relative w-full h-[50vw] max-h-[500px] mb-16">
                        <span className="absolute top-[14vw] left-[70vw] rotate-[50deg] ">
                        <AtomSvg/>
                        </span>
                        <span className="absolute top-[20vw] right-[10vw] rotate-[-40deg] ">
                        <BrainSvg/>
                        </span>
                        <span className="absolute top-[14vw] left-[20vw] ">
                        <DNASvg/>
                        </span>
                        <span className="absolute top-[20vw] left-[10vw] rotate-[-40deg] ">
                        <ExSvg/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative gap-5 flex flex-col items-center justify-center min-h-screen px-4 py-16 mt-5">
                <h1 className="font-bold text-5xl text-center">
                    Math-Science Upward Bound
                </h1>
                <p className="text-2xl text-center">
                    Your next step to starting college.
                </p>
                <ApplyButton  />
                
            </div>
        </section>
    )
}