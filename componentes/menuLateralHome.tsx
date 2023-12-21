import { Avatar, Box, Drawer, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

export const MenuLateral: React.FC = ({ children }) => {
    const theme = useTheme()
    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} display="flex" alignItems="center" justifyContent={"center"}>
                    <Stack direction={'row'}  spacing={1} margin={1} alignItems="center">
                        <Avatar alt="Remy Sharp" src="src/assets/perfil.jpg" />
                        <Typography>
                            Usuario
                        </Typography>                        
                    </Stack>                 
                </Box>
                <Box  flexDirection={'column'}> 
                    {children}  
                </Box>
            </Drawer>
           
        </>
    )
}