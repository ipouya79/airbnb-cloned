import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ListingImg from "../../components/listing/ListingImg";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/user-listings").then(({ data }) => {
      setListings(data);
    });
  }, []);

  return (
    <div>
      <ul className="mx-4 mt-4 mb-2">
        <li className="text-right">
          <Link
            to="/account/listings/new"
            className="inline-flex gap-1 text-sm items-center text-primary font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
 strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>افزودن پست جدید</p>
          </Link>
        </li>
      </ul>
      <div>
        <div className="mx-4">
          {listings.length > 0 &&
            listings.map((listing) => (
              <Link
                to={"/account/listings/" + listing._id}
 key={listing._id}
                className="cursor-pointer flex flex-col sm:flex-row-reverse text-right gap-4 border bg-white rounded-xl mb-2"
              >
                <div className="max-w-small">
                  <ListingImg  listing={listing} />
 </div>
                <div className="flex flex-col p-4 grow rtl-direction text-right">
                  <h2 className="text-xl font-semibold lg-custom-text">
                    {listing.city} || {listing.title}
                  </h2>
                  <p className="text-sm overflow-hidden overflow-ellipsis sm-custom-text">
                    {listing.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
