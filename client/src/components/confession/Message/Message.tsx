export interface MessageProps {
    message: string | undefined;
}

const Message: React.FC<MessageProps> = ({message}) => {
    if (message === undefined) return <></>;
    
    return (
        <div className = "message" >{message}</div>
    );
};

export default Message;