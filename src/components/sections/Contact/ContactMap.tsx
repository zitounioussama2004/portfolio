import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({

    iconRetinaUrl: markerIcon2x,

    iconUrl: markerIcon,

    shadowUrl: markerShadow,

});

const position: [number, number] = [

    36.0735,

    4.7635,

];

const ContactMap = () => {

    return (

        <div
            className="
                mt-10

                overflow-hidden

                rounded-3xl

                border

                border-slate-800
            "
        >

            <MapContainer

                center={position}

                zoom={13}

                scrollWheelZoom={false}

                style={{

                    height: "350px",

                    width: "100%",

                }}

            >

                <TileLayer

                    attribution="&copy; OpenStreetMap contributors"

                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />

                <Marker position={position}>

                    <Popup>

                        Zitouni Oussama

                        <br />

                        Bordj Bou Arreridj

                    </Popup>

                </Marker>

            </MapContainer>

        </div>

    );

};

export default ContactMap;