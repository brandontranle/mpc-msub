
export const FeedbackCard = ({img} : {img: string}) => {
    return (
        <blockquote className="bg-white p-4 rounded-lg shadow-md w-[450px] flex flex-col border">
            <img src={img} alt="feedback" className="border border-[#d6303b] rounded-md"/>
        </blockquote>
    )
}