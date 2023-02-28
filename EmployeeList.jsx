import React from "react";
const Names=[
    {name:'Usha'},
    {name:'Mounika'},
    {name:'Ganesh'},
    {name:'Amala'}

];
export default function EmployeeList()
{
    const Names=[
        {id:101,name:'Usha',gender:'female',department:'HR'},
        {id:102,name:'Mounika',gender:'female',department:'IT'},
        {id:103,name:'Ganesh',gender:'male',department:'HR'},
        {id:104,name:'Amala',gender:'female',department:'CLERK'}
    ]; 
    return(

        <div>
            <ul>
                {Names.map(data=>(
                    <li key={data.id} >{data.id} {data.name} {data.gender} {data.department}</li>
                ))}
            </ul>
        </div>
    );
}
