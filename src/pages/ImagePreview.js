import React, { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
  text-align: initial;
  border-radius: 6px;
  margin: 5px;
`

const Preview = styled.img`
  height: 600px;
  width: 600px;
  border-radius: 6px;
`

export const ImagePreview = ({ src }) => {

  return (
    <Container>
      <Preview src={src}></Preview>
    </Container>
  )
}

export default ImagePreview

