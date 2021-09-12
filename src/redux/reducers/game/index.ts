enum GameActionTypes {
    SET_GAME_STATUS = 'SET_GAME_STATUS'
}

interface State {
    status: String;
}

const initialState = {
    status: "IDLE",
}
interface setGameStatus {
    type: GameActionTypes.SET_GAME_STATUS,
    payload: String
}
type GameActions = 
    setGameStatus
;
export default(state: State = initialState, action: GameActions) => {
    switch (action.type) {
        case GameActionTypes.SET_GAME_STATUS:
            console.log("inside reducer case");
            
            return {
                ...state,
                status: action.payload
            }
        default:
            return initialState;
    }
}