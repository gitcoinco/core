"use client";

import { useEffect, useState } from "react";
import Plotly from "react-plotly.js";

import { formatAmount } from "../../lib/utils";

export function SquarePlot({
  width,
  values,
  labels,
}: {
  width: number;
  values: number[];
  labels: string[];
}) {
  const colors = Array(10)
    .fill([
      "#FFEFBE",
      "#D9D6FF",
      "#D3EDFE",
      "#25BDCE",
      "#B3DE9F",
      "#DBF0DB",
      "#248B5A",
      "#FF7043",
      "#645AD8",
      "#FFC2EE",
      "#FF9776",
      "#5F94BC",
      "#FFE5F8",
      "#C8F6F6",
      "#FBC624",
      "#6935FF",
      "#FF00B8",
      "#73E2E2",
      "#FFD9CE",
      "#FCD661",
      "#15B8DC",
    ])
    .flat();

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 37.5rem)").matches;
    setLayout(
      isLargeScreen
        ? {
            font: { size: 18 },
            showlegend: false,
            displayModeBar: false,
            margin: {
              t: 30,
              b: 25,
              l: 0,
              r: 0,
              pad: 0,
            },
            width: undefined,
            scene: {
              xaxis: {
                spikecolor: "#1fe5bd",
                spikesides: false,
                spikethickness: 6,
              },
              yaxis: {
                spikecolor: "#1fe5bd",
                spikesides: false,
                spikethickness: 6,
              },
              zaxis: {
                spikecolor: "#1fe5bd",
                spikethickness: 6,
              },
            },
          }
        : {
            font: { size: 18 },
            showlegend: false,
            displayModeBar: false,
            margin: { t: 10, b: 25, l: 0, r: 0, pad: 0 },
            width: width - 120,
            scene: {
              xaxis: {
                spikecolor: "#1fe5bd",
                spikesides: false,
                spikethickness: 6,
              },
              yaxis: {
                spikecolor: "#1fe5bd",
                spikesides: false,
                spikethickness: 6,
              },
              zaxis: {
                spikecolor: "#1fe5bd",
                spikethickness: 6,
              },
            },
          },
    );
  }, [width]);

  const [layout, setLayout] = useState({
    font: { size: 18 },
    showlegend: false,
    displayModeBar: false,
    margin: { t: 30, b: 25, l: 0, r: 0, pad: 0 },
    width: undefined as number | undefined,
    scene: {
      xaxis: {
        spikecolor: "#1fe5bd",
        spikesides: false,
        spikethickness: 6,
      },
      yaxis: {
        spikecolor: "#1fe5bd",
        spikesides: false,
        spikethickness: 6,
      },
      zaxis: {
        spikecolor: "#1fe5bd",
        spikethickness: 6,
      },
    },
  });

  const parents = Array(values?.length).fill("");
  const config = {
    toImageButtonOptions: {
      scale: 3,
    },
  };

  return (
    <div className="flex w-full justify-center">
      {values?.length && labels?.length && (
        <Plotly
          className="w-full"
          style={{ maxWidth: `${width - 100}px` }}
          data={[
            {
              type: "treemap",
              labels: labels,
              parents: parents,
              values: values,
              text: values.map((value) => `$${formatAmount(value.toFixed(2))}`),
              textinfo: "label+text",
              hoverinfo: "label+text",
              // hoverlabel: {namelength: -1},
              title: { text: "label" },
              mode: "markers",
              textfont: { size: 14 },
              marker: {
                line: { width: 2 },

                colors,
              },
            },
          ]}
          layout={layout}
          config={config}
        />
      )}
    </div>
  );
}
