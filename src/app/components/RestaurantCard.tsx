import Image from "next/image";

interface RestaurantCardProps {
    restaurant: {
        id: string;
        name: string;
        image: string;
        rating: number;
    };
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
    return (
        <div className="bg-white p-4 shadow rounded-lg text-center">
            <Image
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-40 object-cover rounded"
                width={300}
                height={200}
            />
            <h2 className="text-lg font-semibold mt-2 text-gray-700">{restaurant.name}</h2>
            <p className="text-yellow-500">⭐ {restaurant.rating}</p>
        </div>
    );
}
