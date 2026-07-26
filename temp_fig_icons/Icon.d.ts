import * as React from 'react';
export type IconName =
  | "LeftMenuWhite2PageDashboardSizeMax"
  | "LeftMenuWhite2PageDashboardSizeMax2"
  | "LeftMenuWhite2PageMyTaskSizeMax"
  | "LeftMenuWhite2PageMyTaskSizeMax2"
  | "LeftMenuWhite2PagePlayerReportSizeMax"
  | "MenuProperty1Active"
  | "MenuProperty1Inactive"
  | "MenuProperty1Variant3"
  | "TablerGhost2"
  | "TablerLayoutDashboard"
  | "TablerSettings";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
