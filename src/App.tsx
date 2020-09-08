import {
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { Fragment } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem',
    padding: '.5rem'
  },
  titleDivider: {
    height: '.4rem',
    backgroundColor: theme.palette.primary.main
  }
}))

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <CssBaseline/>
      <Paper className={classes.root}>
        <Grid container justify='flex-start' direction='column'>
          <Typography variant='h4' color='primary'>
            前端工程师
          </Typography>
          <Divider className={classes.titleDivider} variant='fullWidth'/>
          <Typography variant='h2'>
            Himself65
          </Typography>
          <Grid container item>
            <Typography>
            himself65@outlook.com
            </Typography>
            <Divider orientation='vertical'/>
            <Typography>
              Github
            </Typography>
          </Grid>
          <Divider variant='middle'/>
          <Typography variant='h5' color='primary'>
            技能
          </Typography>
          <Divider/>
          <Typography variant='h5' color='primary'>
            开源项目
          </Typography>
          <Divider/>
          <Typography variant='h5' color='primary'>
            工作经历
          </Typography>
          <Divider/>
          <Typography variant='h5' color='primary'>
            教育背景
          </Typography>
        </Grid>
      </Paper>
    </Fragment>
  )
}

export default App
