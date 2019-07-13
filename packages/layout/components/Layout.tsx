import {ReactNode} from "react";

export type LayoutProps = {
    children: ReactNode;
}
export const Layout = (props: LayoutProps) => {
    return props.children
};
