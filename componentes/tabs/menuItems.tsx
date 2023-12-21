/* eslint-disable react/react-in-jsx-scope */
import BusinessIcon from '@mui/icons-material/Business'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import WorkIcon from '@mui/icons-material/Work'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import SearchIcon from '@mui/icons-material/Search'

export type MenuItem = {
  title: string
  href: string
  icon?: React.ReactNode
  queryBadge?: boolean
  blockRoles?: number[]
  childrens?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    title: 'Candidatos',
    href: '/candidatos',
    icon: <PersonIcon />,
    blockRoles: [7, 9, 10, 11, 12, 16, 17]
  },
  {
    title: 'Vagas',
    href: '/vagas',
    icon: <WorkIcon />,
    blockRoles: [7, 9, 10, 11, 12, 16, 17]
  },
  {
    title: 'Empresas',
    href: '/empresas',
    icon: <BusinessIcon />,
    blockRoles: [16]
  },
  {
    title: 'Agenda',
    href: '/agenda',
    icon: <CalendarMonthIcon />
  },
  {
    title: 'Comunicacao',
    href: '/comunicacao',
    icon: <EmailIcon />,
    blockRoles: [16],
    childrens: [
      { title: 'Email', href: '/email', blockRoles: [16] },
      {
        title: 'Email Aniversario',
        href: '/comunicacao/emailAniversario',
        blockRoles: [16]
      },
      {
        title: 'Feriados',
        href: '/feriados',
        blockRoles: [16]
      }
    ]
  },
  {
    title: 'Faturamento',
    href: '/faturamento',
    icon: <PointOfSaleIcon />,
    blockRoles: [16],
    childrens: [
      {
        title: 'Serviço',
        href: '/servico',
        icon: <EmailIcon />,
        blockRoles: [16]
      },
      {
        title: 'Faturamentos',
        href: '/faturamentos',
        icon: <WorkIcon />,
        blockRoles: [3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      }
    ]
  },
  {
    title: 'Pesquisa',
    href: '/pesquisa',
    icon: <SearchIcon />,
    blockRoles: [3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  }
]

export const existingItems: (role: number) => MenuItem[] = role =>
  menuItems.filter(({ blockRoles }) => !blockRoles?.includes(role))
