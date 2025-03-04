import { gql } from "@apollo/client";

// GraphQL Query
export const GET_RESTAURANTS = gql`
  query GetRestaurants($lat: Float!, $lng: Float!) {
    restaurants(lat: $lat, lng: $lng) {
      id
      name
      image
      rating
    }
  }
`;

// Mock Data
export const mockRestaurants = [
    {
      id: "1",
      name: "The Gourmet Kitchen",
      image: "https://picsum.photos/400/300?random=1",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Spicy Treats",
      image: "https://picsum.photos/400/300?random=2",
      rating: 4.2,
    },
    {
      id: "3",
      name: "Ocean Breeze Diner",
      image: "https://picsum.photos/400/300?random=3",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Vegan Delights",
      image: "https://picsum.photos/400/300?random=4",
      rating: 4.8,
    },
    {
      id: "5",
      name: "Steakhouse Prime",
      image: "https://picsum.photos/400/300?random=5",
      rating: 4.6,
    },
  ];
  
