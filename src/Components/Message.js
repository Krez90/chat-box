import React from 'react'

const Message = ({pseudo, message}) => {
    return(
        <p className='user-messages'>
            {pseudo, message}
        </p>    
    )
}

export default Message