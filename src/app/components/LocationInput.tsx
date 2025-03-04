import { InputText } from "primereact/inputtext";

interface LocationInputProps {
    location: { lat: number | null; lng: number | null };
}

export default function LocationInput({ location }: LocationInputProps) {
    return (
        <InputText
            value={location.lat ? `${location.lat}, ${location.lng}` : ""}
            placeholder="Your location"
            readOnly
            className="w-full p-2 border rounded text-black"
        />
    );
}
