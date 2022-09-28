import {Alert,AlertIcon,AlertTitle,AlertDescription } from '@chakra-ui/react'

export default function AlertSuccess(){

    return(

        <Alert status='success'>
        <AlertIcon />
        <AlertTitle>Registration Succesfull</AlertTitle>
        <AlertDescription>Now You Can Login to Continue</AlertDescription>
        </Alert>
    )
}