export const ellipsisTextLine = (lines: number) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    wordBreak: 'break-all',
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical'
  })