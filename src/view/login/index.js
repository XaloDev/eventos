import React from 'react';
import './login.css';

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
            <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
            </div>
        
            
            <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email"  />
            <input type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
            
           
            <button class="btn btn-lg btn-block btn-login" type="submit">Sign in</button>
            

            <div className="msg-login text-white text-center my-5">
                <span><strong>WoW!</strong> Você está conectado! &#128526;</span>
                <br></br>
                <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>
            </div>

            <div className="opcoes-login mt-5 text-center">
                <a href="#" className="mx-2">Recuperar Senha</a>
                <span className="text-white">&#9733;</span>
                <a href="#" className="mx-2">Quero Cadastrar</a>
            </div>
        </form> 
      </div>       
    );
}

export default Login;