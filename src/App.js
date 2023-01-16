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


  //function untuk get data api
  const getData = (search, rating)=>{
    let baseUrl = `http://62teknologi-backend.test/api/business/get`
    let queryParams = `?categories=${search}&alias=${search}&name=${search}`
    if(rating){
      queryParams += `&rating=${rating}`
    }
    if(search){
      baseUrl += queryParams

    }
    axios.get(baseUrl, {
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
      // console.log(business);
      setData(business);
      // console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

   // [variable, function]
  let [data,setData] = useState([])
  let [search,setSearch] = useState([])
  let [filter,setFilterRating] = useState([])

  //jalankan getdata ketika component sudah termounted
  useEffect(()=>{
    getData()
  },[])

  // handle search value
  const handleSearch = (e)=>{
    // console.log(e);
    setSearch(e.target.value);
    // console.log(e.target.value);
  }

  // handle ketika button search di klik
  const handleButtonSerch = ()=>{
    getData(search,filter);
  }

  // handle ketika pilih filter
  const handleSelectedFilter = (e)=>{
    console.log(e.target.value);
    setFilterRating(e.target.value);
    getData(search,e.target.value);

  }

  return (
    <div>
      <h2>List Business</h2>

      <input class="search" type="text" onChange={handleSearch} placeholder="Cari..." required/>
      <input class="button" type="button"onClick={handleButtonSerch} value="Cari"/>

      <label htmlFor="rating">Rating</label>
      <select onChange={handleSelectedFilter} id='rating' value={filter}>
        <option value=""></option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </div>

  );
}

export default App;
