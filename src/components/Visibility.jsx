import React from 'react'
import { useDispatch } from 'react-redux'
import { filterage } from '../reducers/filter'

const Visibility = () => {
  const dispatch = useDispatch()

  return (    
    <div className="vis">
         <div className="vis__container">
           <div className="vis__btns">
             <input type='radio'  name='filters' onChange={() => dispatch(filterage('ALL'))} className="vis__btn" />
             <span className="vis__span">3</span>
           </div>
           <div className="vis__btns">
             <button type='radio' name='filters' onChange={() => dispatch(filterage('IMPORTANT'))} className="vis__btn">In work</button>
             <span className="vis__span">3</span>
           </div>
           <div className="vis__btns">
             <input type='radio' name='filters' onChange={() => dispatch(filterage('NONIMPORTANT'))} className="vis__btn"/>Completed
             <div className="vis__span">3</div>
           </div>
         </div>
    </div>
  )
}

export default Visibility