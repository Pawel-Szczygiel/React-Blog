import { createContext, useReducer, useContext, useEffect } from "react";
import  Reducer  from "./Reducer";


const INITIAL_STATE ={
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false
};

export const AppContext = createContext(INITIAL_STATE);

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AppContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )


}

export const useGlobalContext = () => useContext(AppContext);

export {
    AppContextProvider
}