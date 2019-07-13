import {ReactNode} from "react";
import {Action, Bind} from 'react-amphtml/helpers';
import {AmpState} from "react-amphtml";

export type SidebarProps = {
    children?: ReactNode;
}
export const Sidebar = (props: SidebarProps) => {
    const sidebarState = {
        hidden: false,
    };
    return <>
        <style amp-custom="" jsx>{`
    body {
      font-family: 'Courier New', Courier, monospace;
    }
    .hide-sidebar .sidebar{
        display:none;
    }
      `}</style>
        <AmpState
            specName="amp-state"
            id="sidebarVisibility">
            {sidebarState}
        </AmpState>
        {/* hidden attribute -> "data-amp-bind-hidden" */}
        <Bind
            hidden={`sidebarVisibility.hidden`}>
            {(props) => {
                return <div
                    className={"sidebar"}
                    {...props}
                >
                    <ul>
                        <li>Nav item 1</li>
                        <li>Nav item 2</li>
                        <li>Nav item 3</li>
                        <li autoscroll className="currentPage">Nav item 4</li>
                        <li>Nav item 5</li>
                        <li>Nav item 6</li>
                    </ul>
                </div>
            }}
        </Bind>
        <Action
            events={{
                "tap": [`AMP.setState({ sidebarVisibility: { hidden: !sidebarVisibility.hidden } })`]
            }}>
            {(props) => {
                return <button
                    {...props}
                    tabIndex={0}
                    className="ampstart-navbar-trigger pr2">
                    ☰
                </button>
            }}
        </Action>
    </>
};

