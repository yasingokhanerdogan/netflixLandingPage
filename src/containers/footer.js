import React from 'react';
import * as ROUTES from "../constants/routes";
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href={ROUTES.NULL}>FAQ</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Investor Relations</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Ways to Watch</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Corporate Information</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href={ROUTES.NULL}>Help Centre</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Jobs</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Terms of Use</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href={ROUTES.NULL}>Account</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Redeem gift cards</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Privacy</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href={ROUTES.NULL}>Media Centre</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Buy gift cards</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Cookie Preferences</Footer.Link>
          <Footer.Link href={ROUTES.NULL}>Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Turkey</Footer.Text>
    </Footer>
  );
}
