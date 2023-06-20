import React from 'react'
import { Box, Grid } from '@mui/material';
import SocialIcon from '../home/SocialIcon';
import { info } from '../../assets/info/Info';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export default function Projects({ darkMode }) {

    let Styles = {
        height: "500px",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
        backgroundColor: darkMode ? "#db7db2" : "#278b99",
        color: "black",
        padding: "20px",
        borderRadius: "7px",
        justifyContent: "space-between",
        boxShadow: darkMode ? "0 0 6px white" : "0 0 10px black",
        marginTop: "40px"

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

    return (

        <>
            <Box style={styletitle}>Projects</Box>
            <Box
                component={'main'}
                display={'flex'}
                flexWrap={'wrap'}
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                minHeight={'calc(100vh - 175px)'}
                gap={'30px'}
                width={'90%'}
                margin={'auto'}
                paddingBottom={'20px'}
                marginTop={"60px"}
            >
                
                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="placeprep.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>Placeprep.com</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>Placeprep.com is a Educational website where anybody can learn about coding related topics and languages. Placeprep allows you to give mcq test, apart from that it has two logins one for user login and another for admin with email validation , this website was developed using HTML,SCSS,CSS,Javascript,Bootstrap & JSON Server</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <SocialIcon color="red" link={"https://github.com/s17200/PlacePrep.com"} icon={"fa fa-github"} label={"github"} />
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://place-prep-com.vercel.app/HomePage/index.html", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>

                </Box>

                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="honeystore.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>HoneyStore</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>This is a honey store app where user can find various honey products which are 100% organic. This includes the ability to create an account, setting user preferences like sort and filter , buying Honey products as well as paying online. The project was developed using only React js, Redux, CSS, chakra-ui, JSON Server, and JavaScript.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <SocialIcon color="red" link={"https://github.com/s17200/Honey_store"} icon={"fa fa-github"} label={"github"} />
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://honeysotre.vercel.app", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>

                </Box>

                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="trivago.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>Trivago.com</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>The goal of TRIVAGO-CLONE was to create a replica of trivago.
                        com that functions similarly to the original website. This includes the ability to browse hotels based on location, create an account, setting user preferences like check-in and check-out date , booking hotels as well as paying online. The project was developed using only HTML, CSS, JSON and JavaScript.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <SocialIcon color="red" link={"https://github.com/s17200/TRIVAGO-CLONE"} icon={"fa fa-github"} label={"github"} />
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://trivago-clone-s17200.netlify.app/", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>

                </Box>


                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="shop.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>Shop.com</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>The goal of Shop.com-Clone was to create a replica of Shop.
                        com that functions similarly to the original website. This includes the ability to browse products based on categories , create an account, setting user preferences like sort and filter , buying products as well as paying online. The project was developed using only HTML, CSS, and JavaScript.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <SocialIcon color="red" link={"https://github.com/s17200/www.shop.com"} icon={"fa fa-github"} label={"github"} />
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://bright-halva-d71d53.netlify.app/project.html", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>

                </Box>



                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="Ikea.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>Ikea.com</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>The goal of Ikea-Clone was to create a replica of Ikea.
                        com that functions similarly to the original website. This includes the ability to browse Home related products based on categories , create an account, setting user preferences like sort and filter , buying Home products as well as paying online. The project was developed using only React js, Redux, css, Bootstrap, chakra-ui and JavaScript.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <SocialIcon color="red" link={"https://github.com/s17200/Ikea-clone"} icon={"fa fa-github"} label={"github"} />

                    </Box>

                </Box>

            </Box>
        </>
    )
}
