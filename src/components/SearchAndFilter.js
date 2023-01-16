const SearchAndFilter = ({queryParams, handleQueryParams, handleSubmitSearchAndFilter}) => {

    return (
        <div>
            <h2>Search Businesses</h2>
            <form>
                <div className="flex flex-col">
                    <label htmlFor="location" className="ml-1 text-sm">
                    Location
                    </label>
                    <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={queryParams.location ?? ''}
                    onChange={handleQueryParams}
                    className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="latitude" className="ml-1 text-sm">
                    Latitude
                    </label>
                    <input
                    type="number"
                    id="latitude"
                    name="latitude"
                    value={queryParams.latitude ?? ''}
                    onChange={handleQueryParams}
                    className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="longitude" className="ml-1 text-sm">
                    Longitude
                    </label>
                    <input
                    type="number"
                    id="longitude"
                    name="longitude"
                    value={queryParams.longitude ?? ''}
                    onChange={handleQueryParams}
                    className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="longitude" className="ml-1 text-sm">
                    Filter by Category
                    </label>
                    <select
                        id="categories"
                        name="categories"
                        value={queryParams.categories ?? ''}
                        onChange={handleQueryParams}
                        className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
                        >
                        <option value="">Select</option>
                        <option value="beautysvc">Beauty & Spa</option>
                        <option value="shopping">Shopping</option>
                        <option value="restaurants">Restaurants</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-300"
                    onClick={handleSubmitSearchAndFilter}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchAndFilter