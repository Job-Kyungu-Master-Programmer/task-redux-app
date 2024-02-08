import { TbProgressBolt } from "react-icons/tb";
import { RiCheckDoubleFill } from "react-icons/ri";


import { AiOutlineLike } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";

import { toggleImportance } from "../reducers/task";
import { useDispatch, useSelector } from "react-redux";
import Base from "../Api/Base";

const Completed = ( { tassk } ) => {
  const dispatch = useDispatch()
  const fause = useSelector(state => {
    if(state.filtera === 'ALL') {
      // return state.task
      console.log('Ici on a completed')
      }
      return state.filtera === 'IMPORTANT'
        ? state.task.filter(note => note.important)
        : state.task.filter(note => !note.important)
      })

      const handleImportance = async (id) => {
        dispatch(toggleImportance(id))
        const changing = fause.find(t => t.id === id)
        await Base.updating(id,changing)
    }


  return (
     <span>
         {fause.map(task => 
             <div className="note inwork">
             <div className="note__text">
                 <h1 className="note__title">{task.title}</h1>
                 <span className="note__content">
                   {task.content}
                 </span>
                 <div className="note__middle">
                     <div className="note__tag">Developpement</div>
                     <span className="note__vis">
                       {/* <TbProgressBolt />  */}
                     </span>
                      <span className="note__vis" onClick={() =>  handleImportance(task.id)}>
                    <RiCheckDoubleFill /> {task.important ? 'Progress' : 'Terminer'}
                  </span>
                 </div>
             </div>
             <div className="note__bottom">
                 <div className="note__likes">
                     <AiOutlineLike />
                     <span className="note__like">15</span>
                 </div>
                 <button>Delete</button>
                 <div className="note__dates">
                     <CiCalendar />
                     <span className="note__date">12/05/2024</span>
                 </div>
             </div>
          </div>
          )}
    </span>
  )
}

export default Completed