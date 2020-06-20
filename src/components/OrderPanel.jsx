import React from "react";
import { Field } from "../ui/Field";
import { useFetch } from "../utils/api";

export function SelectCrypto() {
  const [loading, cryptos] = useFetch(
    "https://fapi.binance.com/fapi/v1/ticker/price"
  );

  return (
    <select name="" id="">
      {loading
        ? "chargement..."
        : cryptos.map((crypto, i) => <option key={i}>{crypto.symbol}</option>)}
    </select>
  );
}

export default class OrderPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pair: [],
      price: 0,
      quantity: 0,
      tradeDirection: "buy",
      orderType: "market",
      takeProfit: 0,
      stopLoss: 0
    };
  }

  render() {
    const handleChange = function(e) {
      console.log(e.target.value);
      //      this.setState({
      //        [e.target.name]: e.target.value
      //      });
    };

    return (
      <div>
        <SelectCrypto />
        <div>
          <button>Acheter</button>
          <button>Vendre</button>
        </div>
        <div>
          <button>Marché</button>
          <button>Limite</button>
          <button>Stop</button>
        </div>
        <div>
          <Field name="price">Prix de l'ordre</Field>
        </div>
        <div>
          <Field name="quatity">Quantité</Field>
        </div>
        <div>
          <Field name="takeProfit">Take profit</Field>
          <select>
            <option>Pips</option>
            <option>%</option>
            <option>€</option>
          </select>
        </div>
        <div>
          <Field name="stopLoss">Stop Loss</Field>
          <select>
            <option>Pips</option>
            <option>%</option>
            <option>€</option>
          </select>
        </div>
      </div>
    );
  }
}
