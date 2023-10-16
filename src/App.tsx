import React, {createContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./routes/AppRouter";
import {auth, db} from "./db";

type ContextType = {
    db: any,
    auth: any,
    lang: "eng" | 'pl'
}

export const Context = createContext<ContextType>({
    db,
    auth,
    lang: 'eng'
});

function App() {
  return (
    <BrowserRouter>
        <Context.Provider value={{
            db,
            auth,
            lang: 'eng'
        }}>
            <AppRouter/>
        </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
