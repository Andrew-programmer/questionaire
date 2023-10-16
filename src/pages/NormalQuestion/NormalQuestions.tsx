import React, {useContext, useEffect, useState} from "react";
import {Questions, QuestionType} from "../../http";
import {Question} from "../../components/Question/Question";
import {Context} from "../../App";

type NormalQuestionsProps = {};
type StateType = QuestionType[];

export const NormalQuestions: React.FC<NormalQuestionsProps> = ({}) => {
    const [questions, setQuestions] = useState<StateType>([
        {
            answers: [
                " 9rUzg6okfvTkRvKBklnV",
                "Pjkp9BJ6ZZONDUG5vrGO"
            ],
            pl: "Szukasz coacha lub planujesz kontynuować to samodzielnie?",
            eng: "Are you looking for a coach or plan to continue doing it yourself?",
            type: "radio",
            id: "HGfNiPo0FlCsuFhSqPkM"
        }
    ]);
    const {lang} = useContext(Context);

    const fetchQuestions = async () => {
        return await Questions.getNormalQuestions();
    };

    // useEffect(() => {
    //     fetchQuestions().then(data => {
    //         setQuestions(data);
    //         console.log(data);
    //     });
    // }, []);



    return (
        <>
            {
                questions.map((question: QuestionType) => {
                    return <Question key={question.id} id={question.id} title={question[lang]} type={question.type} answers={question.answers}/>
                })
            }
        </>
    );
}
