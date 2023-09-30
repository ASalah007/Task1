import { Checkbox } from "antd";
import React from "react";

export default function YesNoExtras(props: any) {
  return (
    <div className="pl-3">
      <Checkbox
        checked={props.question.disqualify}
        onChange={(e) =>
          props.onChange({ ...props.question, disqualify: e.target.checked })
        }
      >
        <span className="text-xs font-semibold">
          Disqualify candidate if the answer is no.
        </span>
      </Checkbox>
    </div>
  );
}
