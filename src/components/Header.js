import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [option1Status, setOption1Status] = useState(false);
  const [option2Status, setOption2Status] = useState(false);
  const [option3Status, setOption3Status] = useState(false);
  const [option4Status, setOption4Status] = useState(false);
  const [option5Status, setOption5Status] = useState(false);

  return (
    <Container>
      <Icon>
        <a href="#">
          <img src="images/logo.svg" alt="###" />
        </a>
      </Icon>
      <Menu>
        <p>
          <a href="#" onClick={() => setOption1Status(true)}>
            Vehicles
          </a>
        </p>

        <p>
          <a href="#" onClick={() => setOption2Status(true)}>
            Energy{" "}
          </a>
        </p>
        <p>
          <a href="#" onClick={() => setOption3Status(true)}>
            Charging
          </a>
        </p>
        <p>
          <a href="#" onClick={() => setOption4Status(true)}>
            Discover
          </a>
        </p>
        <p>
          <a href="#" onClick={() => setOption5Status(true)}>
            Shop
          </a>
        </p>
      </Menu>
      <Network>
        <a
          style={{
            border: " 3px solid black",
            borderRadius: " 50%",
            padding: "1px",
            height: "22px",
            width: "20px",
          }}
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height=".85em"
            viewBox="0 0 320 512"
          >
            <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
          </svg>
        </a>

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M256 48V64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H256zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
          </svg>
        </a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </Network>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Vehicles</a>
        </li>
        <li>
          <a href="#">Energy</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">United States</a>
        </li>
      </BurgerNav>
      <Option1 show1={option1Status}>
        <Products>
          <div>
            <div class="models"></div>
            <p>Model S</p>
            <a>Learn</a>
            <a>Order</a>
          </div>
          <div>
            <div class="model3"></div>
            <p>Model 3</p>
            <a>Learn</a>
            <a>Order</a>
          </div>
          <div>
            <div class="modelx"></div>
            <p>Model X</p>
             <a>Learn</a>
            <a>Order</a>
          </div>
          <div>
            <div class="modely"></div>
            <p>Model Y</p>
            <a>Learn</a>
            <a>Order</a>
          </div>
        </Products>
        <List>
          <a href="#">Inventory </a>
          <a href="#">Used Cars</a>
          <a href="#">Demo Drive</a>
          <a href="#">Trade-in</a>
          <a href="#">Help Me Choose </a>
          <a href="#"> Compare </a>
          <a href="#"> Fleet</a>
          <a href="#"> Cybertruck </a>
          <a href="#">Semi </a>
          <a href="#">Roadster</a>
        </List>
        <CloseWrapper>
          <CustomClose onClick={() => setOption1Status(false)} />
        </CloseWrapper>
      </Option1>
      <Option2 show2={option2Status}>
        <Products>
          <div>
            <p>Solar Panels</p>
            <a>Learn</a>
            <a>Order</a>
          </div>
          <div>
            <p>Solar Roof</p>
            <a>Learn</a>
            <a>Order</a>
          </div>
          <div>
            <p>Powerwall</p>
            <a>Learn</a>
            <a>Order</a>
          </div>
          <div>
            <p>Megapack</p>
            <a>Learn</a>
            <a>Order</a>
          </div>
        </Products>
        <List>
          <a href="#">Schedule a Consultation</a>
          <a href="#">Incentives </a>
          <a href="#">Support </a>
          <a href="#">Partner with Tesla</a>
          <a href="#">Commercial</a>
          <a href="#">Utilities</a>
        </List>
        <CloseWrapper>
          <CustomClose onClick={() => setOption2Status(false)} />
        </CloseWrapper>
      </Option2>
      <Option3 show3={option3Status}>
        <Products>
          <div>
            <p>Charging </p> <a href="##">Learn</a>
          </div>
          <div>
            <p>Home Charging</p>
            <a href="##"> Learn</a> <a href="##">Shop</a>
          </div>
          <div>
            <p>Supercharging </p>
            <a href="##"> Learn</a> <a href="##">Find</a>
          </div>
        </Products>
        <List>
          <a href="#">Charging Calculator</a>
          <a href="#">Trip Planner </a>
          <a href="#">Supercharger Voting </a>
          <a href="#">Host a Supercharger </a>
          <a href="#">Commercial Charging</a>
          <a href="#">Host Wall Connectors</a>
        </List>
        <CloseWrapper>
          <CustomClose onClick={() => setOption3Status(false)} />
        </CloseWrapper>
      </Option3>
      <Option4 show4={option4Status}>
        <List>
          {" "}
          <p>Resources</p>
          <a href="#">Demo Drive</a>
          <a href="#">Insurance </a>
          <a href="#">Video Guides</a>
          <a href="#">Customer Stories</a>
          <a href="#">Events</a>
        </List>
        <List>
          <p>Location Services</p>
          <a href="#">Find Us </a>
          <a href="#">Trip Planner</a>
          <a href="#">Find a Collision Center</a>
          <a href="#">Find a Certified Installer</a>
        </List>
        <List>
          <p>Company</p>
          <a href="#">About</a>
          <a href="#"> Careers</a>
          <a href="#"> Investor Relation</a>
        </List>
        <CloseWrapper>
          <CustomClose onClick={() => setOption4Status(false)} />
        </CloseWrapper>
      </Option4>
      <Option5 show5={option5Status}>
        <Products>
          {" "}
          <span>Charging</span>
          <span>Vehicle Accessories</span>
          <span>Apparel</span>
          <span>Lifestyle</span>
        </Products>
        <List></List>
        <CloseWrapper>
          <CustomClose onClick={() => setOption5Status(false)} />
        </CloseWrapper>
      </Option5>
    </Container>
  );
}
let Container = styled.div`
  height: auto;
  z-index: 1;
  position: fixed;
  background: transparent;
  margin-left: 15px;
  margin-right: 15px;
  min-height: 55px;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  padding: 0 20px;
  overflow: auto;
  justify-content: space-between;
  left: 0;
  right: 0;
  top: 0;
`;

let Menu = styled.div`
  background: transparent;
  display: flex;
  padding: 5px;
  overflow: hidden;
  justify-content: center;
  a {
    margin: 10px;
    padding: 16px;
    text-align: center;
  }
  a:hover {
    background-color: #d3d3d3;
    padding: 15px;
    margin: 11px;
    opacity: 0.85;
    font-weight: 700;
  }
  @media (max-width: 980px) {
    display: none;
  }

  p {
    font-size: 18px;
    flex-wrap: nowrap;
    font-weight: 700;
  }
`;
let Network = styled.div`
  a {
    margin: 5px;
    padding-left: 5px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

let Icon = styled.div`
  padding: 5px;
  a {
    padding: 9px;
    display: inline-block;
  }

  a:hover {
    background-color: #d3d3d3;
  }
  //
`;
let CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  display: none;
  margin-left: 4px;
  @media (max-width: 980px) {
    display: block;
  }
`;
let BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  width: 300px;
  z-index: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;

  text-align: start;
  list-style: none;
  li {
    padding: 20px 0;
    border-bottom: 1px solid black;
  }
  a {
    font-weight: 600;
  }
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
`;
let CustomClose = styled(CloseIcon)``;
let CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cusor: pointer;
`;

let List = styled.div`
  display: flex;
  margin: 20px;
  width: 15vw;
  font-size: 15px;
  align-items: flex-start;
  justify-content: center;
  a {
    height: 30px;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    transform: scale(1.1);
    transition: transform 1s ease-in-ease-out;
  }

  flex-direction: column;
  p {
    color: rgba(0, 0, 0, 0.65);
  }
`;

let Option1 = styled.div`
  background: #ebebeb;
  padding: 20px;
  text-align: center;
  font-size: 22px;
  color: #333;
  top: 60px;
  position: fixed;
  bottom: 140px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  transform: ${(props) =>
    props.show1 ? "translateY(0)" : "translateY(-200%)"};
  transition: transform 0.2s ease-in;
  List {
    a {
      font-size: 0.65rem;
    }
  }
  img {
    width: 20vw;
    height: 15vh;
  }
  Product ,
    .modely {
      height: 10vh;
      width: 10vh;
      backgroundImage: "url("./Mega-Menu-Vehicles-Model-Y.jpg")";
    }
    .models {
      height: 10vh;
      backgroundImage: "url("./Mega-Menu-Vehicles-Model-S.jpg")";
      width: 10vh;
    }
    .modelx {
      height: 10vh;
      background-image: url("./Mega-Menu-Vehicles-Model-X.jpg");
      width: 10vh;
    }

    .model3 {
      height: 10vh;
      background-image: url("./Mega-Menu-Vehicles-Model-3.jpg");
      width: 10vh;
    }
  }
`;
let Option2 = styled.div`
  background: #ebebeb;
  padding: 200px;
  text-align: center;
  font-size: 24px;
  color: #333;
  top: 60px;
  position: fixed;
  bottom: 299px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  transform: ${(props) =>
    props.show2 ? "translateY(0)" : "translateY(-200%)"};
  transition: transform 0.2s ease-in;
`;
let Option3 = styled.div`
  background: #ebebeb;
  padding: 200px;
  text-align: center;
  font-size: 24px;
  color: #333;
  top: 60px;
  position: fixed;
  bottom: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.show3 ? "translateY(0)" : "translateY(-200%)"};
  transition: transform 0.2s ease-in;
`;
let Option4 = styled.div`
  background: #ebebeb;
  padding: 80px;
  text-align: center;
  font-size: 24px;
  color: #333;
  top: 60px;
  display: flex;
  position: fixed;

  left: 0;
  right: 0;
  bottom: 50px;
  a {
    margin-top: 12px;
    height: 20px;
  }
  justify-content: center;
  align-items: flex-start;
  transform: ${(props) =>
    props.show4 ? "translateY(0)" : "translateY(-200%)"};
  transition: transform 0.2s ease-in;
  List {
    height: 300px;
    overflow-y: auto;
  }
`;
let Option5 = styled.div`
  background: #ebebeb;
  padding-top: 0px;
  text-align: center;
  font-size: 24px;
  display: flex;
  color: #333;
  top: 60px;
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.show5 ? "translateY(0)" : "translateY(-200%)"};
  transition: transform 0.2s ease-in;
`;
let Products = styled.div`
    display: flex;
    justify:content:center;
    align-items:center;
    font-size:20px;
    flex-wrap:wrap;
    height:45vh;
    padding-left:25px;
    border-right:2px solid grey;  
    span{
      
      text-align:center;
      margin:40px;
      font-weight:700;
    }
    a{
      font-size:.75rem;
      margin:.5rem;
    }
    p{
      font-weight:600;
      font-size:18  px;
    }
    div{
      text-align:center;
      margin:40px;
    }
  `;
export default Header;
