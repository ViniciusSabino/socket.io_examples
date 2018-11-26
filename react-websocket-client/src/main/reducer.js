import { combineReducers } from "redux";

import UsuarioReducer from "../reducers/usuarioReducer";

// Combinação de todos os reducers
const rootReducer = combineReducers({
  usuario: UsuarioReducer
});

export default rootReducer;
