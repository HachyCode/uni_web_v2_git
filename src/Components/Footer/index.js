import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Location,
  Phone,
  Email,
  ContactUs,
  Lines
} from './FooterElements';
import white_Logo from '../../Images/Logo_White.png';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <ContactUs>
        <Location>Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom</Location>
        <Lines>
            <Phone>01733 214466</Phone>
            <Email>hello@ucp.ac.uk</Email>
        </Lines>
        </ContactUs>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <img src={white_Logo} height="50px"/>
            </SocialLogo>
            <WebsiteRights>University Center Peterborough © 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink 
              href='https://www.facebook.com/ucpeterborough' 
              target='_blank' 
              aria-label='Facebook'>
                
              <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/channel/UCMGvV-0uiAtsnXLWOu7IfOA'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://twitter.com/ucpeterborough'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink 
              href='https://www.linkedin.com/company/university-centre-peterborough/' 
              target='_blank' 
              aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
