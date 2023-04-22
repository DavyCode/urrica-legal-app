import React from 'react'

interface IProp {
    fill?: string;
    width?: number;
    height?: number
}
const TrashIcon: React.FC<IProp> = ({ fill = "#292D32", width=24, height=24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7507 5.04687C15.7357 5.04687 15.7132 5.04687 15.6907 5.04687C11.7232 4.64937 7.76323 4.49937 3.84073 4.89687L2.31073 5.04687C1.99573 5.07687 1.71823 4.85187 1.68823 4.53687C1.65823 4.22187 1.88323 3.95187 2.19073 3.92187L3.72073 3.77187C7.71073 3.36687 11.7532 3.52437 15.8032 3.92187C16.1107 3.95187 16.3357 4.22937 16.3057 4.53687C16.2832 4.82937 16.0357 5.04687 15.7507 5.04687Z"
        fill={fill}
      />
      <path
        d="M6.37556 4.29C6.34556 4.29 6.31556 4.29 6.27806 4.2825C5.97806 4.23 5.76806 3.9375 5.82056 3.6375L5.98556 2.655C6.10556 1.935 6.27056 0.9375 8.01806 0.9375H9.98306C11.7381 0.9375 11.9031 1.9725 12.0156 2.6625L12.1806 3.6375C12.2331 3.945 12.0231 4.2375 11.7231 4.2825C11.4156 4.335 11.1231 4.125 11.0781 3.825L10.9131 2.85C10.8081 2.1975 10.7856 2.07 9.99056 2.07H8.02556C7.23056 2.07 7.21556 2.175 7.10306 2.8425L6.93056 3.8175C6.88556 4.095 6.64556 4.29 6.37556 4.29Z"
        fill={fill}
      />
      <path
        d="M11.4078 17.0617H6.59279C3.97529 17.0617 3.87029 15.6142 3.78779 14.4442L3.30029 6.8917C3.27779 6.5842 3.51779 6.3142 3.82529 6.2917C4.14029 6.2767 4.40279 6.5092 4.42529 6.8167L4.91279 14.3692C4.99529 15.5092 5.02529 15.9367 6.59279 15.9367H11.4078C12.9828 15.9367 13.0128 15.5092 13.0878 14.3692L13.5753 6.8167C13.5978 6.5092 13.8678 6.2767 14.1753 6.2917C14.4828 6.3142 14.7228 6.5767 14.7003 6.8917L14.2128 14.4442C14.1303 15.6142 14.0253 17.0617 11.4078 17.0617Z"
        fill={fill}
      />
      <path
        d="M10.2455 12.9375H7.74805C7.44055 12.9375 7.18555 12.6825 7.18555 12.375C7.18555 12.0675 7.44055 11.8125 7.74805 11.8125H10.2455C10.553 11.8125 10.808 12.0675 10.808 12.375C10.808 12.6825 10.553 12.9375 10.2455 12.9375Z"
        fill={fill}
      />
      <path
        d="M10.875 9.9375H7.125C6.8175 9.9375 6.5625 9.6825 6.5625 9.375C6.5625 9.0675 6.8175 8.8125 7.125 8.8125H10.875C11.1825 8.8125 11.4375 9.0675 11.4375 9.375C11.4375 9.6825 11.1825 9.9375 10.875 9.9375Z"
        fill={fill}
      />
    </svg>
  );
};

export default TrashIcon