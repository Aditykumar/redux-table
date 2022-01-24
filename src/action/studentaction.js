export const addstudent = (data)=>{
    return{
        type:"ADD_STUDENT",
        payload: data
        
    }
}

export const updatestudent = (data)=>{
    return{
        type:"UPDATE_STUDENT",
        payload: data
        
    }
}

export const deletestudent = (id)=>{
    return{
        type:"DELETE_STUDENT",
        payload: id
        
    }
}