import { useState } from 'react';
import { prodData } from '../../prodData/prodData';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import IconSwitch from '../IconSwitch/IconSwitch';

export default function Store() {
    const [state, setState] = useState("view_module");

  return (
    <div>
      <IconSwitch icon={state} onSwitch={setState}/>
      {state === 'view_module' ? <CardsView cards={prodData}/> : <ListView items={prodData}/>}
    </div>
  )
}
