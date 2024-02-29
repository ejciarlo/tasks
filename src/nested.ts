import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpties = questions.filter(
        (question: Question): boolean =>
            !(
                question.body == "" &&
                question.expected == "" &&
                question.options.length == 0
            )
    );
    return nonEmpties;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (foundQuestion === undefined) {
        return null;
    }
    return foundQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filteredQuestions = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return filteredQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((question: Question): string => question.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const justPoints = questions.map(
        (question: Question): number => question.points
    );
    const sum = justPoints.reduce((now, current) => now + current, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    const justPoints = publishedQuestions.map(
        (question: Question): number => question.points
    );
    const sum = justPoints.reduce((now, current) => now + current, 0);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let csv = "id,name,options,points,published";
    for (const question of questions) {
        csv =
            csv +
            "\n" +
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published;
    }
    return csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedQuestions = questions.map(
        (question: Question): Question => ({
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: question.options,
            expected: question.expected,
            points: question.points,
            published: true
        })
    );
    return publishedQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const firstQ = questions[0];
    if (firstQ === undefined) {
        for (const question of questions) {
            if (question === undefined) {
                return false;
            }
        }
        return true;
    }
    const allType = firstQ.type;
    for (const question of questions) {
        if (question.type !== allType) {
            return false;
        }
    }
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestions = [...questions];
    newQuestions.push(makeBlankQuestion(id, name, type));
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuestions = questions.map((question) => {
        return { ...question };
    });
    const targetIndex = newQuestions.findIndex(
        (question) => question.id === targetId
    );
    const targetedQuestion = { ...newQuestions[targetIndex], name: newName };
    newQuestions[targetIndex] = targetedQuestion;
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQuestions = questions.map((question) => {
        return { ...question };
    });
    const targetIndex = newQuestions.findIndex(
        (question) => question.id === targetId
    );
    const targetedQuestion = {
        ...newQuestions[targetIndex],
        type: newQuestionType
    };
    newQuestions[targetIndex] = targetedQuestion;
    if (questions[targetIndex].type === "multiple_choice_question") {
        targetedQuestion.options = [];
    }

    return newQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQuestions = questions.map((question) => {
        return { ...question };
    });
    const targetIndex = newQuestions.findIndex(
        (question) => question.id === targetId
    );
    const targetedQuestion = {
        ...newQuestions[targetIndex]
    };
    newQuestions[targetIndex] = targetedQuestion;
    if (targetOptionIndex === -1) {
        targetedQuestion.options.push(newOption);
    } else {
        targetedQuestion.options[targetOptionIndex] = newOption;
    }
    return newQuestions;
}

function deepCopyQuestion(question: Question): Question {
    return {
        ...question,
        options: [...question.options] // Create a separate copy of options array
    };
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    // Helper function for deep copying a single question
    function deepCopyQuestion(question: Question): Question {
        return {
            ...question,
            options: [...question.options] // Create a separate copy of options array
        };
    }

    const newQuestions = questions.map((question) => deepCopyQuestion(question));

    const targetIndex = newQuestions.findIndex(
        (question) => question.id === targetId
    );

    const newQuestion = {
        ...newQuestions[targetIndex],
        name: "Copy of " + newQuestions[targetIndex].name,
        id: newId
    };

    // Deep copy options array for the duplicated question
    newQuestion.options = [...newQuestions[targetIndex].options];

    newQuestions.splice(targetIndex + 1, 0, newQuestion);

    return newQuestions;
}