export type Feedback = {
    name: string;
    major: string;
    university: string;
    feedback: string;
    avatar: string;
}



export interface FeedbackCardProps {
    feedback: Feedback;
}
