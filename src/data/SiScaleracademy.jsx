import React from 'react';

export function SiScaleracademy({ size = 24, color = "currentColor", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9600 9600"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      aria-label="Scaler Academy logo"
      role="img"
      transform="rotate(270)"
    >
      <path d="M3583 7271 c-337 -339 -613 -617 -613 -618 0 -2 835 -3 1855 -3
        l1855 0 0 -1862 0 -1863 620 620 620 620 0 1862 0 1863 -1862 -2 -1863 -1
        -612 -616z"/>
      <path d="M2333 6028 l-613 -613 0 -1863 0 -1862 1862 0 1863 0 615 615 615
        615 -623 0 -622 0 0 1240 0 1240 -1240 0 -1240 0 -2 620 -3 620 -612 -612z
        m1867 -2483 l0 -625 -625 0 -625 0 0 625 0 625 625 0 625 0 0 -625z"/>
    </svg>
  );
}
