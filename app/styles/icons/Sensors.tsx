import React from "react";

export default function Icon({ colorMode }: { colorMode?: "dark" | "light" }) {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: colorMode === "dark" ? "invert(1)" : "invert(0)",
      }}
    >
      <path
        d="M4.82 9.18001C4.0025 8.37001 3.5 7.24501 3.5 6.00001C3.5 4.75501 4.0025 3.63001 4.82 2.82001L5.885 3.88501C5.3375 4.42501 5 5.17501 5 6.00001C5 6.82501 5.3375 7.57501 5.8775 8.12251L4.82 9.18001ZM11.18 9.18001C11.9975 8.37001 12.5 7.24501 12.5 6.00001C12.5 4.75501 11.9975 3.63001 11.18 2.82001L10.115 3.88501C10.6625 4.42501 11 5.17501 11 6.00001C11 6.82501 10.6625 7.57501 10.1225 8.12251L11.18 9.18001ZM8 4.50001C7.175 4.50001 6.5 5.17501 6.5 6.00001C6.5 6.82501 7.175 7.50001 8 7.50001C8.825 7.50001 9.5 6.82501 9.5 6.00001C9.5 5.17501 8.825 4.50001 8 4.50001ZM14 6.00001C14 7.65751 13.325 9.15751 12.2375 10.2375L13.3025 11.3025C14.66 9.94501 15.5 8.07001 15.5 6.00001C15.5 3.93001 14.66 2.05501 13.3025 0.69751L12.2375 1.76251C12.797 2.31714 13.2408 2.97727 13.5434 3.70465C13.8459 4.43203 14.0011 5.21222 14 6.00001ZM3.7625 1.76251L2.6975 0.69751C1.34 2.05501 0.5 3.93001 0.5 6.00001C0.5 8.07001 1.34 9.94501 2.6975 11.3025L3.7625 10.2375C2.675 9.15751 2 7.65751 2 6.00001C2 4.34251 2.675 2.84251 3.7625 1.76251Z"
        fill="black"
      />
    </svg>
  );
}
