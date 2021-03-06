import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import './Layout.css'
import { Route } from 'react-router-dom';
import iRead from '../../projectsInfo/iRead/iRead';
import Shopify from '../../projectsInfo/Shopify/Shopify';
import TVscript from '../../projectsInfo/TVscript/TVscript';
import PyTorch from '../../projectsInfo/PyTorch/PyTorch';
import FlowerPrediction from '../../projectsInfo/FlowerPrediction/FlowerPrediction';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Skills from '../../components/Skills/Skills'
import ToDo from '../../projectsInfo/ToDo/ToDo'
import Experience from '../../components/Experience/Experience'
import '../../projectsInfo/FlowerPrediction/FlowerPrediction.css'

const Layout = (props) => {
  const history = useHistory();
  function onNavigateiRead() {
    history.push("/iRead");
  }
  function onNavigateShopify() {
    history.push("/Shopify");
  }
  function onNavigatePyTorch() {
    history.push("/PyTorch");
  }

  function onNavigateTVscript() {
    history.push("/TVscript");
  }
  function onNavigateFlowerPrediction() {
    history.push("/FlowerPrediction");

  }

  function onNavigateToDo() {
    history.push("/ToDo");
  }
  return (
    <div >
      <Container id="about" className="space-mobile-flower-prediction ne-layout-layout">
        <Row>
          <Col xs={12} className="col1 space-mobile-flower-prediction" md={6} xg={6} >
            <Container className="container-layout">
              <Image src={require('../../assets/me1.png')} />
              <h4 style={{ margin: 0 }}>Web/Mobile Developer</h4>
              <h4 >Software Engineer</h4>
            </Container>
          </Col>
          <Col xs={12} md={6} xg={6}>
            <div>
              <p className="p-layout">I'm a Mathematics student at University of Waterloo.
               I love working on projects such as <span>Mobile Apps</span> and <span>Web Apps
               </span> from <span>design to development</span> and in my spare time I like to
                learn more about deep learning (particularly NLP) and neural networks.
               </p>
              <p className="f-layout">Current software interests: Backend infrastruture, React,
               React Native, NLP and Algorithms
               </p>
            </div>
          </Col>
        </Row>
      </Container>
      <p className="space-skills"></p>
      <div id="experience">
        <Experience ></Experience>
      </div>
      <a id="projects" name="projects">
        <div className="div-color-layout">
          <h1 className="center-layout">Projects</h1>
          <CardGroup >
          <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white card-layout rounded">
              <Card.Img variant="top" src={require('../../assets/ToDo.png')} />
              <Card.Body>
                <Card.Title><span>To-Do App</span></Card.Title>
                <Card.Text className="hide1">
                  A Full Stack React Express Application where you can store you daily to-do list by creating
                  new tasks.
                </Card.Text>
                

                <Row>
                  <Col>
                    <Button className="block-layout" onClick={onNavigateToDo} variant="primary">About</Button>
                  </Col>
                  <Col>
                    <a href="https://github.com/J268sing/To-Do-App">
                      <Button className="block-layout" variant="primary">Github</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className=" card-layout shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/iRead.jpg')} />
              <Card.Body>
                <Card.Title><span> iRead</span></Card.Title>
                <Card.Text>
                  An android app for downloading and reading books.
                  <p className="hide">jashan</p>
                  <p className="hide">jashan</p>
                </Card.Text>
                <Row>
                  <Col>
                    <Button onClick={onNavigateiRead} className="block-layout" variant="primary">About</Button>
                  </Col>
                  <Col>
                    <a href="https://github.com/J268sing/iRead">
                      <Button className="block-layout" variant="primary">Github</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="card-layout shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/shopify2.png')} />
              <Card.Body>
                <Card.Title><span> Shopify Project</span></Card.Title>
                <Card.Text>
                  An android app that diplay at displays a Custom Collections list page and a Collection
                  Details page of products of a Merchant
                </Card.Text>
                <Row>
                  <Col>
                    <Button onClick={onNavigateShopify} className="block-layout" variant="primary">About</Button>
                  </Col>
                  <Col>
                    <a href="https://github.com/J268sing/shopify-project">
                      <Button className="block-layout" variant="primary">Github</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup >
          <Card style={{ width: '18rem' }} className="card-layout shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/Flower-Prediction.png')} />
              <Card.Body>
                <Card.Title><span>Flower Prediction</span></Card.Title>
                <Card.Text>
                  A CNN model trained using machine learning algorithms to predict the species of
                  flower from input flower image.
                  <p className="hide3">jashan</p>
                  <p className="hide3">jashan</p>
                </Card.Text>
                <Row>
                  <Col>
                    <Button onClick={onNavigateFlowerPrediction} className="block-layout" variant="primary">About</Button>
                  </Col>
                  <Col>
                    <a href="https://github.com/J268sing/Flower-Prediction">
                      <Button className="block-layout" variant="primary">Github</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className=" card-layout shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/TVscript.png')} />
              <Card.Body>
                <Card.Title><span>TV-Script-Generator</span></Card.Title>
                <Card.Text>
                  A recurrent neural network (RNN) that generates small new dialogues for Simpson's TV script
                  <p className="hide2">jashan</p>
                </Card.Text>
                <Row>
                  <Col>
                    <Button onClick={onNavigateTVscript} className="block-layout" variant="primary">About</Button>
                  </Col>
                  <Col>
                    <a href="https://github.com/J268sing/TV-Script-Generator">
                      <Button className="block-layout" variant="primary">Github</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="card-layout shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/pytorch.png')} />
              <Card.Body>
                <Card.Title><span>Deep Learning PyTorch</span></Card.Title>
                <Card.Text>
                  Jupyter Notebooks of implementations of various machine learning topics like transfer learning,
                  inference and validation, maxpooling visualization etc.
                </Card.Text>
                <Row>
                  <Col>
                    <Button onClick={onNavigatePyTorch} className="block-layout" variant="primary">About</Button>
                  </Col>
                  <Col>
                    <a href="https://github.com/J268sing/deep-learning-PyTorch">
                      <Button className="block-layout" variant="primary">Github</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
           
          </CardGroup>
        </div>
      </a>
      <div id="skills"> <Skills/></div>
      <Footer ></Footer>
      <Route path="/iRead" exact component={iRead} />
      <Route path="/PyTorch" exact component={PyTorch} />
      <Route path="/Shopify" exact component={Shopify} />
      <Route path="/FlowerPrediction" component={FlowerPrediction} />
      <Route path="/TVscript" exact component={TVscript} />
      <Route path="/ToDo" exact component={ToDo} />
    </div>
  );
}

export default Layout;