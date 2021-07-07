import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Number from './Number';
import Select from 'react-select';
import '../styles/selection.css';

// values for dropdown menu
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

  // logic to show Items onClick
  const [showItems, setShowItems] = useState(false)
  const onClick = () => setShowItems(true)

  const pricePerCup = 5.49;

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  // send price and number of cups to Checkout Page
  let history = useHistory();
  const redirect = () => {
    history.push({
      pathname: '/checkout',
      state: {
        pricePerCup: pricePerCup,
        totalCups: selectedOption.value
      }
    });
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
        <p>Price per cup: <strong>${pricePerCup}</strong></p>
      </div>
      <div className="title">
        <Number number="2" />
        <h3>CHOOSE YOUR ITEMS</h3>
      </div>
      <div className="selection-box">
        <div className="selection-block">
          <img src="box/rect1.png" alt="fruity box" onClick={onClick} />
          <h5>FRUITY BOX</h5>
          <p>Perfect for the entire family</p>
        </div>
        <div className="selection-block">
          <img src="box/rect2.png" alt="best seller box" />
          <h5>BEST SELLER BOX</h5>
          <p>Our superfoodies’ favorites</p>
        </div>
        <div className="selection-block">
          <img src="box/rect3.png" alt="fit box" />
          <h5>FIT BOX</h5>
          <p>Our superfoodies’ favorites</p>
        </div>
      </div>
      {showItems ? <Items /> : null}
      <button className="selection-button continue-button" onClick={redirect}><strong>Continue</strong></button>
      <p className="selection-email">For bulk orders over 288 cups, please email:<br /> <u>wholesale@revivesuperfoods.com</u></p>
    </div>
  );
}

// Items to show onClick
const Items = () => (
  <div className="items">
    <h4>ITEMS IN THE FAMILY BOX</h4>
    <div className="image-group">
      <img src="pinkdragongroup.png" alt="pink dragon images" />
      <img src="pinkdragongroup.png" alt="pink dragon images" />
      <img src="pinkdragongroup.png" alt="pink dragon images" />
    </div>
    <div className="image-group-lp">
      <div className="image-group-alt">
        <img src="pinkdragon.png" alt="pink dragon" />
        <p>pink dragon</p>
      </div>
      <div className="image-group-alt">
        <img src="hintofmint.png" alt="hint of mint" />
        <p>hint of mint</p>
      </div>
      <div className="image-group-alt">
        <img src="pinkdragon.png" alt="pink dragon" />
        <p>pink dragon</p>
      </div>
      <div className="image-group-alt">
        <img src="hintofmint.png" alt="hint of mint" />
        <p>hint of mint</p>
      </div>
      <div className="image-group-alt">
        <img src="pinkdragon.png" alt="pink dragon" />
        <p>pink dragon</p>
      </div>
      <div className="image-group-alt">
        <img src="hintofmint.png" alt="hint of mint" />
        <p>hint of mint</p>
      </div>
      <div className="image-group-alt">
        <img src="pinkdragon.png" alt="pink dragon" />
        <p>pink dragon</p>
      </div>
      <div className="image-group-alt">
        <img src="hintofmint.png" alt="hint of mint" />
        <p>hint of mint</p>
      </div>
      <div className="image-group-alt">
        <img src="pinkdragon.png" alt="pink dragon" />
        <p>pink dragon</p>
      </div>
    </div>
  </div>
)
