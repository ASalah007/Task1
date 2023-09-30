import styles from "./style.module.css";

export default function Navbar() {
  return (
    <div className="bg-white flex shadow-xl mt-10 h-24 items-stretch">
      <div className="flex items-center px-20 font-semibold">
        Program Details
      </div>

      <div className="w-[1px] bg-gray-300 my-5"></div>
      <div className={"flex items-center px-20 font-semibold " + styles.active}>
        Application Form
      </div>

      <div className="w-[1px] bg-gray-300 my-5"></div>
      <div className="flex items-center px-20 font-semibold">Workflow</div>

      <div className="w-[1px] bg-gray-300 my-5"></div>
      <div className="flex items-center px-20 font-semibold">Preview</div>
    </div>
  );
}
