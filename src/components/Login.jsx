import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Link from '@material-ui/core/Link';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from "@material-ui/icons/Lock";
// core components
import Header from "./sign/Header/Header.js";
import HeaderLinks from "./sign/Header/HeaderLinks.js";
import Footer from "./sign/Footer/Footer.js";
import GridContainer from "./sign/Grid/GridContainer.js";
import GridItem from "./sign/Grid/GridItem.js";
import Button from "./sign/CustomButtons/Button.js";
import Card from "./sign/Card/Card.js";
import CardBody from "./sign/Card/CardBody.js";
import CardHeader from "./sign/Card/CardHeader.js";
import CardFooter from "./sign/Card/CardFooter.js";
import CustomInput from "./sign/CustomInput/CustomInput.js";

import styles from "./sign/assets/jss/material-kit-react/views/loginPage.js";
import image from "./sign/assets/img/bg7.jpg";

import SignUp from "./SignUp"

//https://demos.creative-tim.com/material-kit-react/#/

const useStyles = makeStyles(styles);

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return <>
    <div>
      <Header
        absolute
        color="transparent"
        brand="Stock Price Prediction"
        // rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Login</h3>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  {/* <p className={classes.divider}>Or Be Classical</p> */}
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                    <Button simple color="primary" size="lg" onClick={() => this.props.history.push("/signup")}>
                      Sign up
                    </Button>
                  </CardFooter>
                  <div style={{padding: "0px 0px 20px 20px"}}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
        {/* <Footer whiteFont /> */}
      </div>
    </div>
</>
}

export default Login