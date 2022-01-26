import "../src/OrbiterElement.ts";
import "../src/OrbitingElement.ts";

export default {
  parameters: {
    layout: "centered",
  backgrounds: { default: 'rgb(23,23,23)' }
  },
};

const main = `
  <svg slot="content" width="78" height="70" viewBox="0 0 78 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_301_4957)">
      <path d="M0.5 70V58.4H9.7V11.6H0.5V0H36.5C40.765 0 44.4817 0.7175 47.65 2.1525C50.8183 3.5875 53.285 5.62 55.05 8.25C56.815 10.885 57.6983 14.035 57.7 17.7V18.7C57.7 21.9033 57.1 24.5208 55.9 26.5525C54.7 28.5842 53.2833 30.15 51.65 31.25C50.2187 32.249 48.6532 33.0402 47 33.6V35.4025C48.7018 35.9128 50.3191 36.671 51.8 37.6525C53.5317 38.7525 55.015 40.3358 56.25 42.4025C57.485 44.4692 58.1017 47.1692 58.1 50.5025V51.5025C58.1 55.3692 57.2 58.6858 55.4 61.4525C53.5763 64.2398 50.9905 66.4447 47.95 67.805C44.7833 69.27 41.1 70.0025 36.9 70.0025L0.5 70ZM22.9 28.8025H35.1C37.8333 28.8025 40.0833 28.1017 41.85 26.7C43.6167 25.2983 44.5 23.3658 44.5 20.9025V19.9025C44.5 17.3675 43.6333 15.4175 41.9 14.0525C40.1667 12.6875 37.9 12.0033 35.1 12H22.9V28.8025ZM22.9 58H35.3C38.165 58 40.4817 57.3 42.25 55.9C44.0183 54.5 44.9017 52.5 44.9 49.9V48.9C44.9 46.3033 44.0333 44.3033 42.3 42.9C40.5667 41.4967 38.2333 40.7975 35.3 40.8025H22.9V58Z" fill="#F8C307"/>
      <path d="M71.0975 70V0H77.0975V70H71.0975Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_301_4957">
        <rect width="76.5975" height="70" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>
`;

const svg1 = `
  <svg width="53" height="80" viewBox="0 0 53 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_13)">
      <path d="M13.1845 79.9999C20.4594 79.9999 26.3637 74.0266 26.3637 66.6666V53.3333H13.1845C5.90955 53.3333 0.00527191 59.3066 0.00527191 66.6666C0.00527191 74.0266 5.90955 79.9999 13.1845 79.9999Z" fill="#0ACF83"/>
      <path d="M0.00527191 40C0.00527191 32.64 5.90955 26.6667 13.1845 26.6667H26.3637V53.3332H13.1845C5.90955 53.3332 0.00527191 47.3599 0.00527191 40Z" fill="#A259FF"/>
      <path d="M0.00494385 13.3333C0.00494385 5.97333 5.90922 0 13.1841 0H26.3633V26.6666H13.1841C5.90922 26.6666 0.00494385 20.6933 0.00494385 13.3333Z" fill="#F24E1E"/>
      <path d="M26.3636 0H39.5429C46.8178 0 52.7221 5.97333 52.7221 13.3333C52.7221 20.6933 46.8178 26.6666 39.5429 26.6666H26.3636V0Z" fill="#FF7262"/>
      <path d="M52.7221 40C52.7221 47.3599 46.8178 53.3332 39.5429 53.3332C32.2679 53.3332 26.3636 47.3599 26.3636 40C26.3636 32.64 32.2679 26.6667 39.5429 26.6667C46.8178 26.6667 52.7221 32.64 52.7221 40Z" fill="#1ABCFE"/>
    </g>
    <defs>
      <clipPath id="clip0_0_13">
        <rect width="52.7273" height="80" fill="white"/>
      </clipPath>
    </defs>
  </svg>
`;

const svg2 = `
  <svg width="86" height="80" viewBox="0 0 86 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_4)">
      <path d="M42.6917 80.0147L58.393 30.8789H26.99L42.6913 80.0147H42.6917Z" fill="#E24329"/>
      <path d="M42.6917 80.0147L26.99 30.8785H4.98533L42.6917 80.0147Z" fill="#FC6D26"/>
      <path d="M4.9853 30.8785L0.213999 45.8108C0.00185209 46.4746 0.00182282 47.1897 0.213915 47.8535C0.426008 48.5174 0.839334 49.0959 1.39466 49.5062L42.6914 80.0147L4.98497 30.8789L4.9853 30.8785Z" fill="#FCA326"/>
      <path d="M4.98533 30.8789H26.99L17.5337 1.28457C17.047 -0.238275 14.9283 -0.237936 14.442 1.28457L4.98533 30.8789Z" fill="#E24329"/>
      <path d="M42.6917 80.0147L58.393 30.8785H80.398L42.6913 80.0147H42.6917Z" fill="#FC6D26"/>
      <path d="M80.3977 30.8785L85.169 45.8108C85.3811 46.4746 85.3811 47.1897 85.1689 47.8536C84.9568 48.5174 84.5434 49.096 83.988 49.5062L42.6917 80.0147L80.3977 30.8789V30.8785Z" fill="#FCA326"/>
      <path d="M80.398 30.8789H58.393L67.8497 1.28457C68.3363 -0.238275 70.455 -0.237936 70.9413 1.28457L80.398 30.8789Z" fill="#E24329"/>
    </g>
    <defs>
      <clipPath id="clip0_0_4">
        <rect width="85.3333" height="80" fill="white"/>
      </clipPath>
    </defs>
  </svg>
`;

const svg3 = `
  <svg width="88" height="80" viewBox="0 0 88 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7329 28.7451L43.5455 79.9076L0.159203 28.7451H17.7329Z" fill="#EA6C00"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.3653 28.7451L43.5528 79.9076L86.939 28.7451H69.3653Z" fill="#EA6C00"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7319 28.7451H69.357L43.5445 79.9076L17.7319 28.7451Z" fill="#FDAD00"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5444 0.390701L19.0905 3.00837L17.7319 28.7451L43.5444 0.390701Z" fill="#FDD231"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5445 0.390701L67.9985 3.00837L69.3571 28.7451L43.5445 0.390701Z" fill="#FDD231"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M86.939 28.7452L68.0067 3.00837L69.3653 28.7452H86.939Z" fill="#FDAD00"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.159203 28.7452L19.0914 3.00837L17.7328 28.7452H0.159203Z" fill="#FDAD00"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5445 0.390701L17.7319 28.7451H69.357L43.5445 0.390701Z" fill="#FEEEB7"/>
  </svg>
`;

const svg4 = `
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 40V24L53.3333 32V48L40 40Z" fill="#AB9FF4"/>
    <path d="M40 40L26.6667 48V32L40 24V40Z" fill="#8D7CF6"/>
    <path d="M53.3333 48L40 56L26.6667 48L40 40L53.3333 48ZM66.6667 40V24L80 32V48L66.6667 40Z" fill="#624DE3"/>
    <path d="M80 48L66.6667 56L53.3333 48L66.6667 40L80 48ZM26.6667 64L13.3333 72V56L26.6667 48V64Z" fill="#AB9FF4"/>
    <path d="M40 72L26.6667 80L13.3333 72L26.6667 64L40 72Z" fill="#624DE3"/>
    <path d="M26.6667 32L13.3333 40L0 32L13.3333 24L26.6667 32Z" fill="#AB9FF4"/>
    <path d="M13.3333 56V40L0 32V48L13.3333 56V56ZM53.3333 80V64L66.6667 56V72L53.3333 80Z" fill="#624DE3"/>
    <path d="M53.3333 80V64L40 56V72L53.3333 80Z" fill="#AB9FF4"/>
    <path d="M66.6667 8L53.3333 16L40 8L53.3333 0L66.6667 8Z" fill="#624DE3"/>
    <path d="M53.3333 32V16L66.6667 8V24L53.3333 32ZM26.6667 16V0L40 8V24L26.6667 16V16Z" fill="#AB9FF4"/>
    <path d="M26.6667 16L13.3333 24V8L26.6667 0V16Z" fill="#624DE3"/>
  </svg>
`;

export const story1 = () => `
  <style>
    .wrap {
      text-align: center;
    }
    h1 {
      color: white;
      font-size: 40px;
      margin-bottom: 100px;
    }
  </style>
  <div class="wrap">
    <h1>We integrate with lots of tools</h1>
    <orbiter-element>
      ${main}
      <orbiting-element direction="1" slot="orbiting">${svg1}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg2}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg3}</orbiting-element>
      <orbiting-element direction="1" slot="orbiting">${svg4}</orbiting-element>
    </orbiter-element>
  </div>
`;
