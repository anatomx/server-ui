import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Image from './Image'
import ImagePreview from './ImagePreview'
import ImagesContainer from './ImagesContainer'

const Visor = props => {

    const [preview, setPreview] = useState("/images/head.jpg")

    return (
        <Container>
            <ImagePreview src={preview} />
            <ImagesContainer>
                <Image src="/images/head.jpg" onClick={() => setPreview('/images/head.jpg')} />
                <Image src="/images/pelvis.jpg" onClick={() => setPreview('/images/pelvis.jpg')} />
                <Image src="/images/knee.jpg" onClick={() => setPreview('/images/knee.jpg')} />
            </ImagesContainer>
        </Container>
    )
}

export default Visor
