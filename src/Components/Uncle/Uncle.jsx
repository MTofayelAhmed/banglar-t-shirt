import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
  const moneyArray = useContext(MoneyContext)
  const [money, setMoney]= moneyArray
  return (
    <div>
      <p>grandpa Money {money}</p>
      <h2>uncle</h2>
      <section className='flex'> 
        <Cousin>maria</Cousin>
        <Cousin>moriom</Cousin>
        <button onClick={()=> setMoney(money + 1000)}>money Button</button>
      </section>
    </div>
  );
};

export default Uncle;