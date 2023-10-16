import {QuestionInt} from "../../pages/Question/Question.int";
import React, {useContext, useEffect, useState} from "react";
import {Wrapper} from "../../HOCs/Wrapper.hoc";
import {FormControlLabel, IconButton, Radio, RadioGroup, Button, Snackbar, TextField} from "@mui/material";
import {Context} from "../../App";
import {Answer, getAnswersForQuestion} from "../../http";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate} from "react-router-dom";
import {NORMAL_QUESTIONS, POS_TRAINER_QUESTIONS, TRAINER_QUESTIONS} from "../../uutils";
import CloseIcon from '@mui/icons-material/Close';

type QuestionProps = QuestionInt;
type StateType = Answer[];

const Heading = styled.h1`
  width: 100%;
  text-align: center;
`

const NavButtonGroup = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-content: center;
`

export const Question: React.FC<QuestionProps> = ({title, type, id, answers}) => {
    const {lang} = useContext(Context);
    const [answersObj, setAnswers] = useState<StateType>([]);
    const [value, setValue] = useState('Trainer');
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const fetchAnswers = async () => {
        console.log(answers);
        const a =  await getAnswersForQuestion(answers);
        return a;
    }

    const handleNextClick = () => {
        switch (value) {
            case 'acmDWu591YMD6G5YKvwl':
                navigateToTrainerPage();
                break;
            case 'AfxbplhRpciFUNqgajkS':
                navigateToAmateurPage();
                break;
            case 'bsK0KHcsVeS7PEpPbcGQ':
                navigateToPosTrainerPage();
                break;
        }
    };

    const handlePrevClick = () => {
        setOpen(true);
    };

    const navigateToTrainerPage = () => {
        navigate(TRAINER_QUESTIONS)
    };

    const navigateToAmateurPage = () => {
        navigate(NORMAL_QUESTIONS)
    };

    const navigateToPosTrainerPage = () => {
        navigate(POS_TRAINER_QUESTIONS)
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchAnswers().then(data => {
            setAnswers(data);
        });
    }, []);


    return (
        <>
            <Wrapper>
                <Heading>
                    {title}
                </Heading>
                {
                    type === 'radio' ?
                        <RadioGroup onChange={(event) => setValue(event.target.value)}>
                            {
                                answersObj.map(answer => {
                                    return <FormControlLabel key={answer.id} control={<Radio/>} label={answer[lang]} value={answer.id}/>
                                })
                            }
                        </RadioGroup>
                        :
                        <TextField variant={'standard'}/>
                }
                <NavButtonGroup>
                    <IconButton onClick={handlePrevClick}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <IconButton onClick={handleNextClick}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </NavButtonGroup>
            </Wrapper>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="You can't go back"
            />
        </>
    );
}
