import React from 'react';
import './Pages.css';
import CardItem from './CardItem';
import image1 from '../img-9.jpg'
import image2 from '../img-home.jpg'
import image3 from '../Crypto.jpg'
import image4 from '../gush.jpg'
import image5 from '../premier-league-restart.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image5}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Football'
              path='/services'
            />
            <CardItem
              src={image3}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Crypto'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Explore the hidden waterfall deep inside the Amazon'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={image2}
              text='JungleSet Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={image4}
              text='Ride with the best of cars'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;