import {Banner} from "../components/home/Banner";
import { FeedbackReel } from "../components/home/Feedback/FeedbackReel";
import { ContentBox } from "../components/home/ContentBox";
import { homeContents } from "../constants";
import { FAQ } from "../components/home/FAQ/FAQ";

export const Home = () => {
 return (
    <div className="bg-white h-full flex flex-col">
        <Banner />
        
        <FeedbackReel/>
        {homeContents.map((content, index) => (
            <span className="mb-20">
            <ContentBox key={index} flip={content.flip} title={content.title} text={content.text} img={content.img}/>
            </span>
        ))}
        <FAQ/>


    </div>
 )
}