import React from 'react';
import './App.css';

export default class Form extends React.Component{
    render(){
        return(
            <form>
                <img src = 'https://b9d1a482-ede8-4fa6-9566-5babdc95dce0.ws-us02.gitpod.io/mini-browser/workspace/Spanish-Instruction/spanish-instruction/src/logo.png'></img>
                <h1>Instrucciones</h1>
                <p>
                    El juego de Piedra, papel y tijeras es un juego que <br></br>
                    ayuda a la persona ser sociable, especialmente en <br></br>
                    estos tiempos del Corona virus. Ya sea que <br></br>
                    deseas jugar con un amigo usando nuestro <br></br>
                    aparato o tal vez con una persona que esta a <br></br>
                    miles de millas de distancia. Para jugar el juego de <br></br>
                    Piedra, Papel y Tijeras ay unos pasos simples que <br></br>
                    deves de practicar.
                </p>
                <p>
                    Las reglas de este juego son muy simples y facil <br></br>
                    de implementar.
                </p>
                <p>
                    Ay tres ataques que puedes eliger: Piedra, Papel o <br></br>
                    tijeras
                </p>

                <p>
                    La Piedra vence a las tijeras <br></br>
                    Las tijeras vencen al papel <br></br>
                    El papel vence la piedra  
                </p>
                <hr></hr>
                <p>
                    Play = Jugar Play again = jugar de nuevo Donate = Donar <br></br>
                    Rematch = revancha New opponent = Nuevo oponente
                </p>
                <hr></hr>
                <p>
                    Complete my avatar = completar mi avatar Login = Inicia Sesion
                </p>
                <hr></hr>
                <button className = "return_button">
                Regresar al juego
                </button>
            </form>
        )
    }
}