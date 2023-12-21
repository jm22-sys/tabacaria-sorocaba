/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Head from 'next/head'
import {
  Box,  
  Paper,
  Container,
  Typography,
  SxProps,
  Breakpoint
} from '@mui/material'
import { Theme } from '@mui/system'
import { ReactNode, useContext } from 'react'
import Banner from '../assets/banner9.svg'
import Footer from '../../componentes/Footer'
import {ellipsisTextLine} from '../../componentes/commonString'
import {MenuLateral} from '../../componentes/menuLateralHome'
import Layout from '../../componentes/Layout'

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
} 

const Home = ({
  children,
  headTitle,
  contentTitle,
  contentSubtitle,
  pageHeader,
  paperProps,
  topTab,
  maxWidth = 'xl',
  centerTitle,
  preTitleNode
}: Props) => {

  return (
    <>
      <Layout>
            
      </Layout>  
    </>    
  )
}

export default Home
