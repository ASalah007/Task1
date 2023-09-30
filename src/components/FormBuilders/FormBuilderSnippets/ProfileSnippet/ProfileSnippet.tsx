import FormBuilderSnippetBase from "../FormBuilderSnippetBase/FormBuilderSnippetBase";
import ProfileItem from "../FormBuilderItems/ProfileItem/ProfileItem";
import CustomQuestionItem from "../FormBuilderItems/CustomQuestionItem/CustomQuestionItem";
import {
  handleQuestionAdd,
  handleQuestionDelete,
  handleQuestionSave,
} from "../../../../utils/utils";

type ProfileSnippetProps = {
  data: any;
  onChange: (data: any) => void;
};

export default function ProfileSnippet(props: ProfileSnippetProps) {
  const { data } = props;

  function handleChange(key: string, newData: any) {
    props.onChange({ ...data, [key]: newData });
  }

  return (
    <FormBuilderSnippetBase
      title="Profile"
      addQuestion
      onQuestionAdd={(question) =>
        handleQuestionAdd(data, question, "profileQuestions", props.onChange)
      }
    >
      {[
        <ProfileItem
          label="Education"
          data={data.education}
          onChange={(newData) => handleChange("education", newData)}
        />,
        <ProfileItem
          label="Experience"
          data={data.experience}
          onChange={(newData) => handleChange("experience", newData)}
        />,
        <ProfileItem
          label="Resume"
          data={data.resume}
          onChange={(newData) => handleChange("resume", newData)}
        />,
        ...data.profileQuestions.map((question: any) => (
          <CustomQuestionItem
            mode="preview"
            question={question}
            onDelete={(question) => {
              handleQuestionDelete(
                data,
                question,
                "profileQuestions",
                props.onChange
              );
            }}
            onSave={(newQuestion: any) => {
              handleQuestionSave(
                data,
                newQuestion,
                "profileQuestions",
                props.onChange
              );
            }}
          />
        )),
      ]}
    </FormBuilderSnippetBase>
  );
}
