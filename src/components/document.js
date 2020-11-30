import React from 'react';

export default function Document (props) {
    const {params: {docId} } = props.match
    console.log(docId)

    return(
        <div>
            This is a document
        </div>
    )
}