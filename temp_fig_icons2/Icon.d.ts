import * as React from 'react';
export type IconName =
  | "TablerGhost2"
  | "TablerLayoutDashboard"
  | "TablerListCheck"
  | "TablerMessage"
  | "TablerSettings";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
