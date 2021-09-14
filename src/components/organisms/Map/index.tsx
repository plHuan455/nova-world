import GoogleMapReact from 'google-map-react';
import React from 'react';

import Icon from 'components/atoms/Icon';

export type TypeMapMarker = {
  lat: number;
  lng: number;
};

export interface MapProps {
  mapMarker?: TypeMapMarker[];
  mapAPIkey: string;
}
interface MapContactProps {
  lat?: number;
  lng?: number;
}

const MapContact: React.FC<MapContactProps> = () => (
  <div className="o-map_marker">
    <Icon iconName="marker" />
  </div>
);

const Map: React.FC<MapProps> = ({ mapMarker, mapAPIkey }) => (
  <div className="o-map">
    {
      mapMarker && mapMarker.length > 0 && (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${mapAPIkey}&libraries=places,geometry`,
        }}
        defaultCenter={{
          lat: mapMarker[0]?.lat,
          lng: mapMarker[0]?.lng,
        }}
        defaultZoom={13}
        options={{
          zoomControl: true,
          mapTypeControl: false,
          fullscreenControl: true,
          panControl: true,
        }}
      >
        {mapMarker.map((marker, idx) => (
          <MapContact key={`marker-${idx + 1}`} lat={marker.lat} lng={marker.lng} />
        ))}
      </GoogleMapReact>
      )
    }

  </div>
);

export default Map;
