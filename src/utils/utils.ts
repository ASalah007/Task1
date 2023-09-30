import { Question } from "../components/FormBuilders/FormBuilderSnippets/FormBuilderItems/CustomQuestionItem/CustomQuestionItem";

export function handleQuestionSave(
  attribute: any,
  question: Question,
  questionsKey: string,
  onChange: Function
) {
  const allQuestions = attribute[questionsKey];
  const idx = allQuestions.findIndex((q: any) => q.id === question.id);
  allQuestions[idx] = question;
  onChange({
    ...attribute,
    [questionsKey]: allQuestions,
  });
}

export const handleQuestionDelete = (
  attribute: any,
  question: Question,
  questionsKey: string,
  onChange: Function
) => {
  const allQuestions = attribute[questionsKey];
  const idx = allQuestions.findIndex((q: any) => q.id === question.id);
  if (idx === -1) return;

  onChange({
    ...attribute,
    [questionsKey]: [
      ...allQuestions.slice(0, idx),
      ...allQuestions.slice(idx + 1),
    ],
  });
};

export const handleQuestionAdd = (
  attribute: any,
  question: Question,
  questionsKey: string,
  onChange: Function
) => {
  onChange({
    ...attribute,
    [questionsKey]: [...attribute[questionsKey], question],
  });
};
