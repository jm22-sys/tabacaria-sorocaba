/* eslint-disable react/react-in-jsx-scope */
import { Link, LinkProps } from '@mui/material'
import NextLink from 'next/link'
import { forwardRef } from 'react'

const LinkTab = ({ children, href, ...params }: LinkProps, ref) => {
  return (
    <NextLink href={href} passHref>
      <Link {...params}>{children}</Link>
    </NextLink>
  )
}

export default forwardRef(LinkTab)
