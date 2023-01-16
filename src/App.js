import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import SearchAndFilter from './components/SearchAndFilter';
import { getBusiness } from './api';


const API_KEY = 'Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx';


function App() {
  const columns = [
    {
        name: 'Alias',
        selector: row => row.alias,
    },
    {
        name: 'Coordinates',
        selector: row => `${row.coordinates.latitude} ${row.coordinates.longitude}`,
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

  const [queryParams, setQueryParams] = useState({
    term: null,
    location: null,
    latitude: null,
    longitude: null,
    categories: null,
    price: null,
    limit: 20,
    offset: 0,
    sort_by: 'best_match',
  })

  const handleQueryParams = (e) => {
    e.preventDefault();

    setQueryParams((queryParams) => ({
      ...queryParams,
      [e.target.name]: e.target.value || null,
    }));
  };

  const handleSubmitSearchAndFilter = async (e) => {
    e.preventDefault();

    if (!(queryParams.location || (queryParams.latitude && queryParams.longitude))) {
      return alert('Fill location or latitude & longitude!');
    }

    const response = await getBusiness(queryParams)
    setData(response.data.businesses)
  };

  return (
    <div>
      <h2 className='text-2xl font-bold'>List Business</h2>

      <SearchAndFilter handleQueryParams={handleQueryParams} queryParams={queryParams} handleSubmitSearchAndFilter={handleSubmitSearchAndFilter} />
      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </div>

  );
}

export default App;
