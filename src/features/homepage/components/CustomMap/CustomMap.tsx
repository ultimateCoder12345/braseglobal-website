// components/CustomMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const officeLocations = [
    {
        id: 1,
        name: 'Sydney Head Office',
        position: [-33.790451735285764, 150.90681933390073
] as [number, number], // Latitude, Longitude
        address: '16 Filey St, Blacktown NSW 2148, Australia',
        phone: '02 89857384',
        isHeadquarters: true
    },
    {
        id: 2,
        name: 'Hyderabad Office',
        position: [17.489462780844867, 78.39268379486194] as [number, number],
        address: 'unit no 114, 1st floor ,manjeera trinity corporate ,kphb phase 1,kukatpally ,hyderabad ,telangana 500072-india',
        phone: '+91 7702247788',
        isHeadquarters: false
    },
    {
        id: 3,
        name: 'Melbourne Office',
        position: [-37.81817151705766, 144.95657683592287
] as [number, number],
        address: 'collins street,VIC 3000',
        // phone: '+44 20 7123 4567',
        isHeadquarters: false
    },
    {
        id: 4,
        name: 'US Office',
        position: [33.21653118990796, -96.77900214743718] as [number, number],
        address: '16854 Tablerock Dr, Frisco, TX 75035, USA',
        // phone: '+44 20 7123 4567',
        isHeadquarters: false
    }
];

// Create custom icons
const createCustomIcon = (isHeadquarters: boolean) => {
    return L.icon({
        iconUrl: isHeadquarters
            ? 'src/assets/images/brasetech_logo.png'
            : 'src/assets/images/brasetech_logo.png',
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        // shadowSize: [41, 41],
        // shadowAnchor: [12, 41]
    });
};

const CustomMap = () => {
    return (
        <MapContainer
            center={[37.7749, -122.4194]} // Default center (San Francisco)
            zoom={3} // Initial zoom level
            style={{ height: '400px', width: '100%', borderRadius: '8px' }}
        >
            {/* Base map layer */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                noWrap={true}
            />

            {/* Office markers */}
            {officeLocations.map(office => (
                <Marker
                    key={office.id}
                    position={office.position}
                    icon={createCustomIcon(office.isHeadquarters)}
                    eventHandlers={{
                        mouseover: (e) => {
                            e.target.openPopup();
                        },
                        click: () => {
                        },
                    }}>
                    <Popup>
                        <div style={{ minWidth: '200px' }}>
                            <h3 style={{ margin: '0 0 8px 0', color: office.isHeadquarters ? '#1976d2' : '#333' }}>
                                {office.name}
                            </h3>
                            <p style={{ margin: '4px 0' }}>📍 {office.address}</p>
                            <p style={{ margin: '4px 0' }}>📞 {office.phone}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default CustomMap;