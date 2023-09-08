import {useNavigate} from "react-router-dom";
import {QUESTIONS} from "../../uutils";

export const Register = () => {
    const navigate = useNavigate();

    const navigateToQuestion = () => {
        navigate(QUESTIONS);
    };

    return (
        <section>
            REGISTER

            <span onClick={navigateToQuestion}>
                question
            </span>
        </section>
    );
}
