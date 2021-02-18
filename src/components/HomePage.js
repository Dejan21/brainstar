import React, { Component } from 'react';
import Banner from '../components/Banner';
import CardsContainer from '../components/CardsContainer';
import SingleCard from '../components/SingleCard';
import { Popover, } from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            img:'banner_img'
        };
    }
    

   

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
                   
                   <CardsContainer title='За Нас'>
                     <div className='row'>
                         <div className='col-lg-4'>
                         
                          
                         
                         </div>

                     </div>
                     
                    </CardsContainer>

                </div>
            </div>
        );
    }
};

export default HomePage;