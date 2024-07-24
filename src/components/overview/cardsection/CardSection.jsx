// CardSection.jsx
import React from 'react';
import Card from './Card';

import image1 from '../../../assets/dashboardImages/image1.png';
import image2 from '../../../assets/dashboardImages/image2.png';
import image3 from '../../../assets/dashboardImages/image3.png';
import image4 from '../../../assets/dashboardImages/image4.png';

import plus from '../../../assets/dashboardImages/plus.png';

{
  /*
import image1 from new URL('../../assets/dashboardImages/image1.png', import.meta.url);
import image2 from new URL('../../assets/dashboardImages/image2.png', import.meta.url);
import image3 from new URL('../../assets/dashboardImages/image3.png', import.meta.url);
import image4 from new URL('../../assets/dashboardImages/image4.png', import.meta.url);
import plus from new URL('../../assets/dashboardImages/plus.png', import.meta.url);

*/
}

const CardSection = () => {
  const cardsData = [
    {
      image: image1,
      name: 'Shalom Ishaku',
      income: '₦2000.00',
      incomeChange: '+10.25%',
      changeColor: 'green',
    },
    {
      image: image2,
      name: 'Nathaniel Varsha',
      income: '₦3000.00',
      incomeChange: '-13.50%',
      changeColor: 'red',
    },
    {
      image: image3,
      name: 'Temitope Varsha',
      income: '₦4000.00',
      incomeChange: '+20.00%',
      changeColor: 'green',
    },
    {
      image: image4,
      name: 'Tina Varsha',
      income: '₦2500.00',
      incomeChange: '-5.00%',
      changeColor: 'red',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:ml-[330px] gap-[8px] p-8 bg-gray-100 rounded-lg shadow-md">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          name={card.name}
          income={card.income}
          incomeChange={card.incomeChange}
          changeColor={card.changeColor}
        />
      ))}
      <img src={plus} alt="plus" className="hidden lg:block" />
    </div>
  );
};

export default CardSection;
