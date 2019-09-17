import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import LocationIcon from '@material-ui/icons/LocationOn';
import BagIcon from '@material-ui/icons/LocalMall';
import MoreIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../img/logo.png';
import photo from '../img/test.jpg';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import footer from '../img/footer.png'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import etiqueta from '../img/etiqueta.png'
import { useMediaQuery } from 'react-responsive'
import etiquetaMobile from '../img/etiquetaMobile.png'
import footerMobile from '../img/footerMobile.png'
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    marginLeft: theme.spacing(26),
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  media: {
    height: 140,
  },
  card: {
    maxWidth: 345,
  },
  tab: {
    marginTop: theme.spacing(6),
  },
  paper: {
    marginTop: theme.spacing(6),
    width: '100%'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '90%',
    height: '90%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: theme.spacing(2),
    float: 'right'
  },
  buttonMobile: {
    marginTop: theme.spacing(2),
    margingLeft: theme.spacing(10)
  },
  footer: {
    marginTop: theme.spacing(6),
  },
  footerMobile: {
    marginTop: theme.spacing(10),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
    paddingTop: theme.spacing(1)
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [values, setValues] = useState({ name: '', lastname: '', email: '', phone: '', city: '', message: '', gender: '' });
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  const [selectedIndex, setSelectedIndex] = React.useState(1);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3001/api/product");
      res
        .json()
        .then(res => setData(res.products))
        .catch(err => setErrors(err));
    }

    fetchData();
  });


  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleChangeTab(event, newValue) {
    setValue(newValue);
  }

  function sendMessage() {
    console.log(data)
    
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }


  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Tiendas</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <LocationIcon />
          </Badge>
        </IconButton>
        <p>Listas de deseos</p>
      </MenuItem>
      <MenuItem>
       <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={0} color="primary">
              <BagIcon />
            </Badge>
          </IconButton>
           <p>Mi bolsa</p>
        </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


const submenu = (
   <div className={classes.root}>
        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            <ListItemText primary="When device is locked" />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        {data.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={event => handleMenuItemClick(event, index)}
            >
              {option.type}
            </MenuItem>
        ))}
        </Menu>
      </div>
);

  return (
    <div >
      { (isDesktopOrLaptop) ? (
        <div>
      <Toolbar>
        <img src={etiqueta} width="40px" height="120px"></img>
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            id="standard-name"
            placeholder="¿ Qué estás buscando ?"
            value=""
            onChange={handleChange('name')}
            margin="normal"
            style={{
              width: '200px'
            }}
          />
        </div>
        <div style={{ marginLeft: '10%', justifyContent: 'center' }}> <img src={logo} width="20%" height="20%" /></div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={0} color="primary">
              <FavoriteIcon />
              <Typography variant="caption" display="block" gutterBottom>
                Tienda
                  </Typography>
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <LocationIcon />
              <Typography variant="caption" display="block" gutterBottom>
                Lista de deseos
                </Typography>
            </Badge>
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={0} color="primary">
              <BagIcon />
              <Typography variant="caption" display="block" gutterBottom>
                Mi bolsa
                </Typography>
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>

        </div>

        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Paper className={classes.tab}>
         <Tabs
            value={value}
            onChange={handleChangeTab}
            // indicatorColor="primary"
            textColor="primary"
            centered
          >
            {data.map((item, index) => 
          (
            <Tab label={item.type} />
          )
        )}
      </Tabs>
      </Paper>
      
      <TabPanel value={value} index={0}>
    {submenu} 
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
       Not Data Básicos Infantibles
      </TabPanel>
      <TabPanel value={value} index={5}>
        Not Data Novedades
      </TabPanel>
      <TabPanel value={value} index={6}>
        Not Data Rabajas
      </TabPanel>
      <div className={classes.tab}></div>

      <Divider variant="middle" />

      <Paper className={classes.paper}>
        <Grid container alignContent="center">
          <Grid item md={6}>
            <Typography variant="h5"
              gutterBottom
              color="primary"
            >
              LOREM IPSUM DOLOR SIT
              </Typography>
            <form >
              <FormControl className={classes.formControl}>
                <TextField
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange('email')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  name="name"
                  label="name"
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  name="lastname"
                  label="lastname"
                  value={values.lastname}
                  onChange={handleChange('lastname')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  name="phone"
                  label="Phone"
                  value={values.phone}
                  onChange={handleChange('phone')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Gender</InputLabel>
                <Select
                  placeholder="gender"
                  value={values.gender}
                  onChange={handleChange('gender')}
                  label="gender"
                  margin="none"
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">City</InputLabel>
                <Select
                  placeholder="city"
                  value={values.city}
                  onChange={handleChange('city')}
                  label="city"
                  margin="none"
                >
                  <MenuItem value={1}>Bogotá</MenuItem>
                  <MenuItem value={2}>Medellín</MenuItem>
                  <MenuItem value={3}>Cali</MenuItem>
                </Select>
              </FormControl>
              <TextareaAutosize
                name="message"
                value={values.message}
                onChange={handleChange('message')}
                rows={3}
                placeholder="message"
                style={{
                  width: '89%',
                  marginTop: '15px',
                  marginLeft: '5px'
                }}
              />
            </form>
            <Button variant="contained" color="primary" className={classes.button} onClick={sendMessage}>
                Enviar
            </Button>
          </Grid>
          <Grid item md={6}>
            <img className={classes.img} alt="complex" src={photo} />
          </Grid>
        </Grid>
        <div className={classes.footer}> <img src={footer} width="100%" /> </div>
      </Paper>

      {renderMobileMenu}
      {renderMenu}
      </div>
        ) : (
      <div>
        <img src={etiquetaMobile} width="100%" height="10%"></img>
        <Toolbar>
        <div >
           <IconButton aria-label="show 4 new mails" color="inherit">
          <SearchIcon  />
        </IconButton>
        </div>
        <div style={{ justifyContent: 'center' }}> <img src={logo} width="30%" height="30%" /></div>
        <div className={classes.grow} />
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Paper className={classes.paper}>
         <Typography variant="h5"
              gutterBottom
              color="primary"
            >
              LOREM IPSUM DOLOR SIT
              </Typography>
            <form >
              <FormControl className={classes.formControl}>
                <TextField
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange('email')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  name="name"
                  label="name"
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  name="lastname"
                  label="lastname"
                  value={values.lastname}
                  onChange={handleChange('lastname')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  name="phone"
                  label="Phone"
                  value={values.phone}
                  onChange={handleChange('phone')}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Gender</InputLabel>
                <Select
                  placeholder="gender"
                  value={values.gender}
                  onChange={handleChange('gender')}
                  label="gender"
                  margin="none"
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">City</InputLabel>
                <Select
                  placeholder="city"
                  value={values.city}
                  onChange={handleChange('city')}
                  label="city"
                  margin="none"
                >
                  <MenuItem value={1}>Bogotá</MenuItem>
                  <MenuItem value={2}>Medellín</MenuItem>
                  <MenuItem value={3}>Cali</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
              <TextareaAutosize
                name="message"
                value={values.message}
                onChange={handleChange('message')}
                rows={3}
                placeholder="message"
              />
            </FormControl>
         <br></br>
              <Button variant="contained" color="primary" className={classes.buttonMobile} onClick={sendMessage}>
                Enviar
            </Button>
            </form>
 <div className={classes.footerMobile}> <img src={footerMobile} width="100%" /> </div>
      </Paper>
      {renderMobileMenu}
            {renderMenu}
      </div>
        )  }

    </div>
  );
}