import React from 'react';
import { useState } from 'react';

const BiGen = () => {

    const [m, sm] = React.useState('');
    const [ivis, sivis] = React.useState(true);
    const [ideas, sideas] = React.useState('');

    const sendIdea = async() => {
        // post to same link, but to /postiggenprompt with req.body.ig_gen_prompt = m
        const response = await fetch('http://170.187.159.180:5000/postigprompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ig_gen_prompt: m+"   "})
        });
        const data = await response.json();
        console.log(data);
        if(data.ig_gen_prompt=="There are already 5 ideas, please wait until the next post to add yours") {
            sideas(data.ig_gen_prompt)
            return;
        }
        sm('');
        sivis(false);
    }

    const fetchCurrentIdeas = async() => {
        // fetch from 170.187.159.180:5000/getigpromptnothing
        const response = await fetch('http://170.187.159.180:5000/getigpromptnothing');
        const data = await response.json();
        console.log(data);
        sideas(data.ig_gen_prompt);
    }

    return (
        <div className="connect">
            <div style={{position:"fixed",top:"0",left:"0",bottom:"0",right:"0",backgroundColor:"lightgray",zIndex:"-2"}}></div>
            <h1 style={{fontSize:"40px"}}>Influence Post</h1>
            <div style={{color:"gray",fontSize:"20px",fontWeight:"700", textAlign:"left"}}>
                <p>👉 Anonymously Include an Idea to Influence the Next Post for @bi_helper<br></br>👉 All Awaiting Ideas will be Aggregated For Each Run & Pass Through Safety Filter<br></br>👉 No More than 5 Ideas Will be Considered for Each Run</p>
            </div>
            {ideas && <div>{ideas}</div>}
            <button onClick={fetchCurrentIdeas} style={{marginBottom:"20px"}}>View Waiting Ideas</button>
            {/* Text Area for value m */}
            {ivis && <textarea className='connectTextArea ' style={{background:"lightgray",color:"black",fontSize:"18px"}} placeholder='Your Idea (300 Chars Max)' minLength={1} maxLength={300} value={m} onChange={(e) => sm(e.target.value)}></textarea>}
            {!ivis && <div>Thank you for Sharing!</div>}
            {m && <p>chars: {m.length}</p>}
            {ivis && <button style={{outline:"none"}} className={m ? 'connectSend' : 'connectSendInvisible'} onClick={sendIdea}>Send</button>}
            {/* <div className="connect-links">
                <Link to="/"><button>Back</button></Link>
            </div> */}
        </div>
    )
}

export default BiGen