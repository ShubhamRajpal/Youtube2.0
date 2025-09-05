import React from 'react'

const ChatMessage = ({name, text, image}) => {
  return (
    <div>
        <div className="flex items-start my-1 gap-1">
        <img
          className="w-7 h-7 rounded-full"
          src={image}
          loading="lazy"
          alt="comment-author"
        />
        <div className="flex mx-2 gap-1 text-sm">
          <p className="font-bold whitespace-nowrap">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage