import * as React from 'react';
import useBem from '../../hooks/useBem';

export default function NotFoundPage() {
    const {bemBlock} = useBem('NotFoundPage');
    return (
        <div className={bemBlock()}>
            <h1>Page is Not Found </h1>
        </div>
    );
}
