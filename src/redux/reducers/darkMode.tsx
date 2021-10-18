// interface State{
//     state:any,
// }

import { lightTheme, darkTheme } from "../../styles/themes/themes"


const darkMode = (state: any = lightTheme, action: any): any => {
    switch (action.payload) {
        case 'dark':
            {
                return state = darkTheme
            }

        case 'light':
            {
                return state = lightTheme
            }

        default:
            return state;
    }
}

export { darkMode }