import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "You can setup your wallet by connecting your crypto accouct in connect wallet option after that your wallet will be setup",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    desc: "You can collect nft by buying them from the market option which is present in navbar after that your are ready to create",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "You can add your own nft and become seller by adding them from option create in navbar after that your can add your Nft",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "You can list your nft for sale them from the creating option after that you can upload your file after that you can see your list",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;