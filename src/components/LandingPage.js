import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/CallToAction';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShador: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80em',
    width: '100%',
  },
}));

export default function LandinPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  // animation options object
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // this option will stay the same for most Animations
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { setValue, setSelectedIndex } = props;

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      {/* ----- Hero block ----- */}
      <Grid item sm>
        <Grid container direction='row' justify='flex-end' alignItems='center'>
          {/* Left text */}
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing West Coast Technology
              <br /> to the Midwest
            </Typography>
            {/* Buttons */}
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to='/estimate'
                  variant='contained'
                  className={classes.estimateButton}
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant='outlined'
                  component={Link}
                  to='/revolution'
                  className={classes.learnButtonHero}
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Right animation(hands and CPU) */}
          <Grid item sm className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={'100%'}
              width={'100%'}
            ></Lottie>
          </Grid>
        </Grid>
      </Grid>

      {/* ----- Services Block ----- */}
      <Grid item>
        {/* Block #1: "Custom Software Development" */}
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
            />
          </Grid>
        </Grid>

        {/* Block #2: "iOS/Android Block" */}
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
            />
          </Grid>
        </Grid>

        {/* Block #3: "Website Development" */}
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
          <Grid item>
            <img
              className={classes.icon}
              alt='custom software icon'
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* ----- The Revolution Block ----- */}
      <Grid item>
        <Grid
          container
          style={{ height: '100em', marginTop: '12em' }}
          alignItems='center'
          justify='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant='outlined'
                    component={Link}
                    to='/revolution'
                    className={classes.learnButton}
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/* ----- Information Block ----- */}
      <Grid item>
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{ textAlign: matchesXS && 'center' }}
            direction={matchesXS ? 'column' : 'row'}
          >
            {/* About Us */}
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS && '10em' }}
                direction='column'
              >
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    component={Link}
                    to='/about'
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                    onClick={() => setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* Contact Us */}
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>
                  Say hello!{' '}
                  {/* I would probably delete this one, but let it stay for future reference */}
                  <span role='img' label='waving hand'>
                    ✋
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    component={Link}
                    to='/contact'
                    style={{ color: 'white', borderColor: 'white' }}
                    className={classes.learnButton}
                    onClick={() => setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* ----- Call To Action Block ----- */}
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
