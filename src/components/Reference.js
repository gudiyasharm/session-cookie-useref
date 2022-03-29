import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import SessionStorage from './SessionStorage';
import React, { useEffect, useRef } from 'react'

const Reference = () => {
    const inputRef = useRef()
    const showInput = () => {
        console.log(inputRef.current.value)
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <Container maxWidth="sm">
            <Box sx={{ height: '50vh', marginTop: '30px', boxShadow: '5px 10px 8px 10px #888888' }}>
                <input type="text" placeholder='Enter Name' ref={inputRef} style={{ marginTop: '40px', width: '50%', height: '10%' }} /> <br />
                <Button variant='contained' onClick={showInput} sx={{marginTop: '20px', width: '50%'}}>Submit</Button>
                <SessionStorage />
            </Box>
        </Container>
    )
}

export default Reference