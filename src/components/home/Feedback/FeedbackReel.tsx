import { FeedbackCard } from "./FeedbackCard";
import { feedbacks } from "../../../constants";

export const FeedbackReel = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-20 relative side-mask">
      <span className="font-bold text-sm mb-5">WHERE OUR ALUMNI ARE</span>
      <div className="w-max flex flex-row gap-5 flex-nowrap overflow-hidden animate-scroll">
        {[...feedbacks, ...feedbacks].map((feedback, index) => (
          <FeedbackCard key={index} img={feedback.path} />
        ))}
      </div>
    </section>
  );
};
