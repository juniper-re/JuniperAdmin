import type { MenuProps } from "antd"
import React from "react";

export type MenuItem = Required<MenuProps>['items'][number];

export const createMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon? : React.ReactNode,
  children?: MenuItem[]
): MenuItem => ({
  key,
  icon,
  children,
  label
} as MenuItem)