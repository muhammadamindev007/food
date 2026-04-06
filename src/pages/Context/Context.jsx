import { createContext } from "react";
import { useState } from "react";

const Context = createContext()

function Provider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    return (
        <Context.Provider value={{ user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }