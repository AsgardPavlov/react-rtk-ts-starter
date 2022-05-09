import * as React from 'react';

export default function IndexPage() {
    const blockName = 'IndexPage';
    return (
        <div className={blockName}>
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
