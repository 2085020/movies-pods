import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  '@global': {
    'body, html, #root': {
      margin: 0,
      padding: 0,
      width: '100%',
    }
  },
  container: {
    display: 'grid',
    gridGap:'10px',
    gridTemplateColumns:'25% 75%',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    padding: '2rem',
    overflow: 'auto',
    backgroundColor: theme.palette.grey['200'],
    margin:'1px',
  }
});
