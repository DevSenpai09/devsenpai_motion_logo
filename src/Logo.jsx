import { motion } from "framer-motion";

const svgVariants = {
  initial: { x: "-150vw" },
  animate: {
    x: "0vw",
    transition: {
      type: "spring",
      mass: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const boxesVariants = {
  initial: { skewY: 40 },
  animate: {
    skewY: 0,
    transition: {
      type: "tween",
      when: "beforeChildren",
    },
  },
};

const boxesSecondChiledVariants = {
  initial: { x: -73, y: -33 },
  animate: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

const boxesThirdChiledVariants = {
  initial: { x: -146, y: -65 },
  animate: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

const lineVariants = {
  initial: { height: 0 },
  animate: {
    height: "100%",
    transition: {
      type: "spring",
    },
  },
};

const textVariants = {
  initial: { clipPath: "inset(0px 0px 0px 790px)", x: -880 },
  animate: {
    x: 0,
    clipPath: "inset(0px 0px 0px 0px)",
    transition: {
      type: "spring",
    },
  },
};

const NewLogo = () => {
  return (
    <motion.svg
      variants={svgVariants}
      initial="initial"
      animate="animate"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1279.75 342.43"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="351.01"
          y1="113.55"
          x2="641.78"
          y2="113.55"
          gradientTransform="translate(107.42 922.38) rotate(-65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9abded" />
          <stop offset="0" stopColor="#4273c5" />
          <stop offset="0" stopColor="#002d5b" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="351.01"
          y1="46.82"
          x2="641.78"
          y2="46.82"
          gradientTransform="translate(107.42 922.38) rotate(-65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ee9994" />
          <stop offset="0.38" stopColor="#ec9894" />
          <stop offset="0.51" stopColor="#e59592" />
          <stop offset="0.61" stopColor="#da908f" />
          <stop offset="0.69" stopColor="#c9888b" />
          <stop offset="0.76" stopColor="#b37e86" />
          <stop offset="0.82" stopColor="#97727f" />
          <stop offset="0.87" stopColor="#776377" />
          <stop offset="0.92" stopColor="#51526e" />
          <stop offset="0.96" stopColor="#283f65" />
          <stop offset="1" stopColor="#002d5b" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="351.01"
          y1="193.11"
          x2="641.78"
          y2="193.11"
          gradientTransform="translate(107.42 922.38) rotate(-65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#a0c2ef" />
          <stop offset="0" stopColor="#4273c5" />
          <stop offset="0" stopColor="#002d5b" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="351.01"
          y1="126.37"
          x2="641.78"
          y2="126.37"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="351.01"
          y1="272.66"
          x2="641.78"
          y2="272.66"
          xlinkHref="#linear-gradient-3"
        />
        <linearGradient
          id="linear-gradient-6"
          x1="351.01"
          y1="205.93"
          x2="641.78"
          y2="205.93"
          xlinkHref="#linear-gradient-2"
        />
      </defs>
      <title>logo</title>
      <g>
        <motion.rect
          variants={lineVariants}
          id="line"
          x="386.34"
          y="0.21"
          width="15"
          height="342"
          rx="3.14"
          style={{ fill: "#e1e5e8" }}
        />
        <motion.g variants={boxesVariants} id="boxes">
          <g id="box1">
            <path
              d="M340,643.53c1.63.76,3.89.19,6.37-1.89l110.13-92.42c5-4.17,9-12.88,9-19.36V386.09c0-3.24-1-5.33-2.65-6.1l-24-11.2c1.64.76,2.65,2.85,2.65,6.09V518.65c0,6.48-4.07,15.2-9,19.36L322.32,630.43c-2.48,2.08-4.74,2.65-6.38,1.89Z"
              transform="translate(-314.25 -368.79)"
              style={{ fill: "url(#linear-gradient)" }}
            />
            <path
              d="M463.82,380.44c-1.63-.76-3.89-.2-6.37,1.89L347.32,474.74c-5,4.17-9,12.88-9,19.37V637.87c0,3.24,1,5.34,2.65,6.1l-24-11.21c-1.64-.76-2.65-2.85-2.65-6.09V482.9c0-6.48,4.07-15.2,9-19.36l110.13-92.42c2.48-2.08,4.74-2.65,6.38-1.89Z"
              transform="translate(-314.25 -368.79)"
              style={{ fill: "url(#linear-gradient-2)" }}
            />
          </g>
          <motion.g variants={boxesSecondChiledVariants} id="box2">
            <path
              d="M412.08,677.15c1.63.76,3.89.19,6.37-1.89l110.13-92.42c5-4.17,9-12.88,9-19.36V419.71c0-3.24-1-5.33-2.66-6.1l-24-11.2c1.64.76,2.65,2.85,2.65,6.09V552.27c0,6.48-4.07,15.2-9,19.36L394.42,664.05c-2.48,2.08-4.74,2.65-6.38,1.89Z"
              transform="translate(-314.25 -368.79)"
              style={{ fill: "url(#linear-gradient-3)" }}
            />
            <path
              d="M535.92,414.06c-1.63-.76-3.89-.19-6.37,1.89L419.42,508.37c-5,4.16-9,12.88-9,19.36V671.5c0,3.24,1,5.33,2.66,6.09l-24-11.2c-1.63-.77-2.65-2.86-2.65-6.1V516.52c0-6.48,4.07-15.19,9-19.36l110.13-92.42c2.49-2.08,4.74-2.65,6.38-1.89Z"
              transform="translate(-314.25 -368.79)"
              style={{ fill: "url(#linear-gradient-4)" }}
            />
          </motion.g>
          <motion.g variants={boxesThirdChiledVariants} id="box3">
            <path
              d="M484.18,710.77c1.63.76,3.89.19,6.37-1.89l110.13-92.42c5-4.16,9-12.88,9-19.36V453.33c0-3.24-1-5.33-2.66-6.09L583,436c1.64.76,2.65,2.86,2.65,6.1V585.89c0,6.49-4.07,15.2-9,19.37L466.52,697.67c-2.48,2.09-4.74,2.65-6.38,1.89Z"
              transform="translate(-314.25 -368.79)"
              style={{ fill: "url(#linear-gradient-5)" }}
            />
            <path
              d="M608,447.68c-1.63-.76-3.89-.19-6.37,1.89L491.52,542c-5,4.16-9,12.88-9,19.36V705.12c0,3.24,1,5.33,2.66,6.09l-24-11.2c-1.63-.77-2.65-2.86-2.65-6.1V550.14c0-6.48,4.06-15.19,9-19.36l110.13-92.42c2.49-2.08,4.74-2.65,6.38-1.89Z"
              transform="translate(-314.25 -368.79)"
              style={{ fill: "url(#linear-gradient-6)" }}
            />
          </motion.g>
        </motion.g>
        <motion.g variants={textVariants} id="letters">
          <path
            d="M801.58,468.91h41c32.5,0,55.93,20.64,55.93,59.14,0,40.55-21.19,65-57.83,65H801.58ZM818.91,579h21.22c27.12,0,40.45-18.81,40.45-50.45,0-28.9-15.59-45.38-40.27-45.38h-21.4Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <path
            d="M931.19,550.56c-.1,17,7,30.44,22.71,30.44,14,0,18.31-9.65,20-14.3h16.47c-3.29,12.16-12.56,28-37.16,28-28.78,0-39-22.06-39-47.75,0-22.53,11.11-47.4,39.88-47.4,29.11,0,37.65,22.32,37.65,43.93,0,.66-.08,6.32-.17,7Zm44-11.89c-.45-14.56-6.3-25.77-21.51-25.77-17.28,0-21.41,15.38-22.16,25.77Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <path
            d="M1018.5,501.38c11.72,37.39,19.59,62.41,22.31,75.61h.18c2-11.39,16.3-53.2,23.18-75.61h16.58L1049.27,593h-18.21l-30.39-91.63Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <path
            d="M1107.21,557.67c2.31,15.18,12.52,22.87,27,22.87,14.74,0,23.63-7.33,23.63-20.19,0-13.27-6.55-18.87-27.59-25.31-26.51-7.92-36.43-16.87-36.43-34.69,0-20.34,15.55-33.06,38.73-33.06,27.3,0,38.9,15.7,40.24,33.68h-17.1c-1.83-12-8.56-19.85-23.51-19.85-13.9,0-20.8,6.74-20.8,17.61,0,11.19,6.41,15.41,25.89,21.25,30.79,9.28,38.37,21.18,38.37,38.41,0,20.57-14.12,36-42.2,36-26,0-41.65-13.79-43.38-36.76Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <path
            d="M1207.3,550.56c-.1,17,7,30.44,22.71,30.44,14,0,18.32-9.65,20-14.3h16.47c-3.28,12.16-12.56,28-37.16,28-28.78,0-39-22.06-39-47.75,0-22.53,11.11-47.4,39.88-47.4,29.11,0,37.65,22.32,37.65,43.93,0,.66-.08,6.32-.16,7Zm44-11.89c-.46-14.56-6.3-25.77-21.52-25.77-17.28,0-21.4,15.38-22.16,25.77Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <path
            d="M1287.21,530.05c0-19.07-.18-24.73-.36-28.67h16.39c.26,1.72.7,10,.61,13.87,3.78-8,12.09-15.67,26.72-15.67,17.41,0,29.12,10.09,29.12,34.13V593h-16.82V536.48c0-12.75-4.12-22.49-17.34-22.49-15.3,0-21.6,11-21.6,29.62V593h-16.72Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <path
            d="M1402,582.59v46.53h-16.64V528.28c0-12.5.08-21.17-.28-26.9h16.39c.26,3.07.44,9.26.53,14.25,4.23-8.79,13-16.05,28.12-16.05,19.75,0,34.28,15.56,34.28,46.22s-16.49,48.73-38.09,48.73C1413.29,594.53,1405.77,589.48,1402,582.59Zm45.22-36.33c0-21.58-8.64-32.45-22.61-32.45-18,0-23.38,12-23.38,33.66,0,19.72,3.92,33,22.46,33C1438.52,580.46,1447.17,568.25,1447.17,546.26Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <path
            d="M1549.26,572a168.9,168.9,0,0,0,1.36,21h-15.07a79.86,79.86,0,0,1-1.34-13.56c-3.57,8.86-12.7,15.18-27.31,15.18-22.43,0-29.52-14.91-29.52-27.83,0-14.32,9.4-29.29,42-29.29h13.4v-8.46c0-8.46-2.44-16.82-17-16.82-12.82,0-17,6-18.44,15.44H1481c1.3-15.17,10.12-28.09,35.22-28.09,19.63,0,33.06,7.66,33.06,28.88Zm-16-22.78h-13.86c-21.08,0-25,8.56-25,16.48,0,8.41,5.09,15.41,16.17,15.41,17.29,0,22.73-11.63,22.73-30Z"
            transform="translate(-314.25 -368.79)"
            style={{ fill: "#002d5b" }}
          />
          <g>
            <rect
              x="1260.6"
              y="132.59"
              width="16.72"
              height="91.63"
              style={{ fill: "#002d5b" }}
            />
            <circle
              cx="1269.25"
              cy="105.71"
              r="10.5"
              style={{ fill: "#ec5b53" }}
            />
          </g>
        </motion.g>
      </g>
    </motion.svg>
  );
};

export default NewLogo;
