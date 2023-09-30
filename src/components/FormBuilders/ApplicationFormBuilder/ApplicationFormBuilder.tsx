import { useEffect, useState } from "react";
import {
  fetchApplicationForm,
  putApplicationForm,
} from "../../../services/services";
import PersonalInformationSnippet from "../FormBuilderSnippets/PersonalInformationSnippet/PersonalInformationSnippet";
import ProfileSnippet from "../FormBuilderSnippets/ProfileSnippet/ProfileSnippet";
import CustomQuestionSnippet from "../FormBuilderSnippets/CustomQuestionsSnippet/CustomQuestionSnippet";
import { Button, message } from "antd";
import CoverImageSnippet from "../FormBuilderSnippets/UploadImageSnippet.tsx/CoverImageSnippet";

export default function ApplicationFormBuilder() {
  const [applicationFormData, setApplicationFormData] = useState(null as any);

  useEffect(() => {
    fetchApplicationForm().then((data) => setApplicationFormData(data));
  }, []);

  const [messageApi, contextHolder] = message.useMessage();

  function handleAttributeChange(key: string, newData: any) {
    setApplicationFormData({
      ...applicationFormData,
      attributes: {
        ...applicationFormData.attributes,
        [key]: newData,
      },
    });
  }

  function handleSubmit() {
    putApplicationForm({ data: applicationFormData }).then((response) => {
      if (response?.status === 204)
        messageApi.success("Form saved successfully");
      else messageApi.error("Error saving form");
    });
  }

  return (
    applicationFormData && (
      <div className="flex flex-col gap-14 p-10">
        {contextHolder}
        <CoverImageSnippet />

        <PersonalInformationSnippet
          data={applicationFormData.attributes.personalInformation}
          onChange={(newData) =>
            handleAttributeChange("personalInformation", newData)
          }
        />

        <ProfileSnippet
          data={applicationFormData.attributes.profile}
          onChange={(newData) => handleAttributeChange("profile", newData)}
        />

        <CustomQuestionSnippet
          data={applicationFormData.attributes}
          onChange={(newData) =>
            setApplicationFormData({
              ...applicationFormData,
              attributes: newData,
            })
          }
        />

        <div>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    )
  );
}
