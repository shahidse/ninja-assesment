"use client";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useQuery } from "@apollo/client";
import { getUserLocation } from "@/app/services/locationService";
import { GET_RESTAURANTS } from "@/app/services/restaurantService";
import LocationInput from "@/app/components/LocationInput";
import LocationDropdown from "@/app/components/LocationDropdown";
import RestaurantCard from "@/app/components/RestaurantCard";
import Header from "@/app/components/Header";

export default function HomePage() {
  const [location, setLocation] = useState<{ lat: number | null; lng: number | null }>({
    lat: null,
    lng: null,
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [restaurants, setRestaurants] = useState<Array<{
    id: string;
    name: string;
    image: string;
    rating: number;
  }>>([]);

  useEffect(() => {
    getUserLocation()
      .then((loc) => setLocation(loc))
      .catch((err) => console.error(err));
  }, []);

  const { data, loading, error } = useQuery(GET_RESTAURANTS, {
    variables: { lat:  0, lng:  0 },
    skip: !location.lat || !location.lng, // Skip query if location isn't available
  });



  useEffect(() => {
    if (data) {
      setRestaurants(data.restaurants);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="relative w-full h-screen">
      {/* Google Maps Background */}
      <iframe
        className="absolute top-0 left-0 w-full h-full z-0"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.lat},${location.lng}&zoom=14`}
        allowFullScreen
      ></iframe>

      {/* Overlay Content */}
      <div className="relative z-10 bg-white bg-opacity-80 backdrop-blur-md min-h-screen">
        <Header />

        <div className="p-5 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-blue-600">Find Restaurants Near You</h1>

          <div className="w-full max-w-md mt-5 space-y-4">
            <LocationInput location={location} />
            <LocationDropdown
              location={location}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
            <Button label="Find Restaurants" className="w-full bg-orange-500 text-white p-2 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
