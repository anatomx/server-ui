import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Image from './Image'
import ImagePreview from './ImagePreview'
import ImagesContainer from './ImagesContainer'

const Visor = props => {

    const [preview, setPreview] = useState("https://picsum.photos/seed/6/60")

    return (
        <Container>
            <ImagePreview src={preview} />
            <ImagesContainer>
                <Image src="https://picsum.photos/seed/6/600" onClick={() => setPreview('https://picsum.photos/seed/6/600')} />
                <Image src="https://picsum.photos/seed/7/600" onClick={() => setPreview('https://picsum.photos/seed/7/600')} />
                <Image src="https://picsum.photos/seed/8/600" onClick={() => setPreview('https://picsum.photos/seed/8/600')} />
                <Image src="https://picsum.photos/seed/9/600" onClick={() => setPreview('https://picsum.photos/seed/9/600')} />
            </ImagesContainer>
        </Container>
    )
}

export default Visor
