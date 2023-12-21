/* eslint-disable react/react-in-jsx-scope */
import { Box, Container, Divider, Typography } from '@mui/material'

const Footer = () => (  
  <>
    <Box
    component="footer"
    sx={{
      background:
        'linear-gradient(to right, #8880, #fffdeaa0, #f8f4ffa0, #8880)'
    }}
  >
    <Divider />
    <Container>
      <Typography m="auto" width="fit-content" textAlign="center">
        © 2023 - Tabac--015, Loja de artigos de tabacaria em Sorocaba.
      </Typography>
    </Container>
  </Box>
  </>
)

export default Footer