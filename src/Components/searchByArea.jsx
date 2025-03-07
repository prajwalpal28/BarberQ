import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaMapMarkerAlt } from "react-icons/fa";


const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: 28.7041, // Default to New Delhi (Replace with your preferred location)
  lng: 77.1025,
};

const SearchByArea = () => {
  const [location, setLocation] = useState(defaultCenter);
  const [barberShops, setBarberShops] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          fetchBarberShops(position.coords.latitude, position.coords.longitude);
        },
        (error) => console.error("Error getting location:", error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchBarberShops = (lat, lng) => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your Google Maps API Key
    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=3000&type=hair_care&keyword=barber&key=${apiKey}`;

    fetch(placesUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setBarberShops(
            data.results.map((shop) => ({
              id: shop.place_id,
              name: shop.name,
              location: {
                lat: shop.geometry.location.lat,
                lng: shop.geometry.location.lng,
              },
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching barber shops:", error));
  };

  return (
    <div className="container mx-auto py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Find the Nearest Barber Shop</h2>
      <button
      onClick={getUserLocation}
      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg 
                 shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out
                 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <FaMapMarkerAlt className="text-white text-lg animate-bounce" />
      Use My Location
    </button>

      {/* Google Map */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location}
          zoom={14}
        >
          {/* User Location Marker */}
          <Marker position={location} label="You" />

          {/* Barber Shop Markers */}
          {barberShops.map((shop) => (
            <Marker key={shop.id} position={shop.location} label={shop.name} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default SearchByArea;
