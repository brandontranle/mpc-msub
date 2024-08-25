import { useNavigate } from "react-router-dom"

export const ApplyButton = () => {
    const navigate = useNavigate();
    return (
        <button 
            onClick={() => navigate("/apply")}
            className={`bg-primary hover:bg-primaryHover text-secondary p-2 shadow-sm rounded font-bold`}>
                APPLY NOW
            </button>
    )
}