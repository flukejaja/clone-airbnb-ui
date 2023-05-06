import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
function Map() {
    return (
        <div >
            <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true} className=' h-[100vh] '>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Hello World
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Map