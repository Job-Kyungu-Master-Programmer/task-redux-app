import Notes from './components/Notes'
import Header from './components/Header'
import Visibility from './components/Visibility'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Base from './Api/Base'
import { setTask } from './reducers/task'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
     Base.getAll().then(response => dispatch(setTask(response)))   
  },[])

  return (
   <div className="app">
      <div className="app__container">
        <Header />
        <Visibility />
        <Notes />
      </div>
   </div>
  )
}

export default App
