import React from "react";

interface Props {
    title: string;
}

export const MyTitle = React.memo(({ title }: Props) => {
    console.log(`Title: ${title} re-rendered`);
    return (
        <h1>{title}</h1>
    );
});