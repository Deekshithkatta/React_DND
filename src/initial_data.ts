
type task = {id:string, content:string}
type taskRecords = Record<string,task>

type column={id:string, title:string,taskIds:string[]}
type columnRecords=Record<string,column>

type InitialData={
    tasks:taskRecords,
    columns:columnRecords
}
export const initialData:InitialData= {
    tasks: {
        'task-1': {id:'task-1', content:'Eat'},
        'task-2': {id:'task-2', content:'Code'},
        'task-3': {id:'task-3', content:'Repeat'}
    },
    columns: {
        'column-1': {
            id:'column-1',
            title:'To Do',
            taskIds: ['task-1','task-2','task-3']
        }
    }
}

