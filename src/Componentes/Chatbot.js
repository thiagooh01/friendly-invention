import React, {Component} from 'react'

import '../Chat/chat.css'
import ChatConversa from '../Chat/ChatConversa'
import ChatHeader from '../Chat/ChatHeader'
import ChatMensagem from '../Chat/ChatbotMensagem'

class Chatbot extends Component{
    render(){
        return(
            <div className= 'chatbot'>
                <div className ='Chat-Conteudo'>
                    <ChatHeader/>
                    <ChatConversa/>
                    <ChatMensagem/>
                </div>
            </div>
        )
    }
}


export default Chatbot