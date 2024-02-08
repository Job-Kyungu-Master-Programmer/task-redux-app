import { AiOutlineLike } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";

import { TbProgressBolt } from "react-icons/tb";
import { RiCheckDoubleFill } from "react-icons/ri";
import { toggleImportance } from "../reducers/task";
import { useDispatch, useSelector } from "react-redux";
import Base from "../Api/Base";




const Note = ( { task } ) => {

    const dispatch = useDispatch()
   const tasks = useSelector(state => state.task)

    const handleImportance = async (id) => {
        dispatch(toggleImportance(id))
        const changing = tasks.find(t => t.id === id)
        await Base.updating(id,changing)
    }


  return (
     <div className="note">
        <div className="note__text">
            <h1 className="note__title">{task.title}</h1>
            <span className="note__content">
                {task.content}
            </span>
            <div className="note__middle">
                <div className="note__tag">Developpement</div>
                <span className="note__vis" onClick={() =>  handleImportance(task.id)}>
                  <TbProgressBolt /> {task.important ? 'Important' : 'Non important'}
                </span>
                <span className="note__vis">
                  <RiCheckDoubleFill />
                </span>
            </div>
        </div>
        <div className="note__bottom">
            <div className="note__likes">
                <AiOutlineLike />
                <span className="note__like">15</span>
            </div>
            <div className="note__dates">
                <CiCalendar />
                <span className="note__date">{task.day}/{task.month}/{task.years}</span>
            </div>
        </div>
     </div>
  )
}

export default Note