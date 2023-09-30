import FormBuilderSnippetBase from "../FormBuilderSnippetBase/FormBuilderSnippetBase";
import PersonalItem from "../FormBuilderItems/PersonalItem/PersonalItem";
import CustomQuestionItem from "../FormBuilderItems/CustomQuestionItem/CustomQuestionItem";
import {
  handleQuestionAdd,
  handleQuestionDelete,
  handleQuestionSave,
} from "../../../../utils/utils";

type PersonalInformationSnippetProps = {
  data: any;
  onChange: (data: any) => void;
};

export default function PersonalInformationSnippet(
  props: PersonalInformationSnippetProps
) {
  const { data, onChange } = props;

  const handleDataItemChange = (key: string) => {
    return (newData: any) => {
      onChange({ ...data, [key]: newData });
    };
  };

  return (
    <FormBuilderSnippetBase
      title="Personal Information"
      addQuestion
      onQuestionAdd={(question) =>
        handleQuestionAdd(data, question, "personalQuestions", onChange)
      }
    >
      {[
        <PersonalItem label="First Name" />,
        <PersonalItem label="Last Name" />,
        <PersonalItem label="Email" />,
        <PersonalItem
          data={data.phoneNumber}
          label={
            <div>
              Phone
              <span className="font-light text-sm"> (without dial code)</span>
            </div>
          }
          onChange={handleDataItemChange("phoneNumber")}
        />,
        <PersonalItem
          label="Nationality"
          data={data.nationality}
          onChange={handleDataItemChange("nationality")}
        />,
        <PersonalItem
          label="Current Residence"
          data={data.currentResidence}
          onChange={handleDataItemChange("currentResidence")}
        />,
        <PersonalItem
          label="ID Number"
          data={data.idNumber}
          onChange={handleDataItemChange("idNumber")}
        />,
        <PersonalItem
          label="Date of Birth"
          data={data.dateOfBirth}
          onChange={handleDataItemChange("dateOfBirth")}
        />,
        <PersonalItem
          label="Gender"
          data={data.gender}
          onChange={handleDataItemChange("gender")}
        />,
        ...data.personalQuestions.map((question: any) => (
          <CustomQuestionItem
            key={question.id}
            mode="preview"
            question={question}
            onSave={(question) =>
              handleQuestionSave(data, question, "personalQuestions", onChange)
            }
            onDelete={(question) =>
              handleQuestionDelete(
                data,
                question,
                "personalQuestions",
                onChange
              )
            }
          />
        )),
      ]}
    </FormBuilderSnippetBase>
  );
}
