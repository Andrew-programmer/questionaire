type Trainer = 'Trainer';
type Amateur = 'Amateur';
type PosTrainer = 'PosTrainer';

export interface QuestionInt {
    id: number;
    title: string;
    type: Trainer | Amateur | PosTrainer;
}

