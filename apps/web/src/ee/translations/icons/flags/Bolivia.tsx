import * as React from 'react';

export function Bolivia(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_568_193499)">
        <path
          d="M40 20c0-2.447-.44-4.79-1.244-6.957L20 12.173l-18.756.87A19.955 19.955 0 000 20c0 2.446.44 4.79 1.244 6.956l18.756.87 18.756-.87A19.956 19.956 0 0040 20z"
          fill="#FFDA44"
        />
        <path d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40z" fill="#6DA544" />
        <path d="M1.244 13.043h37.512C35.93 5.428 28.6 0 20 0 11.4 0 4.07 5.428 1.244 13.043z" fill="#D80027" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_568_193499">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
