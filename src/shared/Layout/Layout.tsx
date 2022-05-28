import * as React from 'react';
import useBem from '../../hooks/useBem';

interface ILayoutProps {
    children?: React.ReactNode,
}

export default function Layout(props: ILayoutProps) {
    const {bemBlock} = useBem('Layout');
    return (
        <div className={bemBlock()}>
            {/* May add header, sidebar, footer and etc */}
            {props.children}
        </div>
    );
}
