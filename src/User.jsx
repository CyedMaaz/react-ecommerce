
import React from "react";

const User = (props) => {
    const {data}= props
    return (
        <div style={{textAlign: 'center'}}>
        <h1> {data.name}</h1>
        <h2>{data.Email}</h2>
        <h3>{data.UserName}</h3>
        </div>
    )
}
export default User;