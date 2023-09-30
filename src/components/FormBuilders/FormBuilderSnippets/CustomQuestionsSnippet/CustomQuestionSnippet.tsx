import CustomQuestionItem from "../FormBuilderItems/CustomQuestionItem/CustomQuestionItem";
import {
  handleQuestionDelete,
  handleQuestionSave,
} from "../../../../utils/utils";
import FormBuilderSnippetBase from "../FormBuilderSnippetBase/FormBuilderSnippetBase";

type CustomQuestionSnippetProps = {
  data: any;
  onChange: (data: any) => void;
};

export default function CustomQuestionsSnippet(
  props: CustomQuestionSnippetProps
) {
  const { data } = props;
  return (
    <FormBuilderSnippetBase
      title="Additional Questions"
      addQuestion
      onQuestionAdd={(question) =>
        props.onChange({
          ...data,
          customisedQuestions: [...data.customisedQuestions, question],
        })
      }
    >
      {data.customisedQuestions.map((question: any) => (
        <CustomQuestionItem
          mode="preview"
          question={question}
          onDelete={(question) => {
            handleQuestionDelete(
              data,
              question,
              "customisedQuestions",
              props.onChange
            );
          }}
          onSave={(newQuestion: any) => {
            handleQuestionSave(
              data,
              newQuestion,
              "customisedQuestions",
              props.onChange
            );
          }}
        />
      ))}
    </FormBuilderSnippetBase>
  );
}
