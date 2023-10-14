import React,{useContext,createContext,useReducer} from 'react'

const DataLayerContext=createContext();
export const DataLayer=({children,initialState,reducer}) =>{    
   return <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
}

export const useDataLayerValue=() => useContext(DataLayerContext);
 