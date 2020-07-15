import React from 'react'

export default function Time(props) {
    return (
        <h2>{[props.time.toLocaleString()]}</h2>
    )
}
