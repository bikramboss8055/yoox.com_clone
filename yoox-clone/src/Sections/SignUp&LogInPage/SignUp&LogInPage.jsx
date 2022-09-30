import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from '@chakra-ui/react';
import EmailSignUp from "../../Components/SignUp&LogIn/EmailSignUp";
import FooterSignUp from "../../Components/SignUp&LogIn/FooterSignUp";
import NavbarSignUp from "../../Components/SignUp&LogIn/NavbarSignUp";
import SocialSignUp from "../../Components/SignUp&LogIn/SocialSignUp";


const initData={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    genStatus:false,
    terms:true
}
const logInInitData={
    email:"",
    password:""
}
export default function SignUpAndLogInPage(){
    const[signUpData,setSignUpData]=useState(initData)
    const[signUpDone,setSignUpDone]=useState(false)
    const[logInData,setLogInData]=useState(logInInitData)
    const[logInDone,setLogInDone]=useState(false)
    const toast=useToast()

    const handleChange=(e)=>{
        let valueToUpdate;
        const{name,value,type,checked}=e.target
        if(type==="checkbox"){
             valueToUpdate=checked
        }else if(type==="radio"){
             valueToUpdate=checked
        }else{
         valueToUpdate=value
        }
        setSignUpData({
            ...signUpData,  [name]:valueToUpdate
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(signUpData)
        if(signUpData.firstName.length!==0&&signUpData.email.length!==0&&signUpData.lastName.length!==0&&signUpData.password.length!==0&&signUpData.genStatus!==false&&signUpData.terms!==false){
                setSignUpDone(true)
                toast({
                    title: 'Registration Successful.',
                    description: "Your account has been created Succesfully",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                
        }else{
            // alert("PLease Fill all the credentials correctly")
            toast({
                title: 'PLease Fill all the credentials correctly',
                description: "Please fill all the deatails correctly",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }

    }
    const handleLogInChange=(e)=>{
        const{name,value}=e.target
        
        setLogInData({
            ...logInData,[name]:value
        })

    }
    const handleLogInClick=()=>{
        logInData.email===signUpData.email&&logInData.password===signUpData.password?toast({
            title: 'LogIn Successful.',
            description: "Congrats! Start Shopping",
            status: 'success',
            duration: 9000,
            isClosable: true,
          }):toast({
            title: 'PLease enter correct credentials',
            description: "Please fill the correct credentials",
            status: 'error',
            duration: 9000,
            isClosable: true,
          }) 

    }
    

    return(
        
        <Box>
           
        <NavbarSignUp handleChange={handleLogInChange} handleClick={handleLogInClick}/>
        {/* {
            signUpDone?<AlertSuccess/>:false
        } */}
        <SocialSignUp/>
        <EmailSignUp handleChange={handleChange} handleClick={handleClick} />
        
        <FooterSignUp/>
        </Box>
    )
}