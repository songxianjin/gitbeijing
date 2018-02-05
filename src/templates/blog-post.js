import React, { Component } from 'react'
import styled from 'styled-components'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Wrap>
      <div className="book-wrapper">
        <div className="chapter-contents">
          <h1 />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Wrap>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
const Wrap = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  .book-content {
    background: #f5f5f5;
  }
  .book-wrapper {
    width: 1000px;
    padding: 40px 0 60px;
    margin: 0 auto;
    background: #fff;
  }
  .contents-wrapper {
    background: #f5f5f5;
    padding: 30px 0;
  }
  .chapter-contents {
    width: 800px;
    margin: 0 auto;
    font-family: 'ProximaNova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    letter-spacing: 0.3px;
    line-height: 36px;
    font-size: 16px;
  }
  .chapter-contents h1 {
    font-family: 'Crete Round', Georgia, Times New Roman, serif;
    font-size: 24px;
    color: #e5533c;
    margin-top: 0;
    text-align: center;
  }
  .chapter-contents h3 {
    font-family: 'Crete Round', Georgia, Times New Roman, serif;
    font-size: 18px;
    color: #14877e;
  }
  .chapter-contents a {
    color: #14877e;
    text-decoration: none;
    border-bottom: 1px dotted #1bbfb1;
  }
  .book-wrapper img {
    display: block;
    max-width: 700px;
    margin: 20px auto;
  }
  .book-wrapper img[alt='certificates'] {
    display: block;
    width: 291px;
  }
`
