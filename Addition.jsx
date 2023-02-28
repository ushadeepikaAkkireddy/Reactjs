import React from "react";

function Addition(props){
    const {a,b}=props;
    const c=a+b;
    return(
    <div>
        <p>{props.a}+{props.b}={c}</p>
    </div>
    );
}
export default Addition;