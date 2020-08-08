import React,{forwardRef} from 'react'
import { Card,CardContent,Typography } from "@material-ui/core";
import './Message.css';

const  Message = forwardRef(({message,username},ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card style={isUser ? {backgroundColor:"#0b81ff"} : {backgroundColor:"#e9e9eb"}}>
                <CardContent>
                    <Typography>
                        {message.username} : {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default  Message;

