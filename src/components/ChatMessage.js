import React from 'react'

const ChatMessage = ({name, text}) => {
  return (
    <div>
        <div className="flex items-start my-2">
        <img
          className="w-6"
          src="https://img.icons8.com/?size=100&id=cV1jPimNOSK3&format=png&color=000000"
          alt="comment-author"
        />
        <div className="flex mx-2">
          <p className="font-bold pr-2">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage