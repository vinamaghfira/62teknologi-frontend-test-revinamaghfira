import { useState } from 'react';
import DataTable from 'react-data-table-component';
import SearchAndFilter from '../../components/SearchAndFilter';
import { getBusiness } from '../../api';
import { Link } from 'react-router-dom'


function Home() {
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
        selector: row=> <Link className="px-3 py-3 bg-indigo-300 text-indigo-600 font-semibold" to={`/detail/${row.id}`}>Detail</Link>,
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
    <div className="p-4">
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

export default Home;
