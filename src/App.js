import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/*PÁGINAS*/
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo'; 
import Home from './view/home'; 
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha';
import EventoCadastro from './view/evento-cadastro';
import EventoDetalhes from './view/evento-detalhes';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/' component={Home} />
        <Route path='/eventos/:parametro' component={Home} />
        <Route exact path='/recuperarsenha' component={UsuarioRecuperarSenha} />
        <Route exact path='/eventocadastro' component={EventoCadastro} />
        <Route path='/eventodetalhes/:id' component={EventoDetalhes} />

      </Router>
    </Provider>
  );
}

export default App;
