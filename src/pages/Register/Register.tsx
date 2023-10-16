import {useNavigate} from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Wrapper } from "../../HOCs/Wrapper.hoc";
import {QUESTIONS} from "../../uutils";
import {useContext} from "react";
import {Context} from "../../App";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export const Register = () => {
    // @ts-ignore
    const {auth} = useContext(Context);
    const navigate = useNavigate();


    const onRegisterClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const {user} = await signInWithPopup(auth, provider);
        navigateToQuestion();
    }

    const navigateToQuestion = () => {
        navigate(QUESTIONS);
    };


    return (
        <>
            <Wrapper>
                {/*<TextField variant={'standard'} label={'Name and Surname'} placeholder={'Freddie Fazber'} sx={{*/}
                {/*    width: '100%',*/}
                {/*    marginY: '1rem'*/}
                {/*}}/>*/}
                {/*<TextField variant={'standard'} label={'Email address'} placeholder={'freddie.fazber@gmail.com'} sx={{*/}
                {/*    width: '100%',*/}
                {/*    marginY: '1rem'*/}
                {/*}}/>*/}
                <Button onClick={onRegisterClick}>
                    REGISTER
                </Button>
            </Wrapper>
        </>
    );
}
