import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Number from './Number';
import Select from 'react-select';
import '../styles/selection.css';

const options = [
  { label: '48', value: '48' },
  { label: '72', value: '72' },
  { label: '96', value: '96' },
  { label: '120', value: '120' },
  { label: '144', value: '144' },
  { label: '168', value: '168' }
];

export default function Selection(props) {

  const [selectedOption, setSelectedOption] = useState();

  const handleChange = selectedOption => {
    setSelectedOption({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  let history = useHistory();
  const redirect = () => {
    history.push('/checkout');
  }


  return (
    <div className="selection">
      <div className="title">
        <Number number="1" className="number" />
        <h3>PICK YOUR QUANTITY</h3>
      </div>
      <div className="selection-dropdown">
        <p>Quantity:</p>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          defaultValue='48'
          placeholder='48'
          className="dropdownMenu"
        />
      </div>
      <div className="selection-price">
        <p>Price per cup: <strong>$5.49</strong></p>
      </div>
      <div className="title">
        <Number number="2" />
        <h3>CHOOSE YOUR ITEMS</h3>
      </div>
      <div className="selection-box">
        <img src="box/rect1.png" alt="fruity box" />
        <img src="box/rect2.png" alt="best seller box" />
        <img src="box/rect3.png" alt="fit box" />
      </div>
      <button className="selection-button continue-button" onClick={redirect}><strong>Continue</strong></button>
      <p className="selection-email">For bulk orders over 288 cups, please email:<br/> <u>wholesale@revivesuperfoods.com</u></p>
      <img src="cups.png" alt="Variety Cups" />
    </div>
  );
}