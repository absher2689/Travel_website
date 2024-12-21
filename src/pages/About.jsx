import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import Subtitle from '../shared/Subtitle'

const About = () => {
    return (
      <>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"About"}/>
          <h2 className="gallery__title">Light Your Dreams...</h2>
          </Col>
          <Col lg='12'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam dolorum autem illo enim iure reprehenderit atque vero sed dicta iste quo voluptates ullam labore aperiam culpa quia explicabo laudantium nisi, saepe officiis ducimus illum omnis porro! Distinctio maiores ratione doloribus atque veritatis blanditiis odio, temporibus recusandae ducimus dignissimos dolores nemo consequatur sapiente, enim voluptatem id, error nisi. Magni accusamus nesciunt eveniet, quo numquam sequi alias ullam a dolorem odit ea soluta ipsam vero magnam tenetur ducimus provident reprehenderit nulla voluptas hic, corrupti amet! Velit, illum pariatur quas porro dignissimos nostrum quasi accusamus animi ea facere, ab, tempore nihil est.</p>
          </Col>
        </Row>
      </Container>
    </section>  
      </>
    )}

    export default About