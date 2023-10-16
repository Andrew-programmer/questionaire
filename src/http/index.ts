import { db } from "../db"
import {collection, getDocs, query, onSnapshot} from 'firebase/firestore'

export type QuestionType = {
    answers: string[],
    eng: string,
    pl: string,
    id: string,
    type: "radio" | "text"
};

export interface Questions {
    question: QuestionType;
    normalQuestions: QuestionType[];
    trainerQuestions: QuestionType[];
    posTrainerQuestions: QuestionType[];
    getQuestion: () => QuestionType[];
    getMainQuestion: () => QuestionType[];
    getNormalQuestions: () => QuestionType[];
    getTrainerQuestions: () => QuestionType[];
    getPosTrainerQuestions: () => QuestionType[];
    getAnswersForQuestion: () => Answer[];
}

export type Answer = {
    id: string,
    eng: string,
    pl: string
};

export class Questions {
    constructor(question: QuestionType) {
        this.question = question;

    }

    static getQuestion(collectionName: string) {
        const q = query(collection(db, collectionName));
        let questionsArr: QuestionType[] = [];
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach(doc => {
                // @ts-ignore
                questionsArr.push({...doc.data(),   id: doc.id});
            })
        });

        return questionsArr;
    }

    static async getMainQuestion(){
        return Questions.getQuestion('question');
    }

    static async getNormalQuestions() {
        const q = query(collection(db, 'normalQuestion'));
        let questionArr: QuestionType[] = [];
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach(doc => {
                // @ts-ignore
                questionArr.push({...doc.data(), id: doc.id});
            });
        })

        return questionArr;
    }

    static async getTrainerQuestions() {
        const q = query(collection(db, 'trainerQuestion'));
        let questionArr: QuestionType[] = [];
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach(doc => {
                // @ts-ignore
                questionArr.push({...doc.data(), id: doc.id});
            });
        })

        return questionArr;
    }

    static async getPosTrainerQuestions() {
        const q = query(collection(db, 'posTrainerQuestion'));
        let questionArr: QuestionType[] = [];
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach(doc => {
                // @ts-ignore
                questionArr.push({...doc.data(), id: doc.id});
            });
        })

        return questionArr;
    }
}

export const getAnswersForQuestion = async (questionAnswersId: string[]) => {
    const q = query(collection(db, 'answer'));
    let answersArr: Answer[] = [];
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach(doc => {
            if (questionAnswersId.includes(doc.id)) {

                // @ts-ignore
                answersArr.push({...doc.data(), id: doc.id});
            }
        })
    })

    return answersArr;
}

