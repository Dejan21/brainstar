import React, { Component } from 'react';
import Banner from '../components/Banner';
import CardsContainer from '../components/CardsContainer';
import SingleCard from '../components/SingleCard';
import { Popover, } from 'react-bootstrap';
import { NavLink, Link as NLink } from 'react-router-dom';
import SecondCard from '../components/SecondCard';
import SectionImageRight from'../components/SectionImageRight';
import {Button} from 'react-bootstrap';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            img:'banner_img'
        };
    }
    setAcademiesProps = () => {
        this.setState({
            title:"Едукација",
            img:"edukacija1",
        })
    };

   

  render() {
    const popover = (
        <Popover>
            <Popover.Content>
                <strong>
                    Местата се распродадени
                    </strong>
            </Popover.Content>
        </Popover>);
        return (
            <div className="HomePage">
                <Banner title="Центар за Учење, Кариера и Иновација" />
                <div className='main'>
                   <div className="container-fluid">

                   <CardsContainer title='За Нас'>
                     <div className='row'>
                         <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
                         {/* <NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                            <SecondCard img="edukacija1" title="Едукација"  />
                            {/* </NavLink>  */}
                         </div>
                        
                         <div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                        {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                            < SecondCard img='nastani' title="Настани"  />
                            {/* </NavLink> */}
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                        {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                            < SecondCard img='coworking' title="Coworking"  />
                            {/* </NavLink> */}
                            </div>
                         
                     </div>

                     <div className='row mt-4 '>
                           < div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                        {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                            < SecondCard img='prostor za nastani' title="Простор за настани"  />
                            {/* </NavLink> */}
                            </div>

                            < div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                        {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                            < SecondCard img='partnerstva so tech komp' title="Патнерства со tech компании"  />
                            {/* </NavLink> */}
                            </div>

                            < div className="col-lg-4 col-md-6 col-sm-12 col-12  "  >
                        {/* < NavLink className="card-link" target="_blank" rel="noreferrer" href="https://brainster.co" > */}
                            < SecondCard img='inovacii za komp' title="Иновации за компании"  />
                            {/* </NavLink> */}
                            </div>
 

                            </div>
                    
                     
                    </CardsContainer>

                    <SectionImageRight >

               <Button variant='black-primary'>АКАДЕМИИ</Button>
                  <Button className='yellow-secondary'>ЗА КОМАПНИИ</Button>
                    
                    </SectionImageRight>

                </div>
                </div>
            </div>
        );
    }
};

export default HomePage;