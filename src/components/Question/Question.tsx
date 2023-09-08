import {QuestionInt} from "../../pages/Question/Question.int";
import React from "react";

type QuestionProps = {
    question: QuestionInt;
}

const Question: React.FC<QuestionProps> = ({question}) => {
    return (
        <article>
            Question
        </article>
    );
}
