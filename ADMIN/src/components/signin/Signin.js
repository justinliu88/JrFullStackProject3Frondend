import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Copyright from "../Copyright.js";
import Background from "../../assets/login.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    image: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn(props) {
    const classes = useStyles();

    //React hooks
    const [loginErr, setLoginErr] = useState("");
    const login = (event) => {
        event.preventDefault();
        // const userName = event.target.elements.userName.value;
        // const passWord = event.target.elements.passWord.value;
        //alert(userName);
        if (props.userName === "admin" && props.passWord === "admin") {
            alert(`Login successful, welcome ${props.userName}`);
            props.history.push("/Dashboard");
        } else {
            alert("Please check your username and password");
            setLoginErr("Invalid");
        }
    };

    const ResetLoginErr = () => {
        //loginErr != "" ? loginErr : setLoginErr("");
        if (loginErr !== "") {
            return loginErr;
        } else {
            setLoginErr("");
            return loginErr;
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                className={classes.image}
            />{" "}
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>{" "}
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>{" "}
                    <ResetLoginErr />
                    <form className={classes.form} noValidate onSubmit={login}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="User Name"
                            name="userName"
                            autoComplete="User Name"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            name="passWord"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In{" "}
                        </Button>{" "}
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password ?
                                </Link>{" "}
                            </Grid>{" "}
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {" "}
                                    {"Don't have an account? Sign Up"}{" "}
                                </Link>{" "}
                            </Grid>{" "}
                        </Grid>{" "}
                        <Box mt={5}>
                            <Copyright />
                        </Box>{" "}
                    </form>{" "}
                </div>{" "}
            </Grid>{" "}
        </Grid>
    );
}
