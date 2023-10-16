import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../App";
import {Answer, getAnswersForQuestion, Questions, QuestionType} from "../../http";
import {Question} from "../../components/Question/Question";
import styled from "styled-components";

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
`

type QuestionPageProps = {};


export const QuestionPage: React.FC<QuestionPageProps> = ({}) => {
    const [questions, setQuestion] = useState<QuestionType[]>([]);
    // const [answers, setAnswers] = useState<Answer[]>([]);
    // @ts-ignore
    const {lang} = useContext(Context);

    const fetchQuestion = async () => {
        const fetchedQuestions = await Questions.getMainQuestion();
        setQuestion(fetchedQuestions);
    };
    // const fetchAnswers = async () => {
    //     return await getAnswersForQuestion(answers);
    // }


    useEffect(  () => {
        fetchQuestion();
        // fetchAnswers().then(data => {
        //     setAnswers(data);
        // })
    }, [])

    return (
        <MainSection>
            {
                questions.map((question: QuestionType) => {
                    return <Question key={question.id} id={question.id} title={question[lang]} type={question.type} answers={question.answers}/>
                })
            }
        </MainSection>
    );
}
