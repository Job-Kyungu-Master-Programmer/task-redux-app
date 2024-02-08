import React from 'react'
import Note from './Note'
import InWork from './InWork'
import Completed from './Completed'
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../reducers/task'
import Base from '../Api/Base'


const Notes = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => {
        if(state.filtera === 'ALL') {
              return state.task
        }
        return state.filtera === 'IMPORTANT'
            ? state.task.filter(note => note.important)
            : state.task.filter(note => !note.important);
    })

    //For create addTask
    const addTask = async (e) => {
        e.preventDefault() 
        
        const title = e.target.title.value 
        e.target.title.value=''    
        const content = e.target.content.value
        e.target.content.value = ''
        const newsTask = await Base.taskNew(title,content)
        dispatch(createTask(newsTask))
    }


  return (
    <div className="notes">
         <div className="notes__container">
             <ul className="notes__list">
               {/* {tasks.map(task =>
                 <Note key={task.id} task={task}  />
                )} */}
            </ul>
            <ul className="notes__list">
                <InWork />
            </ul>
            <ul className="notes__list">
                <Completed />
            </ul>
         </div>
         <form onSubmit={addTask} className="notes__form">
            <input type="text" name='title' className="notes__input" placeholder='title' />
            <textarea type="text" name="content" className='notes__textarea' placeholder='write...' ></textarea>
            <button className="notes__btn">Add</button>
         </form>
    </div>
  )
}

export default Notes