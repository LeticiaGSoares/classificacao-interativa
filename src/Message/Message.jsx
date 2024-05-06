const Message = ({title, text}) => {
    return(
        <div className="text-content">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Message