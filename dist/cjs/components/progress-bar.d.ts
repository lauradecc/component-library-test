import { FC } from 'react';
interface ProgressStep {
    number: number;
    text: string;
}
interface ProgressBarProps {
    steps: ProgressStep[];
    currentStep: number;
    setIsCompleted: (isCompleted: boolean) => void;
}
export declare const ProgressBar: FC<ProgressBarProps>;
export {};
