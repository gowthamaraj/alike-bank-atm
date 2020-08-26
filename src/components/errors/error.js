import React from 'react'

export default function Error(props) {
    return (
        <>
        <div className="text-center text-danger">
            {props.error}
        </div>
        <div className="text-center text-info">
            {props.msg}
        </div>
        </>
    )
}
