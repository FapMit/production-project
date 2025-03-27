import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

interface StorePorviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StorePorvider = (props: StorePorviderProps) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  
  const store = createReduxStore(
    initialState as StateSchema, 
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return ( 
    <Provider store={store}>
      {children}
    </Provider>
  );
}