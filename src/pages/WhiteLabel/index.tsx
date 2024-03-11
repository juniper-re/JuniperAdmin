import React from "react"
import { Divider, Typography, theme } from "antd"
import { Content } from "antd/es/layout/layout"
import { Login } from "./Login";



export const WhiteLabel: React.FC = () => {
  const { 
    token: {colorBgContainer, borderRadiusLG}
  } = theme.useToken();
  return (
    <Content style={{padding: 24, background: colorBgContainer, borderRadius:borderRadiusLG}}>
      <Typography.Title>White Label Tool</Typography.Title>
      <Divider orientation="left" plain>Login Screen</Divider>
      <Login />
      <Divider orientation="left" plain>Main Application</Divider>
    </Content>
  )
}