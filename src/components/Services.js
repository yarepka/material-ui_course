import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';

import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1rem',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      marginTop: '1em',
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const { setValue, setSelectedIndex } = props;

  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: !matchesSM && '5em',
          marginTop: matchesSM && '1em',
        }}
      >
        <Typography variant='h2' style={{ textAlign: matchesSM && 'center' }}>
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* Block #1: "iOS/Android Block" */}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM && 'center',
              width: !matchesSM && '35em',
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {!matchesSM && <br />} widh either mobile platform.
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: !matchesSM && '5em' }}>
            <img
              className={classes.icon}
              alt='iOS/Android icon'
              src={mobileAppsIcon}
              width='250em'
            />
          </Grid>
        </Grid>

        {/* Block #2: "Custom Software Development" */}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM && 'center'}
        >
          <Grid
            item
            style={{
              marginLeft: !matchesSM && '5em',
              textAlign: matchesSM && 'center',
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration</span>.
            </Typography>
            <Button
              component={Link}
              to='/customsoftware'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common} />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt='custom software icon'
              src={customSoftwareIcon}
              width='250em'
            />
          </Grid>
        </Grid>

        {/* Block #3: "Website Development" */}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM && 'center',
              width: !matchesSM && '35em',
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, build for speed.
            </Typography>
            <Button
              variant='outlined'
              component={Link}
              to='/websites'
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: !matchesSM && '5em' }}>
            <img
              className={classes.icon}
              alt='custom software icon'
              src={websitesIcon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
