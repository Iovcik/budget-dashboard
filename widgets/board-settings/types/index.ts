import { ReactNode } from "react";

export type TTab = {
    id: string;
    label: string;
    content: ReactNode;
    defaultChecked?: boolean;
};