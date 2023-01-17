const SearchAndFilter = ({queryParams, handleQueryParams, handleSubmitSearchAndFilter}) => {

    return (
        <div>
            <h2 className="text-2xl font-bold">Search Businesses</h2>
            <form className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex flex-col">
                    <label htmlFor="location" className="ml-1 text-sm font-semibold">
                    Location
                    </label>
                    <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={queryParams.location ?? ''}
                    onChange={handleQueryParams}
                    className="px-3 py-3 bg-slate-200 rounded-md focus:outline-2 outline-slate-200"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="latitude" className="ml-1 text-sm font-semibold">
                    Latitude
                    </label>
                    <input
                    type="number"
                    id="latitude"
                    name="latitude"
                    value={queryParams.latitude ?? ''}
                    onChange={handleQueryParams}
                    className="px-3 py-3 bg-slate-200 rounded-md focus:outline-2 outline-slate-200"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="longitude" className="ml-1 text-sm font-semibold">
                    Longitude
                    </label>
                    <input
                    type="number"
                    id="longitude"
                    name="longitude"
                    value={queryParams.longitude ?? ''}
                    onChange={handleQueryParams}
                    className="px-3 py-3 bg-slate-200 rounded-md focus:outline-2 outline-slate-200"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="longitude" className="ml-1 text-sm font-semibold">
                    Filter by Category
                    </label>
                    <select
                        id="categories"
                        name="categories"
                        value={queryParams.categories ?? ''}
                        onChange={handleQueryParams}
                        className="px-3 py-3 bg-slate-200 rounded-md focus:outline-2 outline-slate-200"
                        >
                        <option value="">Select</option>
                        <option value="beautysvc">Beauty & Spa</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="shopping">Shopping</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 rounded-md hover:bg-blue-300 text-white"
                    onClick={handleSubmitSearchAndFilter}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchAndFilter