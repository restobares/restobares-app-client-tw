import { useNavigate } from "react-router-dom";

export default function BackButton() {
    let navigate = useNavigate();
    return (
        <>
          <button className="shadow-lg bg-pink-600 hover:bg-pink-800 text-white font-bold text-lg my-2 mx-2  px-2 rounded" onClick={() => navigate(-1)}>Back</button>
        </>
    );
};