import React from 'react'

interface props{
    column:string,
    tasks:string
}

export const Column =({column,tasks}:props)=>{
    return(
        <div>
            {
                column
            }
            {
                tasks
            }

        </div>
    )
}