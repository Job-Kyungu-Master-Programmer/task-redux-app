import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, title: 'Slack inegration', content: 'Add field children', important: true },
    { id: 2, title: 'Slack inegration 2', content: 'Add field children 22', important: false }
]


const taskSlice = createSlice({
     name: 'task',
     initialState:[],
     reducers: {
        createTask(state, action) {
            state.push(action.payload)
        },
        toggleImportance(state, action) {
            const taskId = action.payload
            const task = state.find(t => t.id === taskId)
            const taskChange = { ...task, important: !task.important}
            return state.map(t => t.id !== taskId ? t : taskChange)
        },
        appendTask(state, action) {
            action.payload
        },
        setTask(state, action) {
            return action.payload
        }
     }
})


export const { createTask, toggleImportance, appendTask, setTask } = taskSlice.actions

export default taskSlice.reducer