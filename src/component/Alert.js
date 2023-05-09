import React from 'react'

export default function Alert(props) {
    const capitalizes=(str)=>{
            let cap = str.charAt(0).toUpperCase() + str.slice(1);
            return cap;
    }
    return (
            <div style={{height: "50px"}}> 
                  {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                  <strong>{capitalizes(props.alert.typ)}</strong>: {props.alert.msg}</div>}
            </div>

    )
}
