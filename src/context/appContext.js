import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import reducer from "./reducer";

export const AppContext = createContext()

const initialState = {
    students: [
        {id: 1, name:"Juan Perez", age: 25 },
        {id: 2, name:"María Lopez", age: 31 },
        {id: 3, name:"Ana Valdez", age: 21 },
        {id: 4, name:"Luisa Ramirez", age: 26 },
        {id: 5, name:"Pedro Stuart", age: 32 },
        {id: 6, name:"Karina Leiva", age: 28 },
    ]
}
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
 
    const createStudent = (student) => dispatch( {type:CREATE, payload: student} )  
    const updateStudent = (student) => dispatch( {type:UPDATE, payload: student} )
    const deleteStudent = (id) => dispatch( {type:DELETE, payload: id} )
    return (        
        <AppContext.Provider value={{
            students: state.students,
            createStudent,
            updateStudent,
            deleteStudent,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext)
}