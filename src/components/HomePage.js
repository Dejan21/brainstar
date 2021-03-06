import React, { Component } from 'react';
import Banner from '../components/Banner';
import CardsContainer from '../components/CardsContainer';
import SingleCard from '../components/SingleCard';
import { Popover, } from 'react-bootstrap';
import { NavLink, Link as NLink } from 'react-router-dom';
import SecondCard from '../components/SecondCard';
import SectionImageRight from'../components/SectionImageRight';
import {Button} from 'react-bootstrap';
import SectionImageLeft from '../components/SectionImageRight';
import {  Element } from 'react-scroll';


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
     <p>Дали се подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.</p>
               <Button className='black-btn mb-md-2 mb-sm-2 p-2 primaryon' onClick={this.setAcademiesProps}>АКАДЕМИИ</Button>
                  <Button className='yellow-btn btn-primary'onClick={this.setAcademiesProps}>ЗА КОМАПНИИ</Button>
                    
                    </SectionImageRight>

                    <CardsContainer title='НАСТАНИ'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                <SecondCard img='Codeworks' title='Codeworks' />
                             </div>

                             <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                <SecondCard img='instruktori' title='Deep Dive Into Marketing' />
                             </div>

                             <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                <SecondCard img='DDIDS' title='Codeworks' />
                             </div>

                        </div>

                        
                        <Element id="#coworking" name="#coworking">
                          <SectionImageLeft title='COWORKING' img='coworking' className='d-flex justify-content-left'>
                          <button className="black-button mr-2 p-2 text-linetrough btn-linetrough mb-md-2 mb-sm-2 mb-2">РЕЗЕРВИРАЈ МЕСТО</button>
                          </SectionImageLeft>
                         </Element>

                          </CardsContainer>

                          <SectionImageRight img='prostor_za_nastani' >
     <h1>ПРОСТОР ЗА НАСТАНИ</h1>
     <p>
      Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира го нашиот Brainster Space.</p>
               <Button className='black-btn mb-md-2 mb-sm-2 p-2 primaryon' onClick={this.setAcademiesProps}>АКАДЕМИИ</Button>
                   </SectionImageRight>
                          
                          

                </div>
                </div>
            </div>
        );
    }
};

export default HomePage;