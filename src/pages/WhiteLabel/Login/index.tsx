import { Col, Row } from "antd"
import React from "react"
import { LoginForm } from "./LoginForm"
import { LoginScreenMockup } from "./LoginScreenMockup"

export const Login: React.FC = () => {


  return (
    <Row justify={"space-between"}>
      <Col span={10}>
        <LoginForm />
      </Col>
      <Col span={10}>
        <LoginScreenMockup />
      </Col>
    </Row>
  )


}