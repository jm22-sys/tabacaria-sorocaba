/* eslint-disable react/react-in-jsx-scope */
import { Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import LinkTab from './LinkTab'
import { MenuItem } from './menuItems'
import { tabProps, tabsStyle } from './tabStyle'

const tabItems: MenuItem[] = [
  {
    title: 'Produtos',
    href: `/empresa/[id]`
  },
  {
    title: 'Pods',
    href: `/empresa/[id]/contatos`
  },
  {
    title: 'SholderBags',
    href: `/empresa/[id]/historicos`
  },
  {
    title: 'Variedades',
    href: `/empresa/[id]/negociacoes`
  },
  {
    title: 'Promoções',
    href: `/empresa/[id]/contratos`
  }
]

type TabsHeaderProps = {
  tab?: number | false
}

const TabsHeader = ({ tab = false }: TabsHeaderProps) => {
  const theme = useTheme()
  const { query } = useRouter()
  const smBreakpoint = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <Box>
      <Tabs
        value={tab}
        variant={smBreakpoint ? 'fullWidth' : 'scrollable'}
        textColor="secondary"
        indicatorColor="secondary"
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
          style: { transition: 'none' }
        }}
        sx={tabsStyle}
      >
        {tabItems.map(({ href, title }, index) => (
          <Tab
            key={href}
            href={href.replace('[id]', query.id as string)}
            LinkComponent={LinkTab}
            label={title}
            value={index}
            sx={{ ...tabProps, ...(index == 0 && { ml: 0 }) }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default TabsHeader
