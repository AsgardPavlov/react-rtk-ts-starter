import * as React from 'react';

interface ILayoutProps {
    children?: React.ReactNode,
}

export default function Layout(props: ILayoutProps) {
    return (
        <div className='Layout'>
            {/* May add header, sidebar, footer and etc */}
            {props.children}
        </div>
    );
}
