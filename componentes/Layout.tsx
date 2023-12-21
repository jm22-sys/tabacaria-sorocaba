/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  Box,
  Container,
  Paper,
  Typography,
  SxProps,
  Breakpoint
} from '@mui/material'
import Head from 'next/head'
import Footer from '../componentes/Footer'
import { Theme } from '@mui/system'
import { ReactNode } from 'react'
import { ellipsisTextLine } from '../componentes/commonString'
import { MenuLateral } from './menuLateralHome'
import TabsHeader from '../componentes/tabs/tabMenu'
import {MiniDrawer} from '../componentes/tabs/menuLateral'

type Props = {
  children?: ReactNode
  headTitle?: string
  contentTitle?: string
  contentSubtitle?: string
  pageHeader?: ReactNode
  paperProps?: SxProps<Theme>
  topTab?: number
  maxWidth?: false | Breakpoint
  centerTitle?: true
  preTitleNode?: React.ReactNode
  minWidth?: false | Breakpoint
}
const maxWidthMenu = 1200
const minWidthMenu = 200 
const Layout = ({
  children,  
  contentTitle,
  contentSubtitle,
  pageHeader,
  paperProps,  
  maxWidth = 'xl',  
  centerTitle,
  preTitleNode
}: Props) => (
  <>
    <Box
      position="fixed"
      height="100vh"
      width="200vw"
      zIndex={-1}
      sx={{
        backgroundColor: 'grey',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(1.2px)'
      }} />
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      minWidth={200}
      maxWidth="100vw"
      bgcolor="#5555"
      overflow="hidden"
      flex={1}
    >
      <Head>
        <title>
          {'Tab - 015'}
        </title>
        <link rel="icon" href="/ic_qh_round.png" />
      </Head>
      <Container sx={{ flex: 1, p: { xs: 1, sm: 3 } }} maxWidth={maxWidth}>
        {pageHeader}
      <Box maxWidth={1200} sx={{ display: 'flex' }}>
        <Box minWidth={minWidthMenu} width="30%">
          <MiniDrawer>
            
          </MiniDrawer>
        </Box>
        <Box minWidth={800} width="70%">
          <TabsHeader />
        </Box>
      </Box>
    </Container>
      <Footer />
    </Box>
  </>
)

export default Layout
