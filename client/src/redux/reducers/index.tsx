import { darkMode } from "./darkMode";
import { combineReducers } from "redux";

const mergredReduers = combineReducers({
    darkMode: darkMode,
});

export { mergredReduers };
export type RootState = ReturnType<typeof mergredReduers>;
