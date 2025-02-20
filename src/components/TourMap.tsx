import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUwMDAwMTJleGFtcGxlIjp9.example';

interface Location {
  coordinates: [number, number];
  name: string;
  description?: string;
}

interface TourMapProps {
  locations: Location[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

const TourMap: React.FC<TourMapProps> = ({
  locations,
  center = [-74.5, 40],
  zoom = 9,
  className = "h-[400px] w-full rounded-lg overflow-hidden"
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: zoom
    });

    const bounds = new mapboxgl.LngLatBounds();

    // Add markers and extend bounds
    locations.forEach((location) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates);

      if (location.description) {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <h3 class="font-semibold">${location.name}</h3>
            <p>${location.description}</p>
          `);
        marker.setPopup(popup);
      }

      marker.addTo(map.current!);
      bounds.extend(location.coordinates);
    });

    // Fit map to bounds if there are multiple locations
    if (locations.length > 1) {
      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 14
      });
    }

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [locations, center, zoom]);

  return <div ref={mapContainer} className={className} />;
};

export default TourMap;