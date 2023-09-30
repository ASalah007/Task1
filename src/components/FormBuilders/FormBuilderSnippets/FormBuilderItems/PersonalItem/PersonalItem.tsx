import PlainItem from "../PlainItem/PlainItem";

type PersonalItemData = {
  internalUse: boolean;
  show: boolean;
};

type PersonalItemProps = {
  label: React.ReactNode;
  data?: PersonalItemData;
  onChange?: (data: PersonalItemData) => void;
};

export default function PersonalItem(props: PersonalItemProps) {
  return (
    <PlainItem
      label={props.label}
      checkLabel="Internal"
      data={
        props.data && { check: props.data.internalUse, show: props.data.show }
      }
      onChange={(newData) =>
        props.onChange &&
        props.onChange({ internalUse: newData.check, show: newData.show })
      }
    />
  );
}
