import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';

function Footer (){
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="box1"
        >
          <Grid alignItems="center" item xs={12}>
            <Box>
              <Box
                paddingTop={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  className="fontcolor"
                >
                  Siga-nos nas redes sociais{" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <a
                  href="https://www.facebook.com/generationbrasil"
                  target="_blank"
                >
                  <FacebookIcon className="redes" />
                </a>
                <a
                  href="https://www.instagram.com/generationbrasil/"
                  target="_blank"
                >
                  <InstagramIcon className="redes" />
                </a>
                <a
                  href="https://www.linkedin.com/school/generationbrasil/"
                  target="_blank"
                >
                  <LinkedInIcon className="redes" />
                </a>
              </Box>
            </Box>
            <Box className="box2">
              <Box paddingTop={1}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  gutterBottom
                  style={{ color: "black" }}
                >
                  © [Re]vista 2022 Copyright:
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    );
}

export default Footer;