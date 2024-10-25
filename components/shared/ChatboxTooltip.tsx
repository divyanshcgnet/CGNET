'use client'

import MUITooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

const ChatboxTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MUITooltip
    disableFocusListener
    enterTouchDelay={0}
    {...props}
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -0],
            },
          },
        ],
      },
    }}
    arrow
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#23225C',
    
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#23225C',
    color: '#fff',
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(16),
    borderRadius: theme.typography.pxToRem(8),
  },
}))

export default ChatboxTooltip
