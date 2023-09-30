import React, { useState } from "react";
import { Button, Card, Divider, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CustomQuestionItem, {
  Question,
} from "../FormBuilderItems/CustomQuestionItem/CustomQuestionItem";
import { v4 as uuidv4 } from "uuid";

type FormBuilderSnippetBaseProps = {
  title: string;
  children: React.ReactNode;
  addQuestion?: boolean;
  onQuestionAdd?: (question: Question) => void;
  onDelete?: (question: Question) => void;
};

export default function FormBuilderSnippetBase(
  props: FormBuilderSnippetBaseProps
) {
  const items = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const [newQuestion, setNewQuestion] = useState(false);
  const [newKey, setNewKey] = useState(0);

  return (
    <Card
      title={props.title}
      headStyle={{ backgroundColor: "#d0f7fa", fontWeight: "bold" }}
      className="shadow-xl max-w-lg"
    >
      <div className="flex flex-col gap-10">
        <div>
          {items.map((item, idx) => (
            <>
              <div>{item}</div>
              {idx < items.length - 1 && <Divider className="bg-gray-300" />}
            </>
          ))}
          {newQuestion && (
            <>
              <Divider className="bg-gray-300" />
              <CustomQuestionItem
                key={newKey}
                mode="select"
                question={getNewQuestion()}
                onDelete={() => {
                  setNewQuestion(false);
                }}
                onSave={(question) => {
                  props.onQuestionAdd && props.onQuestionAdd(question);
                  setNewQuestion(false);
                }}
              />
            </>
          )}
        </div>

        {props.addQuestion && (
          <Space>
            <Button
              className="flex gap-2 items-center"
              type="text"
              onClick={() => {
                setNewQuestion(true);
                setNewKey(newKey + 1);
              }}
            >
              <div>
                <PlusOutlined className="font-extrabold text-lg" />
              </div>
              <div className="font-bold text-xs">Add a question</div>
            </Button>
          </Space>
        )}
      </div>
    </Card>
  );
}

function getNewQuestion() {
  return {
    id: uuidv4(),
    type: "Paragraph",
    question: "",
    choices: [],
    maxChoice: 0,
    disqualify: false,
    other: false,
  };
}
