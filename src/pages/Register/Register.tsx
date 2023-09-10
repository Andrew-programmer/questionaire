import {useNavigate} from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Wrapper } from "../../HOCs/Wrapper.hoc";
import {QUESTIONS} from "../../uutils";
import { LabelInput } from "../../components/Register/LabelInput";
// import { getMainQuestion } from "../../http";

export const Register = () => {
    const navigate = useNavigate();

    const navigateToQuestion = () => {
        navigate(QUESTIONS);
    };

    // getMainQuestion();


    return (
        <>
            <Wrapper>
                <h1>REGISTER</h1>
                <LabelInput placeholder={"Freddie Fazber"} props={{type: 'text'}}>
                    Name and Surname
                </LabelInput>
                <LabelInput placeholder="freddie.fazber@gmail.com" props={{type: 'text'}}>
                    Email address
                </LabelInput>
                <Button onClick={navigateToQuestion}>
                    START
                </Button>
            </Wrapper>
        </>
    );
}
