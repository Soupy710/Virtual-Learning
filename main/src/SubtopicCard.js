import React from 'react'
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from 'axios';

const SubtopicCard = (props) => {
    let s = "/"+props.topic.toLowerCase();
    const sendSubtopic = () => {
        axios.post('http://localhost:5000/userclickdata', {
            topic: props.topic.toLowerCase(),
            subtopic: props.subtopic.toLowerCase()
          })
    }
    return (
        <div>
            <Card>
            <Card.Header>{props.subtopic}</Card.Header>
            <Card.Body>
                <Card.Text>
                Interested in learning {props.subtopic}? Turn the card over! 
                </Card.Text>
                <Link to={s}>
                    <Button variant="primary" onClick={sendSubtopic}> Click</Button>
                </Link>
            </Card.Body>
            </Card>    
        </div>
    )
}

export default SubtopicCard
//git@github.com:MHDYousuf/AgoraWebSDK-NG-React.git   