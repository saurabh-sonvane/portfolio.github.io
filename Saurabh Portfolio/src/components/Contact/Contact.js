import React, { useState } from 'react'
import { Box, ButtonBase, Input,Alert} from '@mui/material';
import SocialIcon from '../home/SocialIcon';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ darkMode }) {

    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[subject,setSubject]=useState("");
    const[message,setmessage]=useState("");

    let sa=useRef(null)
    let saa=useRef(null)



    

    let Styles = {
        height: "500px",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
        backgroundColor: darkMode? "#dcd6c8":"#0d2538",
        color: "black",
        padding: "20px",
        borderRadius: "7px",
        justifyContent:  "space-evenly",
        alignItems:"center",
        boxShadow: darkMode?"0 0 6px white": "0 0 10px black",
        margin:"auto"
       
       
    }

    let styletitle={
       height:"50px",
       width:"180px",
       fontSize:"24px",
       fontWeight:"bold",
       textAlign:"center",
       margin:"auto",
       padding:"10px",
       borderRadius:"5px",
       marginTop:"40px",
       marginBottom:"30px",
       backgroundColor:"#2cd6bc",
       color:"#0d2538",
       boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    }

    let inputstyle={
        backgroundColor:darkMode? "#0d2538":"#dcd6c8",
        color:darkMode?"#dcd6c8":"#0d2538",
         padding:"10px",
         borderRadius:"5px",
         width:"80%"
    }

    let textstyle={
        backgroundColor:darkMode? "#0d2538":"#dcd6c8",
        color:darkMode?"#dcd6c8":"#0d2538",
         padding:"10px",
         borderRadius:"5px",
         maxWidth:"250px",
         minWidth:"245px",
         minHeight:"100px",
         maxHeight:"150px",
         fontWeight:"bold"
    }

    function clickbtn(){
        if(name!="" && email!="" && subject!="" && message!=""){
            sa.current.style.display="flex";

            setTimeout(()=>{
                sa.current.style.display="none";
             },3000)

             emailjs.send("service_71xaxn7","template_igiii58",{
                to_name: name,
                from_name: email,
                message: message,
                Subject: subject,
                },"It3AB8TxyufZsGta8");
        }else{
            saa.current.style.display="flex";

            setTimeout(()=>{
                saa.current.style.display="none";
             },3000)
        }
      
    }

    return (

        <>
            <Box style={{marginBottom:"20px",position:"relative"}}>
                  <Box style={styletitle}>Contact Me</Box>
                <Box style={Styles}>
                <Input placeholder='Enter Name' style={inputstyle} onChange={(e)=>{
                        setname(e.target.value)
                }}/>
                <Input placeholder='Enter Email' style={inputstyle} onChange={(e)=>{
                        setemail(e.target.value)
                }}/>
                <Input placeholder='Subject' style={inputstyle} onChange={(e)=>{
                        setSubject(e.target.value)
                }}/>
                <textarea style={textstyle}  placeholder='Message'  onChange={(e)=>{
                        setmessage(e.target.value)
                }}/>
                    {/* <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                      <SocialIcon color="red" link={"https://github.com/s17200/TRIVAGO-CLONE"} icon={"fa fa-github"} label={"github"} />
                     
                    </Box> */}

                    <button
                    style={{width:"100px",height:"40px",borderRadius:"5px",border:"none",backgroundColor:"#8e7df2",color:"white",fontWeight:"bold",cursor:"pointer"}}
                    onClick={clickbtn}>Submit</button>
                   <Alert ref={sa} style={{display:"none"}} variant="filled" severity="success">Email sent Successfully</Alert>
                   <Alert ref={saa} style={{display:"none"}} variant="filled" severity="error">Enter All details</Alert>
                   
                </Box>

                <a href="#"><img style={{height:"50px",width:"50px",position:"absolute",right:"25px",bottom:"10px"}} src="https://cdn-icons-png.flaticon.com/512/892/892692.png"/></a>
              

              

            </Box>
        </>
    )
}
