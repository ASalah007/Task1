import { Form, Input, Select } from "antd";

export default function VideoQuestionExtras(props: any) {
  return (
    <div>
      <Form.Item>
        <Input.TextArea
          placeholder="Type here"
          value={props.question.description}
          onChange={(e) =>
            props.onChange({ ...props.question, description: e.target.value })
          }
          style={{ resize: "none", height: 120 }}
        />
      </Form.Item>
      <Form.Item>
        <div className="flex gap-2">
          <div className="grow">
            <Input
              placeholder="Max duration of video"
              type="number"
              value={props.question.duration}
              onChange={(e) =>
                props.onChange({ ...props.question, duration: e.target.value })
              }
            />
          </div>
          <div>
            <Select
              placeholder="in (sec/min)"
              value={props.question.durationUnit}
              onChange={(value) =>
                props.onChange({ ...props.question, durationUnit: value })
              }
              options={[
                { value: "min", label: "Minutes" },
                { value: "sec", label: "Seconds" },
              ]}
            />
          </div>
        </div>
      </Form.Item>
    </div>
  );
}
