import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './PyTorch.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Footer from '../../components/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel'


class PyTorch extends Component {
    render() {
        return (
            <div>
                <Container className="intro-align-pytorch">
                    <Row  >
                        <Container className="align-pytorch">
                            <div className="center-image-pytorch" >
                                <Image src={require('../../assets/pytorch-logo.png')} />
                            </div>
                        </Container>
                    </Row>
                    <Row>
                        <div className="center-image-pytorch">
                            <h1><span>Deep Learning in PyTorch</span></h1>
                        </div>
                    </Row>
                </Container>
                <div className="div-general-black-pytorch">
                    <Row >
                        <h1>Basics of Neural Networks</h1>
                    </Row>
                    <Row>
                        <Col className="space-mobile-flower-prediction" xs={12} sm={8} md={8} lg={8} xg={8} >
                            <div >
                                <Carousel >
                                    <Carousel.Item>
                                        <Container  >
                                            <img
                                                className="d-block w-100 "
                                                src={require('../../assets/ten.png')}
                                                alt="First slide"
                                            />
                                        </Container>
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Container  >
                                            <img
                                                className="d-block w-100 "
                                                src={require('../../assets/neural-net.jpeg')}
                                                alt="First slide"
                                            />
                                        </Container>
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Container  >
                                            <img
                                                className="d-block w-100 "
                                                src={require('../../assets/neural-hd.jpg')}
                                                alt="First slide"
                                            />
                                        </Container>
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xg={4}>
                            <h4> For implementation details click on the links below:</h4>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/Part%201%20-%20Tensors%20in%20PyTorch%20.ipynb">
                                <Button className="marg-pytorch" variant="outline-light">Tensors in PyTorch</Button>
                            </a>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/Part%202%20-%20Neural%20Networks%20in%20PyTorch%20.ipynb">
                                <Button className="marg-pytorch" variant="outline-light">Basic Neural Networks</Button>
                            </a>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/Part%203%20-%20Training%20Neural%20Networks.ipynb">
                                <Button className="marg-pytorch" variant="outline-light">Training Neural Networks </Button>
                            </a>
                        </Col>
                    </Row>
                </div>
                <div className="div-general-white-pytorch">
                    <Row >
                        <h1>Transfer Learning</h1>
                    </Row>
                    <Row >
                        <Col xs={12} md={8} xg={8}>
                            <div >
                                <Carousel className="carousel-height-1 space-mobile" >
                                    <Carousel.Item>
                                        <Container  >
                                            <img
                                                className="d-block w-100   carousel-center-image-pytorch"
                                                src={require('../../assets/transfer-learning.png')}
                                                alt="First slide"
                                            />
                                        </Container>
                                        <Carousel.Caption>
                                            <h3 className="carousel-caption-pytorch">Content Image, Style reference</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Container>
                                            <img
                                                className="d-block w-100 carousel-center-image-pytorch"
                                                src={require('../../assets/final-transfer-learning.png')}
                                                alt="Third slide"
                                            />
                                        </Container>
                                        <Carousel.Caption>
                                            <h3 className="carousel-caption-pytorch">Content Image, Final Image</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                        <Col xs={12} md={4} xg={4}>
                            <p> Neural style transfer is an optimization technique used to take three images, a
                                <span>content</span>  image, a <span>style reference</span> image
                                and the <span>input</span> image you want to style — and blend them
                                together such that the input image is transformed to look like the
                                content image, but “painted” in the style of the style image.
                            </p>
                            <Card className="shadow card1-pytorch  bg-dark rounded" text="white" >
                                <Card.Body>Pre-trained Model: VGG19 Convolutional Network,
                            Optimizer: Adam,
                            Activation Function: ReLu,
                            Pooling Layer: MaxPool2d,
                            Kernel size: (3,3),
                            Padding: (1,1),
                            Stride(1,1)</Card.Body>
                            </Card>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/Part%208%20-%20Transfer%20Learning%20.ipynb">
                                <Button className="marg-pytorch" variant="outline-dark">Transfer Learning</Button>
                            </a>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/Style_Transfer.ipynb">
                                <Button className="marg-pytorch" variant="outline-dark">Style Transfer</Button>
                            </a>
                        </Col>
                    </Row>
                </div>
                <div className="div-general-black1-pytorch">
                    <Row className="space-mobile" >
                        <h1>Jupyter Notebook Imlementations of More Deep Learning Concepts</h1>
                    </Row>
                    <Row >
                        <Col xs={12} md={4} xg={4}>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/Part%205%20-%20Inference%20and%20Validation%20.ipynb" class="card-link">
                                <Card className="shadow card1-pytorch  bg-light rounded text-dark " >
                                    <Card.Body><p><span>Inference and Validation</span></p>
                                        Validation is very important to measure the model's performance on data that isn't part of the training set.
                                        In this notebook, I validate the pre-trained model and then use it for inference.
                                </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col xs={12} md={4} xg={4}>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/conv_visualization.ipynb" class="card-link">
                                <Card className="shadow card1-pytorch  bg-light rounded text-dark ">
                                    <Card.Body><p><span>Convolutional Visualization</span></p>
                                        In this notebook, four filtered outputs of a convolutional layer are visualized.
                                        Visualization can detect general patterns like edges, texture, background etc. This
                                        helps us understand how the model works and to find  out the failures of the model and getting an intuition of why they fail.
                                </Card.Body>
                                </Card>
                            </a>
                        </Col>
                        <Col xs={12} md={4} xg={4}>
                            <a href="https://github.com/J268sing/deep-learning-PyTorch/blob/master/maxpooling_visualization.ipynb" class="card-link">
                                <Card className="shadow card1-pytorch  bg-light rounded text-dark ">
                                    <Card.Body><p><span>Maxpooling Visualization</span></p>
                                        In this notebook, we add and visualize the output of a maxpooling layer in a CNN.
                                        A convolutional layer + activation function, followed by a pooling layer, and a linear layer make up the basic layers of a CNN.
                                </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </div>
                <p className="space-skills"></p>
                <Footer></Footer>
            </div>
        )
    }
}

export default PyTorch;