import {Routes} from "./route.int";
import {NORMAL_QUESTIONS, POS_TRAINER_QUESTIONS, QUESTIONS, REGISTER, TRAINER_QUESTIONS} from "../uutils";
import {Register} from "../pages/Register/Register";
import {QuestionPage} from "../pages/Question/QuestionPage";
import {TrainerQuestions} from "../pages/TrainerQuestions/TrainerQuestions";
import {PosTrainerQuestions} from "../pages/PosTrainerQuestions/PosTrainerQuestions";
import {NormalQuestions} from "../pages/NormalQuestion/NormalQuestions";

export const routes: Routes = [
    {
        path: REGISTER,
        Component: Register
    },
    {
        path: QUESTIONS,
        Component: QuestionPage
    },
    {
        path: TRAINER_QUESTIONS,
        Component: TrainerQuestions
    },
    {
        path: POS_TRAINER_QUESTIONS,
        Component: PosTrainerQuestions
    },
    {
        path: NORMAL_QUESTIONS,
        Component: NormalQuestions
    },
]
