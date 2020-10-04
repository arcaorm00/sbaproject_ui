import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
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

const useStyles = makeStyles(styles);

const Login = (props) => {
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
        // {...rest}
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
                    <h3>Sign up</h3>
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
                      labelText="Last Name..."
                      id="last"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email"
                      }}
                    />
                    <CustomInput
                      labelText="Password..."
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        autoComplete: "off"
                      }}
                    />
                    <CustomInput
                      labelText="Gender..."
                      id="gender"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        autoComplete: "off"
                      }}
                    />
                    <CustomInput
                      labelText="Geography..."
                      id="geography"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        autoComplete: "off"
                      }}
                    />
                    <CustomInput
                      labelText="Age..."
                      id="age"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                  </CardFooter>
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