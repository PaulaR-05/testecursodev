"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

export default function BrasilMap({ dogs }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          color: "#ff7f50",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        🗺️ Onde estão nossos amiguinhos?
      </h2>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 750,
          center: [-55, -15],
        }}
        width={700}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.id === "076") // Brasil (ISO 3166 code)
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e6e6e6"
                  stroke="#999"
                />
              ))
          }
        </Geographies>

        {dogs.map((d, i) => (
          <Marker key={i} coordinates={d.coordenadas}>
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "Arial",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              🐶
            </text>
            <text
              textAnchor="middle"
              y={15}
              style={{
                fontFamily: "Arial",
                fontSize: "10px",
                fill: "#333",
              }}
            >
              {d.nome}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
