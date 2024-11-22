import QUESTIONS from "../questions.js";
import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if(!answers.current){
        answers.current = [...answers];
        answers.current.sort((a, b) => Math.random() - 0.5);
    }

    return <ul id="answers">
        {answers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClasses = '';

            if (answerState === 'answered' && isSelected) {
                cssClasses = 'selected';
            }

            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                cssClasses = answerState;
            }
            return <li key={answer} className="answer">
                <button onClick={() => onSelect(answer)}
                        className={cssClasses}>
                    {answer}
                </button>
            </li>;
        })}
    </ul>;
}