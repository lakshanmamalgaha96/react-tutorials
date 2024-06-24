import './App.css';
import Car from './component/ClassComponent';
import Currency from './component/Currency';
import { MobilePhone } from './component/MobilePhone';

function App() {
  let brands = [{
    name: 'Apple',
    price: 50000
  },
  {
    name: "Samsung",
    price: 40000
  }
  ]

  let rates = [{ "currency": "AED", "tt_buying": 82.4, "tt_selling": 83.9, "bank_name": "Amana Bank", "timestamp": 1719225021000.0 }, { "cur_buying": 77.2763, "currency": "AED", "bank_name": "Bank of Ceylon", "cur_selling": 87.6843, "timestamp": 1719225052000.0 }, { "cur_buying": 79.39, "currency": "AED", "tt_buying": 80.91, "dd_buying": 80.54, "cur_selling": 85.32, "timestamp": 1719225037000.0, "dd_selling": 85.32, "tt_selling": 85.32, "bank_name": "Cargills Bank" }, { "cur_buying": 79.17, "currency": "AED", "tt_buying": 80.2, "cur_selling": 86.0, "timestamp": 1719225062000.0, "tt_selling": 86.0, "bank_name": "Commercial Bank" }, { "cur_buying": 77.86, "currency": "AED", "bank_name": "DFCC Bank", "cur_selling": 88.36, "timestamp": 1719225065000.0 }, { "cur_buying": 81.5042, "currency": "AED", "tt_buying": 81.5042, "dd_buying": 81.5042, "cur_selling": 84.7687, "timestamp": 1719225043000.0, "dd_selling": 84.7687, "tt_selling": 84.7687, "bank_name": "Hatton National Bank" }, { "cur_buying": 79.06, "currency": "AED", "tt_buying": 79.85, "dd_buying": 79.53, "cur_selling": 86.56, "timestamp": 1719225026000.0, "dd_selling": 86.56, "tt_selling": 86.56, "bank_name": "National Development Bank" }, { "currency": "AED", "tt_buying": 79.72, "dd_buying": 79.72, "timestamp": 1715920234000.0, "dd_selling": 84.42, "tt_selling": 84.42, "bank_name": "Nations Trust Bank" }, { "cur_buying": 79.2606, "currency": "AED", "tt_buying": 82.2889, "dd_buying": 0.0, "cur_selling": 86.1124, "timestamp": 1719225055000.0, "dd_selling": 83.9513, "tt_selling": 83.9513, "bank_name": "People's Bank" }, { "currency": "AED", "tt_buying": 81.3228, "tt_selling": 84.7687, "dd_buying": 81.1548, "bank_name": "Sampath Bank", "timestamp": 1719225037000.0 }, { "cur_buying": 72.0847, "currency": "AED", "tt_buying": 77.3205, "dd_buying": 75.4627, "cur_selling": 88.0596, "timestamp": 1719225261000.0, "dd_selling": 88.0596, "tt_selling": 88.0596, "bank_name": "Seylan Bank" }, { "currency": "AED", "tt_buying": 80.679, "dd_buying": 80.679, "timestamp": 1719225043000.0, "dd_selling": 85.588, "tt_selling": 85.588, "bank_name": "Standard Chartered Bank" }]

  return (
    <div className="App" style={{ color: "red" }}>
      <header className="App-header">
        <div></div>

        {/* {brands.map((phone) => {
          return <MobilePhone name={phone.name} price={phone.price}>

          </MobilePhone>
        })} */}

        {rates.map((currency)=>{
          return <Currency currency={currency.currency} selling={currency.tt_selling} buying={currency.tt_buying} bank={currency.bank_name}/>
        })}

        

      </header>
    </div>
  );
}

export default App;
