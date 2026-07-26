import * as React from 'react';
export type IconName =
  | "MenuProperty1CollapseActive"
  | "MenuProperty1CollapseInactive"
  | "MenuProperty1ExpandActive"
  | "MenuProperty1ExpandInactive"
  | "TablerArrowBarRight"
  | "TablerLayoutDashboard";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
