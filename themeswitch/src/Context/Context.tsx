import React from "react";
import { ContextType, ContextDefultValues } from "./ContextTypes";

const Context = React.createContext<ContextType>(ContextDefultValues);

export default Context;
