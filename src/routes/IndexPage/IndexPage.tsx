import * as React from 'react';
import useBem from '../../hooks/useBem';

export default function IndexPage() {
    const {bemBlock} = useBem('IndexPage');
    return (
        <div className={bemBlock()}>
            <h1>
                {`${process.env.name}`}
            </h1>
            <img
                src='/images/twitter-md.svg'
                alt='twitter'
                width={50}
                height={50}
            />
        </div>
    );
}
