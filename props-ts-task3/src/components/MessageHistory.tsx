interface Messages {
  message: {
    id: string,
    from: {
      name: string,
    },
    type: string,
    time: string,
    text: string,
}[];
}

const MessageHistory = ({ message }: Messages) => {
  console.log(message)
  return (
    <>
      <ul>
        {message.map((item, index) => <li className="clearfix" key={index}>{item.text}</li>)}
      </ul>
    </>
  )
}

export default MessageHistory;