import React,{Component} from 'react'
import {InputGroup,InputGroupAddon,input,Button} from 'reactstrap'
import {connect} from 'react-redux'

import {enviaMensagem} from '../Store/actions/chat'


class ChatMensagem extends Component {
    constructor(props){
        super(props)

        this.inputEnviaTexto =this.inputEnviaTexto.bind(this)
    }

    inputEnviaTexto(e){
        if (e.keyCode ===13){
            console.log(e.target.value)
            this.props.enviaTexto(e.target.value)
            e.target.value = ''
        }
        
    }

    render(){
    return(
        <div className = 'Chat-Msg'>
            <hr/>
            <InputGroup>
                <input onKeyDown={this.inputEnviaTexto} placeholder ='Digite Sua Mensagem' />
                <InputGroupAddon addonType = 'append'>
                    <Button color = 'success'>Enviar</Button>
                </InputGroupAddon>
            </InputGroup>

        </div>
    )
}
}

const mapDispatchtoProps=(dispatch) => {
    return{
        enviaTexto: (msg) => dispatch(enviaMensagem(msg))
    }
}

export default connect(null, mapDispatchtoProps) (ChatMensagem)