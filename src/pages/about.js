import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Title = styled.h1`
  color: #a2a1b2;
`;

const SecondPage = () => (
  <Layout>
    <Title>
      About Us
    </Title>
    <p>SPLNTR is a product of Barking Boz, LLC</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default SecondPage
