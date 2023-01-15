import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const API_KEY = 'Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx';

function App() {
  const columns = [
    {
        name: 'Alias',
        selector: row => row.alias,
    },
    {
        name: 'Coordinates',
        selector: row => row.latLong,
    },
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Phone',
        selector: row => row.phone,
    },
    {
        name: 'Price',
        selector: row => row.price,
    },
    {
        name: 'Rating',
        selector: row => row.rating,
    },
    {
        name: 'Actions',
        selector: ()=> <button>Detail</button>,
    },
];

   // [variable, function]
  let [data,setData] = useState([])
  let [search,setSearch] = useState([])
  useEffect(()=>{
    axios.get(`http://62teknologi-backend.test/api/business/get`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
    .then(response => {
      let business = response.data.data;
      business = business.map(busines => {
        busines.latLong = busines.coordinates.longitude + busines.coordinates.latitude
        busines.actions = ''
        return busines
      })
      console.log(business);
      setData(business);
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  },[])

  // handle search value
  const handleSearch = (e)=>{
    console.log(e);
    setSearch(e.target.value);
    // console.log(e.target.value);
  }

  // handle ketika button search di klik
  const handleButtonSerch = ()=>{
    axios.get(`http://62teknologi-backend.test/api/business/get?categories=` + search, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
    .then(response => {
      let business = response.data.data;
      business = business.map(busines => {
        busines.latLong = busines.coordinates.longitude + busines.coordinates.latitude
        return busines
      })
      // console.log(business);
      setData(business);
      // console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div>
      <h2>List Business</h2>

      <input class="search" type="text" onChange={handleSearch} placeholder="Cari..." required/>	
      <input class="button" type="button"onClick={handleButtonSerch} value="Cari"/>		

      <DataTable
        columns={columns}
        data={data}
      />
    </div>

  );
}

export default App;
