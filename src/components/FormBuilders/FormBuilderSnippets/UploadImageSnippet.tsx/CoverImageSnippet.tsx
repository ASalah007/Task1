import Upload from "antd/es/upload/Upload";
import { useState, useEffect } from "react";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons/lib";
import { Button, Card } from "antd";

export default function CoverImageSnippet() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Card
      title={!preview && "Upload Cover Image"}
      headStyle={{ backgroundColor: "#d0f7fa", fontWeight: "bold" }}
      className="shadow-xl max-w-lg"
      bodyStyle={{ padding: preview && 0 }}
      cover={preview && <img src={preview} alt="preview" />}
    >
      {!preview ? (
        <div className="flex justify-center items-center border-dashed border border-black rounded">
          <Upload
            name="avatar"
            showUploadList={false}
            beforeUpload={(file) => setSelectedFile(file)}
          >
            <div>
              <div className="flex flex-col items-center p-10 gap-1">
                <UploadOutlined
                  style={{ fontSize: "26px", fontWeight: "bold" }}
                />
                <div className="font-bold">Upload cover image</div>
                <div className="text-gray-400 font-semibold text-xs">
                  16:9 ratio is recommended. Max image size 1mb
                </div>
              </div>
            </div>
          </Upload>
        </div>
      ) : (
        <div className="py-5 px-2">
          <Button
            type="text"
            danger
            icon={<CloseOutlined />}
            onClick={() => {
              setPreview(undefined);
              setSelectedFile(undefined);
            }}
          >
            Delete and re-upload
          </Button>
        </div>
      )}
    </Card>
  );
}
