import { createContext } from "react";

const userContext = createContext({
    loggedUser : "Admin"

});

export default userContext;