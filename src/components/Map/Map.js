import React, { useEffect } from "react";
import "./Map.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Helmet } from "react-helmet";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVoZWRpaGFzYW5zYWdvciIsImEiOiJja3V5ZzZobDQwMjFvMnZyMnE2dmpqMnZqIn0.c-hUmWSXpYqRBiU7rGKoog";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [88.943153, 24.80934],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return (
    <div className="map-parent">
      <Helmet>
        <title>Map</title>
      </Helmet>
      <div id="map"></div>
    </div>
  );
};

export default Map;
