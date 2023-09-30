import React from "react";
import PlainItem from "../PlainItem/PlainItem";

type ProfileItemData = {
  mandatory: boolean;
  show: boolean;
};

type ProfileItemProps = {
  label: React.ReactNode;
  data: ProfileItemData;
  onChange: (data: ProfileItemData) => void;
};

export default function ProfileItem(props: ProfileItemProps) {
  return (
    <PlainItem
      label={props.label}
      data={{ check: props.data.mandatory, show: props.data.show }}
      onChange={(newData) =>
        props.onChange({ mandatory: newData.check, show: newData.show })
      }
      checkLabel="Mandatory"
    />
  );
}
