import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

type LoginFormType = {

}

export const LoginForm: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Logo"
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Form.Item>

      <Form.Item
        label="Background"
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Form.Item>

      <Form.Item 
        label="Tagline"
      >
        <Input.TextArea></Input.TextArea>
     </Form.Item>


    </Form>
  )
}