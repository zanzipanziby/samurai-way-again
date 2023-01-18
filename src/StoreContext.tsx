import React from "react";
import {ReduxStoreType} from "./Redux/redux-store";

type ProviderPropsType = {
    store: ReduxStoreType
    children: React.ReactNode
}
export const StoreContext = React.createContext({} as ReduxStoreType)
export const MyProvider = (props: ProviderPropsType) => {
    return (
      <StoreContext.Provider value={props.store}>
          {props.children}
      </StoreContext.Provider>
    )
}