import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [38, 40]
});

const markers = [
  {
    geoCode: [40.3253, -3.4599], // Luxury Resort & Spa (Diani Beach, Mombasa, Kenya)
    popUp: "Luxury Resort & Spa, Diani Beach, Mombasa, Kenya",
  },
  {
    geoCode: [25.790654, -80.130045], // Seaside Inn (Miami Beach, Florida, USA)
    popUp: "Seaside Inn, Miami Beach, Florida, USA",
  },
  {
    geoCode: [-4.0586, 39.6745], // Tropical Oasis Resort (Mombasa Beach, Kenya)
    popUp: "Tropical Oasis Resort, Mombasa Beach, Kenya",
  },
  {
    geoCode: [20.7984, -156.3319], // Island Paradise Resort (Maui, Hawaii, USA)
    popUp: "Island Paradise Resort, Maui, Hawaii, USA",
  },
  {
    geoCode: [-33.9249, 18.4241], // Serenity Spa Retreat (Cape Town, South Africa)
    popUp: "Serenity Spa Retreat, Cape Town, South Africa",
  },
  {
    geoCode: [25.2048, 55.2708], // Desert Mirage Hotel (Dubai, United Arab Emirates)
    popUp: "Desert Mirage Hotel, Dubai, United Arab Emirates",
  },
  {
    geoCode: [-16.5000, -151.7500], // Paradise Beachfront Resort (Bora Bora, French Polynesia)
    popUp: "Paradise Beachfront Resort, Bora Bora, French Polynesia",
  },
  {
    geoCode: [33.6891, -78.8867], // Coastal Retreat Resort (Myrtle Beach, South Carolina, USA)
    popUp: "Coastal Retreat Resort, Myrtle Beach, South Carolina, USA",
  },
  {
    geoCode: [-6.1603, 39.1981], // Zanzibar Beach Resort (Stone Town, Zanzibar, Tanzania)
    popUp: "Zanzibar Beach Resort, Stone Town, Zanzibar, Tanzania",
  },
  {
    geoCode: [21.2785, -157.8251], // Beachfront Bliss Hotel (Waikiki Beach, Hawaii, USA)
    popUp: "Beachfront Bliss Hotel, Waikiki Beach, Hawaii, USA",
  },
  {
    geoCode: [41.6834, -70.2419], // Cape Cod Beach Resort (Cape Cod, Massachusetts, USA)
    popUp: "Cape Cod Beach Resort, Cape Cod, Massachusetts, USA",
  },
  {
    geoCode: [21.1619, -86.8515], // Sandy Shores Resort (Cancún, Quintana Roo, Mexico)
    popUp: "Sandy Shores Resort, Cancún, Quintana Roo, Mexico",
  },
  {
    geoCode: [-20.1605, 57.4989], // Mauritius Beach Haven (Grand Baie, Mauritius)
    popUp: "Mauritius Beach Haven, Grand Baie, Mauritius",
  },
  {
    geoCode: [19.7297, -155.0900], // Hawaiian Beach Retreat (Hilo, Hawaii, USA)
    popUp: "Hawaiian Beach Retreat, Hilo, Hawaii, USA",
  },
  {
    geoCode: [-4.0435, 39.6682], // Mombasa Beachfront Lodge (Mombasa, Kenya)
    popUp: "Mombasa Beachfront Lodge, Mombasa, Kenya",
  },
  {
    geoCode: [13.9094, -60.9789], // Caribbean Beach Hideaway (St. Lucia, Caribbean)
    popUp: "Caribbean Beach Hideaway, St. Lucia, Caribbean",
  },
  {
    geoCode: [24.5551, -81.7799], // Florida Keys Beach Resort (Key West, Florida, USA)
    popUp: "Florida Keys Beach Resort, Key West, Florida, USA",
  },
  {
    geoCode: [-4.6820, 55.4802], // Seychelles Beachfront Villa (Mahé, Seychelles)
    popUp: "Seychelles Beachfront Villa, Mahé, Seychelles",
  }
  
];

function Map() {
  return (
    // initializing the mapcontainer
    <MapContainer center={[-4.0435, 39.6682]} zoom={13} style={{ height: '500px', width: '100%' }} icon={customIcon}>
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=UVPZgdQusaRhApOBFrAq`}
        maxZoom={20} // max zoom level
        minZoom={1.5}
      />
      {/* markers for the locations */}
      {markers.map((marker) => (
        <Marker key={marker.popUp} position={marker.geoCode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
