import { SxProps } from '@mui/material'
import { Theme } from '@mui/system'

export const tabProps: SxProps<Theme> = {
  '&:hover': {
    bgcolor: 'grey.100'
  },
  '&.Mui-selected': {
    bgcolor: 'grey.50',
    borderBottom: 0,
    fontWeight: 'bold'
  },
  borderRadius: '8px 8px 0px 0px',
  bgcolor: '#fffd',
  border: 1,
  borderColor: 'grey.300',
  ml: 1
}

export const tabsStyle: SxProps<Theme> = {
  overflow: 'unset',
  overflowY: 'visible',
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: 'secondary.main',
    marginLeft: '1px',
    marginRight: '1px'
  },
  '& .MuiTabs-scrollButtons': {
    display: 'inline-flex'
  },
  '& .MuiBadge-root': {
    overflow: 'visible'
  },
  '& .MuiTabs-scroller': {
    overflowX: 'visible'
  },
  mb: '-1px'
}
