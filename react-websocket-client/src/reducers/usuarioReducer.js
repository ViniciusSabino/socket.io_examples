const INITIAL_STATE = {
  desabilitar_cadastro: "",
  token: "",
  add: true,
  desabilitar_botao: false,
  countNotificacoes: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_TOKEN": {
      return {
        ...state,
        desabilitar_cadastro: "",
        desabilitar_botao: false,
        token: action.payload
      };
    }
    case "ADD": {
      return {
        ...state,
        token: action.payload.token,
        desabilitar_cadastro: "disabled",
        desabilitar_botao: true,
        add: false,
        countNotificacoes: action.payload.nova
          ? state.countNotificacoes + 1
          : state.countNotificacoes
      };
    }
    case "DISCONECT": {
      return {
        ...state,
        token: "",
        desabilitar_cadastro: "",
        desabilitar_botao: false,
        add: true
      };
    }
    default:
      return state;
  }
};
