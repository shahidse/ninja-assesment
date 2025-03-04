import { Dropdown } from "primereact/dropdown";

interface LocationDropdownProps {
    location: { lat: number | null; lng: number | null };
    selectedLocation: any;
    setSelectedLocation: (location: any) => void;
}

export default function LocationDropdown({
    location,
    selectedLocation,
    setSelectedLocation,
}: LocationDropdownProps) {
    return (
        <Dropdown
            value={selectedLocation}
            options={[{ label: "Current Location", value: location }]}
            onChange={(e) => setSelectedLocation(e.value)}
            placeholder="Select a location"
            className="w-full p-2 border rounded text-black bg-gray-200"
            panelClassName="bg-gray-200 text-black p-2"
        />
    );
}
