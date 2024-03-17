import React from 'react'
import { Menu, Typography } from 'antd'
import { FormatPainterFilled } from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { createMenuItem } from './createMenuItem'

const items = [
  createMenuItem('Theme Generator', '1', <FormatPainterFilled />)
]
export const Drawer: React.FC = () => {
  return (
    <Sider>
      <Typography style={{
        color: 'white',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 30,
        paddingLeft: 10
      }}>Juniper Admin</Typography>
      <Menu theme="dark" items={items} defaultSelectedKeys={['1']} />
    </Sider>
  )
}
