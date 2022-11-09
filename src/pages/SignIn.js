import React from "react";
import { Container, Grid, Row, Col, Panel, Button } from "rsuite";
import firebase from "firebase/app";
import GooglePlusCircleIcon from "@rsuite/icons/legacy/GooglePlusCircle";
import { auth, database } from "../misc/firebase";

function SignIn() {
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      alert.success("Signed in", 4000);
    } catch (err) {
      alert.error(err.message, 4000);
    }
  };

  // const onFacebookSignIn = () => {
  //   signInWithProvider(new firebase.auth.FacebookAuthProvider());
  // };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome To Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3 text-center">
                <Button
                  color="red"
                  appearance="primary"
                  onClick={onGoogleSignIn}
                >
                  <GooglePlusCircleIcon /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn;
