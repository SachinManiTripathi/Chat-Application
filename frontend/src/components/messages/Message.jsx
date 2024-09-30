const Message = () => {

  
  return (
    <>
<div className="py-10">
  <div className="chat chat-end flex flex">
    <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full">
        <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
  <div className="flex">
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50 mx-10">12:46</time>
  </div>
  </div>
  </div>
  <div className="flex flex-col justify-center ">
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
  </div>
  </div>



</>
  )
}

export default Message