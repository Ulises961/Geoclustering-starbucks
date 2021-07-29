import Layout from "../component/Layout/Layout";
import {
  Button,
  CardContent,
  CardHeader,
  Container,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Authenticator } from "./api/authenticationServices";
import Cookies from "js-cookie";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    margin: " 5rem auto ",
    padding: "1rem",
    height: "80%",
    maxWidth: "50%",
  },
  textField: {
    margin: "20px auto 15px auto",
    width: "100%",
  },
  buttonLogin: {
    color: "black",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [repPswd, setRepPswd] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (password !== repPswd) {
      setError(true);
      setHelperText("Passwords do not match");
    } else {
      setError(false);
      setHelperText("");
    }
  }, [repPswd, password]);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setMessage("Invalid input, please check the fields");
    if (error) {
      setIsError(true);
      return;
    }
    const api = new Authenticator();

    const response = await api
      .register({ username: username, email: email, password: password })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setMessage(" Error while registering");
        Cookies.remove("SESSION_KEY");
      });
  };

  const classes = useStyles();
  return (
    <Layout>
      <Container>
        {" "}
        <Card className={classes.root}>
          <CardHeader title="Registration Form"></CardHeader>

          <CardContent className={classes.content}>
            <form onSubmit={onSubmit}>
              <div className={classes.textField}>
                <TextField
                  id="usernameInput"
                  label="Username"
                  variant="outlined"
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className={classes.textField}>
                <TextField
                  id="usernameInput"
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={classes.textField}>
                <TextField
                  id="passwordInput"
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className={classes.textField}>
                <TextField
                  id="passwordInput"
                  label="Repeat password"
                  error={error}
                  helperText={helperText}
                  variant="outlined"
                  required
                  type="password"
                  onChange={(e) => {
                    setRepPswd(e.target.value);
                  }}
                />
              </div>
              <Button
                className={classes.buttonLogin}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </form>
            {isError && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Invalid Credentials — <strong>Try again</strong>
              </Alert>
            )}
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
}
