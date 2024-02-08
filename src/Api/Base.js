import axios from 'axios'

const baseUrl = 'http://localhost:3001/task'

const getAll = async () => {
    const response = await axios.get(baseUrl)
        return response.data
}


const taskNew = async (title, content) => {
     const date = new Date()
     const object = { 
         title,
         content,
         important: true,
         day: date.getDate() + 1,
         month: date.getMonth() + 1,
         years: date.getFullYear(),
     }
     const response = await axios.post(baseUrl, object)
     return response.data
}

const updating = async  (id, object) => {
    const response = await axios.put(`${baseUrl}/${id}`, object)
    return response.data
}

export default { 
    getAll,
    taskNew,
    updating
 }