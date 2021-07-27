import Layout from "../../component/Layout/Layout";
import Cookies from "js-cookie";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { Authenticator } from "../api/authenticationServices";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    margin: " 5rem auto ",
    padding: "1rem",
    height: "50vh",
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

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    try {
      const api = new Authenticator();
      const response = await api.login( {username : username,  password: password});
      if(response.ok)
      console.log("sucess!!!!!", Cookies.get('SESSION_KEY'));
      
    } catch (err) {
        console.log(err);
      setIsError(true);
    }
  };
  const classes = useStyles();
  return (
    <Layout>
      <Container>
        <Card className={classes.root}>
          <CardHeader title="Log in"></CardHeader>

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
                  id="passwordInput"
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
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
                <div>
        <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
        )}
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
}
