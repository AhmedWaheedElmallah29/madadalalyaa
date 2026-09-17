import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[24.7136, 46.6753]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      {" "}
      <TileLayer
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />{" "}
      <Marker position={[24.7136, 46.6753]}>
        <Popup>دار مداد العلياء</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
