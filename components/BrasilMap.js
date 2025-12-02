"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

<hr
  style={{
    margin: "3rem auto",
    border: "none",
    height: "2px",
    width: "80%",
    backgroundColor: "#ffe0c2",
  }}
/>;

export default function BrasilMap({ dogs = [] }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        background: "linear-gradient(180deg, #E0F7FA 0%, #FFFFFF 100%)",
        borderRadius: "15px",
        padding: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,
          center: [-55, -15],
        }}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Estados */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#90CAF9"
                stroke="#1565C0"
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#42A5F5", cursor: "pointer" },
                  pressed: { fill: "#1976D2" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Nomes dos estados */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const [x, y] = geo.properties.geo_point_2d || [];
              return (
                <text
                  key={geo.rsmKey}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fontSize={8}
                  fill="#0D47A1"
                >
                  {geo.properties.name}
                </text>
              );
            })
          }
        </Geographies>

        {/* Marcadores personalizados (seus cachorrinhos 🐶) */}
        {dogs.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <text fontSize={20} textAnchor="middle">
              🐶
            </text>
            <text y={20} textAnchor="middle" fontSize={10} fill="#263238">
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
