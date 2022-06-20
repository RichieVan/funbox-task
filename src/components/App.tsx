import React from 'react';
import FoodCard from './FoodCard/FoodCard';
import BackgroundShadow from './BackgroundShadow/BackgroundShadow';

const App = () => (
  <div className="container">
    <header>
      <h1 className="main-header">Ты сегодня покормил кота?</h1>
    </header>
    <main>
      <div className="food-cards">
        <FoodCard
          name="Нямушка"
          filling="с фуа-гра"
          weightValue="0,5"
          slogan="Сказочное заморское яство"
          deselectSlogan="Котэ не одобряет?"
          footerText="Печень утки разварная с артишоками."
          features={[
            {
              numberValue: 10,
              text: 'порций',
            },
            {
              text: 'мышь в подарок',
            },
          ]}
        />
        <FoodCard
          selected
          name="Нямушка"
          filling="с рыбой"
          weightValue="2"
          slogan="Сказочное заморское яство"
          deselectSlogan="Котэ не одобряет?"
          footerText="Головы щучьи с чесноком да свежайшая сёмгушка."
          features={[
            {
              numberValue: 40,
              text: 'порций',
            },
            {
              numberValue: 2,
              text: 'мыши в подарок',
            },
          ]}
        />
        <FoodCard
          disabled
          name="Нямушка"
          filling="с курой"
          weightValue="5"
          slogan="Сказочное заморское яство"
          deselectSlogan="Котэ не одобряет?"
          footerText="Филе из цыплят с трюфелями в бульоне."
          features={[
            {
              numberValue: 100,
              text: 'порций',
            },
            {
              numberValue: 5,
              text: 'мышей в подарок',
            },
            {
              text: 'заказчик доволен',
            },
          ]}
        />
      </div>
    </main>
    <BackgroundShadow />
  </div>
);

export default App;
