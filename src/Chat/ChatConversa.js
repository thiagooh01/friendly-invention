import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap'
import { connect } from 'react-redux'

class ChatConversa extends Component {

    renderMensagem(msg, autor) {
        return (
            <div>
                {
                    autor === 'user' && <span>
                        <Badge color='primary'> Você disse:</Badge>
                        <Alert collor='primary'> {msg} </Alert>
                    </span>
                }

                {
                    autor === 'bot' && <span>
                        <Badge color='warning'> Chatbot disse:</Badge>
                        <Alert collor='warning'> {msg} </Alert>
                    </span>
                }
            </div>
        )
    }

    render() {
        return (
            <div className='Chat-Conversa'>
                {JSON.stringify(this.props)}

                {
                    this.props.mensagens.map(key => {
                        return this.renderMensagem(key, 'user')
                    })
                }


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null)(ChatConversa)