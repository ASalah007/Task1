import { useState } from "react";
import {
  UnorderedListOutlined,
  PlusOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

export default function MultipleChoiceExtras({
  question,
  noMaxChoice,
  onChange,
}: any) {
  const [newChoice, setNewChoice] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold pl-3">Choice</h1>
        {question.choices.map((choice: string, idx: number) => (
          <Choice
            key={choice + idx}
            value={choice}
            icon={<CloseOutlined />}
            onClick={() => {
              onChange({
                ...question,
                choices: [
                  ...question.choices.slice(0, idx),
                  ...question.choices.slice(idx + 1),
                ],
              });
            }}
            onChange={(e: any) =>
              onChange({
                ...question,
                choices: question.choices.map((c: any, i: number) =>
                  i === idx ? e.target.value : c
                ),
              })
            }
          />
        ))}

        <Form.Item>
          <Choice
            onChange={(e: any) => setNewChoice(e.target.value)}
            value={newChoice}
            icon={<PlusOutlined />}
            onClick={() => {
              onChange({
                ...question,
                choices: [...question.choices, newChoice],
              });
              setNewChoice("");
            }}
          />
        </Form.Item>
        <div className="pl-3">
          <Checkbox
            checked={question.other}
            onChange={(e) => onChange({ ...question, other: e.target.checked })}
          >
            Enable "Other" option
          </Checkbox>
        </div>
      </div>

      {!noMaxChoice && (
        <Form.Item>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">Max Choice Allowed</h1>
            <Input
              placeholder="Enter Number of Choice Allowed"
              type="number"
              value={question.maxChoice}
              onChange={(e) =>
                onChange({ ...question, maxChoice: parseInt(e.target.value) })
              }
            />
          </div>
        </Form.Item>
      )}
    </div>
  );
}

const Choice = ({ value, icon, onChange, onClick }: any) => {
  return (
    <div className="flex items-center gap-2">
      <UnorderedListOutlined />
      <Input
        value={value}
        onChange={onChange}
        placeholder="Type here"
        required
      />
      <Button icon={icon} type="text" onClick={onClick} />
    </div>
  );
};
