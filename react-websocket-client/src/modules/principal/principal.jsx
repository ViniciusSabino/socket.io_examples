import React, { Component } from "react";

import Container from "../../common/template/container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  websocketOn,
  addToken,
  changeToken
} from "../../actions/principalAction";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comId: 0,
      semID: 0
    };
    this.setCountID = this.setCountID.bind(this);
  }

  setCountID(id) {
    console.log(id);
    if (id) this.setState({ comId: this.state.comId++ });
    else this.setState({ semID: this.state.semID++ });
    console.log(this.state);
  }

  componentWillMount() {
    this.props.websocketOn();
  }

  render() {
    const { token, desabilitar_cadastro, add, desabilitar_botao } = this.props;

    return (
      <Container classe="row">
        <div class="jumbotron">
          <h3 style={{ textAlign: "center" }}>Teste Websocket Cliente</h3>
          <p style={{ textAlign: "center" }}>
            Notificações recebidas (Novas) : {this.state.semID}
          </p>
          <p style={{ textAlign: "center" }}>
            Notificações recebidas (Cadastradas no Mongo): {this.state.comId}
          </p>
        </div>
        <div class="jumbotron">
          <div className="row content-row form-mensalidade">
            <div className="col col-md-12 col-sm-12">
              <div className="form-group">
                <label>Accounts Token</label>
                <TextField
                  disabled={desabilitar_cadastro}
                  id="tx_mensalidade"
                  className="form-control"
                  value={token}
                  onChange={this.props.changeToken}
                />
              </div>
            </div>
          </div>
          <Button
            onClick={() => this.props.addToken(token, this.setCountID)}
            variant="contained"
            size="small"
            className="bg-success text-white"
            disabled={desabilitar_botao}
          >
            Conectar no Socket
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.usuario.token,
  desabilitar_cadastro: state.usuario.desabilitar_cadastro,
  desabilitar_botao: state.usuario.desabilitar_botao,
  countNotificacoes: state.usuario.countNotificacoes
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeToken,
      websocketOn,
      addToken
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Principal);
