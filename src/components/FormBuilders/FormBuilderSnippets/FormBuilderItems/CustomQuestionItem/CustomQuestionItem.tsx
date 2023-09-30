import { Button, ConfigProvider, Form, Input, Select } from "antd";
import React from "react";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import YesNoExtras from "./Extras/YesNoExtras";
import MultipleChoiceExtras from "./Extras/MultipleChoiceExtras";
import VideoQuestionExtras from "./Extras/VideoQuestionExtras";

type CustomQuestionItemProps = {
  mode: "preview" | "select";
  question: Question;
  onSave: (question: Question) => void;
  onDelete: (question: Question) => void;
};

export type Question = {
  id: string;
  type: string;
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
};

export default function CustomQuestionItem(props: CustomQuestionItemProps) {
  const [question, setQuestion] = React.useState(props.question);
  const [mode, setMode] = React.useState(props.mode);

  function handleExtrasChange(question: Question) {
    setQuestion(question);
  }

  const renderExtras = (type: string) => {
    return {
      YesNo: <YesNoExtras question={question} onChange={handleExtrasChange} />,
      MultipleChoice: (
        <MultipleChoiceExtras
          question={question}
          onChange={handleExtrasChange}
        />
      ),
      Dropdown: (
        <MultipleChoiceExtras
          noMaxChoice
          question={question}
          onChange={handleExtrasChange}
        />
      ),
      VideoQuestion: (
        <VideoQuestionExtras
          question={question}
          onChange={handleExtrasChange}
        />
      ),
    }[type];
  };

  return (
    <Form>
      <div className="flex flex-col gap-5">
        {mode === "select" ? (
          <div className="flex flex-col gap-2">
            <label className="font-bold">Type</label>
            <Select
              onChange={(value) => setQuestion({ ...question, type: value })}
              value={question.type}
              options={[
                { value: "Paragraph", label: "Paragraph" },
                { value: "ShortAnswer", label: "Short answer" },
                { value: "YesNo", label: "Yes/No" },
                { value: "Dropdown", label: "Dropdown" },
                { value: "MultipleChoice", label: "Multiple Choice" },
                { value: "Date", label: "Date" },
                { value: "Number", label: "Number" },
                { value: "VideoQuestion", label: "Video question" },
                { value: "FileUpload", label: "File Upload" },
              ]}
            />
          </div>
        ) : (
          <div>
            <div className="text-xs text-gray-400 mb-1">{question.type}</div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold">{question.question}</h1>
              <Button
                shape="circle"
                type="text"
                className="flex justify-center items-center"
                onClick={() => setMode("select")}
              >
                <EditOutlined />
              </Button>
            </div>
          </div>
        )}
        {mode !== "preview" && (
          <>
            <div className="flex flex-col gap-2">
              <label className="font-bold">Question</label>
              <Input
                placeholder="Type here"
                value={question.question}
                onChange={(e) =>
                  setQuestion({ ...question, question: e.target.value })
                }
              />
            </div>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#087B2F",
                },
              }}
            >
              {renderExtras(question.type)}

              <div className="flex justify-between items-center">
                <Button
                  type="text"
                  size="small"
                  icon={<CloseOutlined />}
                  danger
                  onClick={() => props.onDelete(question)}
                >
                  <span className="text-xs font-bold">Delete Question</span>
                </Button>

                <Button
                  type="primary"
                  size="small"
                  className="bg-[#087B2F]"
                  onClick={() => {
                    props.onSave(question);
                    setMode("preview");
                  }}
                >
                  Save
                </Button>
              </div>
            </ConfigProvider>
          </>
        )}
      </div>
    </Form>
  );
}
