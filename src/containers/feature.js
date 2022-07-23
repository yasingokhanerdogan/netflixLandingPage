import React from "react";
import {Feature, OptForm} from "../components";

import homeBg from "../assets/images/home-bg.jpg";

export const FeatureContainer = () => {
    return (
        <Feature>
            <Feature.Container bg={homeBg}>
                <Feature.Inner>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Container>
                            <OptForm.Input placeholder="Email address" />
                            <OptForm.Button>Try it now</OptForm.Button>
                            <OptForm.Break />
                            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        </OptForm.Container>
                    </OptForm>
                </Feature.Inner>
            </Feature.Container>
        </Feature>
    )
}