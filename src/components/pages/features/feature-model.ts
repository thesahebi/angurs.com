import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface FeatureModelProps {
  id?: number;
  title?: any;
  content: any;
  icon?: IconType | ReactNode;
  bgColor: string;
  iconColor?: any;
  cardClass?: string;
  iconClass?: string;
  iconCradDIVClass?: string;
}
export interface ProgramModelProps {
  id?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name?: any;
  icon?: IconType | ReactNode;
  cardClass?: string;
  iconClass?: string;
  iconCradDIVClass?: string;
}
