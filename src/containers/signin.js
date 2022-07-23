import React, {useState} from 'react';
import * as ROUTES from "../constants/routes";
import {Form} from '../components';
import homeBg from "../assets/images/home-bg.jpg";

export function SignInContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        alert("Sign In Button Clicked.");
    }

    return (
        <Form bg={homeBg}>
            <Form.Container>
                <Form.Title>Sign In</Form.Title>

                <Form.Base onSubmit={handleSubmit} method="POST">
                    <Form.Input
                        placeholder="Email address"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={email === "" || password === "" ? true : false} type="submit">
                        Sign In
                    </Form.Submit>
                </Form.Base>

                <Form.Text>
                    New to Netflix? <Form.Link to={ROUTES.HOME}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <Form.Link to={ROUTES.NULL}>Learn
                    more.</Form.Link>
                </Form.TextSmall>
            </Form.Container>
        </Form>
    );
}
