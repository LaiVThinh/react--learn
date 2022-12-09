import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import "./styles.css";
ListPage.propTypes = {};

function ListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className="left">
            left
          </Grid>
          <Grid item className="right">
            right
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
