"use client";
// import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { GET_RESTAURANTS, mockRestaurants } from "@/app/services/restaurantService";
import { MockedProvider } from "@apollo/client/testing";
// const client = new ApolloClient({
//     uri: "YOUR_GRAPHQL_ENDPOINT",
//     cache: new InMemoryCache(),
// });
const mocks = [
    {
      request: {
        query: GET_RESTAURANTS,
        variables: { lat: 0, lng: 0 },
      },
      result: {
        data: {
          restaurants: mockRestaurants,
        },
      },
    },
  ];
export default function ApolloProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MockedProvider /* client={client} */ mocks={mocks} addTypename={false}>{children}</MockedProvider>;
}
