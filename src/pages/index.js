import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Title = styled.h1`
  color: #a2a1b2;
`;

const IndexPage = () => (
  <Layout>

    <Title>
      Collaborate, Analyze, Optimize
    </Title>
    <p>Beta access signup available shortly</p>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
