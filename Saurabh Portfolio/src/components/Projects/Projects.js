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
                    <img style={{ height: "40%", borderRadius: "5px", }} src="governcrm.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>GovernCRM</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>Built the frontend from scratch using ReactJS, Zustand, React Leaflet, Python, and Django for a government-facing platform that connects over 250M U.S. voters with their representatives. Implemented dynamic UI components, real-time maps, and polling tools to enhance user engagement and accessibility.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://app.governcrm.us/login", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>
                </Box>

                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="mpp.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>MedicinePatentPool</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>Developed and customized core frontend components using ReactJS, Redux, Python, Django, and AWS for a platform used by pharmaceutical companies to manage licensing agreements with the WHO. Focused on delivering a seamless and efficient user experience in a complex, regulated environment.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://www.data-portal.medicinespatentpool.org/login", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>
                </Box>

                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="gridmaster.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>GridMaster</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>Integrated the Cashfree payment gateway and developed a secure wallet system using Wix, React Native, Python, and Django for a fantasy gaming platform centered around Formula 1 contests. Also provided ongoing technical support for mobile app features and real-time user interactions.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://www.gridmaster.live/", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>
                </Box>

                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="ajackus.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>Ajackus</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>Led the redesign and performance optimization of a corporate website with over 900 pages using ReactJS, WordPress, and AWS. Improved performance score from 30% to 75%, implemented scalable frontend architecture, and added programmatic SEO with dynamic case study pages for enhanced visibility and UX.</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <RemoveRedEyeIcon onClick={() => {
                            window.open("https://www.ajackus.com/", '_blank').focus()
                        }} fontSize='2.5rem' style={{ color: darkMode ? "white" : "black", cursor: "pointer" }} />
                    </Box>
                </Box>

                <Box style={Styles}>
                    <img style={{ height: "40%", borderRadius: "5px", }} src="placeprep.png" />
                    <h2 style={{ color: darkMode ? "black" : "white" }}>Placeprep</h2>
                    <p style={{ fontSize: "14px", color: darkMode ? "black" : "white", lineHeight: "1.3", fontFamily: "sans-serif", fontWeight: "500" }}>Placeprep.com is a Educational website where anybody can learn about coding related topics and languages. Placeprep allows you to give mcq test, apart from that it has two logins one for user login and another for admin with email validation , this website was developed using HTML,SCSS,CSS,Javascript,Bootstrap & JSON Server</p>
                    <Box
                        display={'flex'}
                        gap={'1.5rem'}
                        justifyContent={'center'}
                        fontSize={{ xs: '2rem', md: '2.5rem' }}
                        alignItems={'center'}
                    >
                        <SocialIcon color="red" link={"https://github.com/saurabh-sonvane/PlacePrep.com"} icon={"fa fa-github"} label={"github"} />
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
                        <SocialIcon color="red" link={"https://github.com/saurabh-sonvane/HoneyStore"} icon={"fa fa-github"} label={"github"} />
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
