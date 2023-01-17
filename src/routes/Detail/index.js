import { useLoaderData } from 'react-router-dom'
import ImageGallery from 'react-image-gallery';
import { getDetailBusiness, getDetailBusinessReview } from '../../api';
import './index.css';

export async function loader({ params }) {
    const businessData = await getDetailBusiness(params.businessId);
    const reviewsData = await getDetailBusinessReview(params.businessId)
    const data = {...businessData.data, reviews: reviewsData.data.reviews}
    return data
    /* return {
        "id": "jbJTF1zVmZsk4hea8hoeVA",
        "alias": "fork-boise",
        "name": "Fork",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/P9mNoEUBfeSbgmJEla4jmQ/o.jpg",
        "is_claimed": true,
        "is_closed": false,
        "url": "https://www.yelp.com/biz/fork-boise?adjust_creative=DSj6I8qbyHf-Zm2fGExuug&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=DSj6I8qbyHf-Zm2fGExuug",
        "phone": "+12082871700",
        "display_phone": "(208) 287-1700",
        "review_count": 2062,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "rating": 4.0,
        "location": {
            "address1": "199 N 8th St",
            "address2": "",
            "address3": "",
            "city": "Boise",
            "zip_code": "83702",
            "country": "US",
            "state": "ID",
            "display_address": [
                "199 N 8th St",
                "Boise, ID 83702"
            ],
            "cross_streets": ""
        },
        "coordinates": {
            "latitude": 43.616389,
            "longitude": -116.203056
        },
        "photos": [
            "https://s3-media4.fl.yelpcdn.com/bphoto/P9mNoEUBfeSbgmJEla4jmQ/o.jpg",
            "https://s3-media1.fl.yelpcdn.com/bphoto/7aOe-0LrZIjrMmmfRZ8P8g/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/Eba_r1zN_xz_aU-7c_kyrg/o.jpg"
        ],
        "price": "$$",
        "hours": [
            {
                "open": [
                    {
                        "is_overnight": false,
                        "start": "1130",
                        "end": "2100",
                        "day": 0
                    },
                    {
                        "is_overnight": false,
                        "start": "1130",
                        "end": "2100",
                        "day": 1
                    },
                    {
                        "is_overnight": false,
                        "start": "1130",
                        "end": "2100",
                        "day": 2
                    },
                    {
                        "is_overnight": false,
                        "start": "1130",
                        "end": "2100",
                        "day": 3
                    },
                    {
                        "is_overnight": false,
                        "start": "1130",
                        "end": "2200",
                        "day": 4
                    },
                    {
                        "is_overnight": false,
                        "start": "0930",
                        "end": "2200",
                        "day": 5
                    },
                    {
                        "is_overnight": false,
                        "start": "0930",
                        "end": "2100",
                        "day": 6
                    }
                ],
                "hours_type": "REGULAR",
                "is_open_now": true
            }
        ],
        "transactions": [
            "delivery"
        ],
        "messaging": {
            "url": "https://www.yelp.com/raq/jbJTF1zVmZsk4hea8hoeVA?adjust_creative=DSj6I8qbyHf-Zm2fGExuug&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=DSj6I8qbyHf-Zm2fGExuug#popup%3Araq",
            "use_case_text": "Message the Business"
        },
        reviews: [
            {
                "id": "9mtYj2vSEKYd_cweCByWHg",
                "url": "https://www.yelp.com/biz/fork-boise?adjust_creative=DSj6I8qbyHf-Zm2fGExuug&hrid=9mtYj2vSEKYd_cweCByWHg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=DSj6I8qbyHf-Zm2fGExuug",
                "text": "I come to Idaho once per month on business and never miss an opportunity to dine here. The restaurant is very clean, always lively and the staff are always...",
                "rating": 5,
                "time_created": "2022-11-09 07:08:49",
                "user": {
                    "id": "_Gpj5kNDFWUuyvxXjssiWA",
                    "profile_url": "https://www.yelp.com/user_details?userid=_Gpj5kNDFWUuyvxXjssiWA",
                    "image_url": "https://s3-media4.fl.yelpcdn.com/photo/9YF5mTUudE3fAtjsaVxVmg/o.jpg",
                    "name": "John C."
                }
            },
            {
                "id": "33efPL2AYK-hDqBhUOsXcQ",
                "url": "https://www.yelp.com/biz/fork-boise?adjust_creative=DSj6I8qbyHf-Zm2fGExuug&hrid=33efPL2AYK-hDqBhUOsXcQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=DSj6I8qbyHf-Zm2fGExuug",
                "text": "We been coming to For for about 2 years. anytime we come to boise we visit fork.  Our last visit our experience wasn't so great.  \n\nThis time we went with...",
                "rating": 3,
                "time_created": "2022-11-29 19:22:14",
                "user": {
                    "id": "zaSNWgS0kpJBIgT13oIxmg",
                    "profile_url": "https://www.yelp.com/user_details?userid=zaSNWgS0kpJBIgT13oIxmg",
                    "image_url": "https://s3-media1.fl.yelpcdn.com/photo/ZDauTAscPwgMNBxHCKw5Ow/o.jpg",
                    "name": "Beto P."
                }
            },
            {
                "id": "dc129HcpgKvHxR63UYAb-A",
                "url": "https://www.yelp.com/biz/fork-boise?adjust_creative=DSj6I8qbyHf-Zm2fGExuug&hrid=dc129HcpgKvHxR63UYAb-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=DSj6I8qbyHf-Zm2fGExuug",
                "text": "We are now here for the second time and again it disappoints. My husband got the brisket Mac and cheese. For one, it should be an appetizer not a main...",
                "rating": 3,
                "time_created": "2022-11-26 16:28:18",
                "user": {
                    "id": "6oOk2JyGxA4CbW5eL3x3oA",
                    "profile_url": "https://www.yelp.com/user_details?userid=6oOk2JyGxA4CbW5eL3x3oA",
                    "image_url": "https://s3-media3.fl.yelpcdn.com/photo/dqTeNh5l8YYLM4ET0lAzTw/o.jpg",
                    "name": "Kasia B."
                }
            }
        ]
    } */
}

export default function Detail() {
    const data = useLoaderData()
    const images = data.photos.map(photo => ({ thumbnail: photo, original: photo }))
    const categories = data.categories.map(category => category.title)
    return (
        <div className="p-4 mx-96">
            <h1 className="p-4 text-3xl text-slate-600 w-full">{data.name} <span className="text-sm">({data.alias})</span> </h1>
                <ImageGallery items={images} />
            <div className="my-4 flex justify-between gap-4">
                <div className="flex-col text-slate-500">
                    <p className="text-lg font-bold">Categories</p>
                    <p>{categories.join(',')}</p>
                </div>
                <div className="flex-col text-slate-500">
                    <p className="text-lg font-bold">Rating</p>
                        <span className="flex">
                        {[...Array(data.rating)].map(rating => (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-yellow-400">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>
                        ))}
                        </span>
                </div>
                <div className="flex-col text-slate-500">
                    <p className="text-lg font-bold">Prices</p>
                    <p className="font-bold">{data.price}</p>
                </div>
            </div>
            <div className="mt-4 flex justify-between gap-4">
                <div className="flex-col text-slate-500">
                    <p className="text-lg font-bold">Categories</p>
                    <p>{categories.join(',')}</p>
                </div>
                <div className="flex-col text-slate-500">
                    <p className="text-lg font-bold">Gmaps</p>
                    <a className="underline text-blue-500" href={`https://maps.google.com/?q=${data?.coordinates?.latitude},${data?.coordinates?.longitude}`}>See on Gmaps</a>
                </div>
            </div>
            <section className="mt-8">
                <h2 className="text-2xl font-bold text-slate-500">List Reviews</h2>
                <div className="flex flex-col gap-4">
                    {data.reviews.map( review => (
                        <div className="p-4 flex flex-col rounded-lg bg-slate-200">
                            <div className="flex gap-2">
                                <img className="w-8 h-8 object-cover rounded-full border border-slate-200" src={review.user.image_url} />
                                <span>{review.user.name}</span>
                                <span className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-yellow-400">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                    </svg>
                                    {review.rating}
                                </span>
                            </div>
                            <p className="text-slate-600 text-lg">{review.text}</p>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    )
}