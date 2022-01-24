const intit = [{
    "Id": "1",
    "Name": "Aditya",
    "Age": "21",
    "Course": "MERN",
    "Batch": "March"
},

{
    "Id": "2",
    "Name": "Rinkal",
    "Age": "24",
    "Course": "MERN",
    "Batch": "July"
},

{
    "Id": "3",
    "Name": "Jhon",
    "Age": "22",
    "Course": "MERN",
    "Batch": "July"
},

{
    "Id": "4",
    "Name": "Joe",
    "Age": "23",
    "Course": "MERN",
    "Batch": "Aug"
},]

const addstudentred = (state= intit, action)=>{
    switch (action.type) {
        case "ADD_STUDENT":
            return [...state,action.payload];

            case "UPDATE_STUDENT" :
                const updatest = state.map((val)=> val.Id==action.payload.Id ? action.payload : val)
                const newst = updatest;
                return newst ;

                case "DELETE_STUDENT":
                    const filval = state.filter((myfil)=> myfil.Id !== action.payload)
                    return filval;
                
            
            
    
        default:
            return state;
    }
}

export default addstudentred;