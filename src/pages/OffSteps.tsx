import Steps from "../components/ListSteps";
import Step from "../components/step";
// import step1 from "../assets/images/backimage.png";
import s1 from "../assets/images/steps_off/s1.png";
import s2 from "../assets/images/steps_off/s2.png";
import s3 from "../assets/images/steps_off/s3.png";
import s4 from "../assets/images/steps_off/s4.png";
import s5 from "../assets/images/steps_off/s5.png";
import s6 from "../assets/images/steps_off/s6.png";

import kain from "../assets/images/kain.jpg";

const stepsData: Step[] = [
  {
    name: "general instruction",
    description:
      "This manual is intended for users of the KAIN laser system. It provides a step-by-step guide to the operation of the system. The manual is divided into two sections: the first section covers the steps to turn on the system, while the second section covers the steps to turn off the system. Please follow the instructions carefully to ensure the safe and proper operation of the system.",
    images: [kain],
  },
  {
    name: "Step 1",
    description:
      "Disable Z axis as in fig.29. Click right mouse button on 'Position Z' in SCA main window and press disable axis.",
    images: [s1],
  },
  {
    name: "Step 2",
    description:
      "Turn off vacuum using the handle to the left of sample holder. ",
  },
  {
    name: "Step 3",
    description:
      "Remove the objective from the mount. It is very important to remove the objective before turning off the system. Otherwise the objective might get damaged!",
  },
  {
    name: "Step 4",
    description: "Move manually the Z axis to the lowest position.",
    images: [s2],
  },
  {
    name: "Step 5",
    description: "Turn off air pressure valve for Z axis counterbalance.",
    images: [s3],
  },
  {
    name: "Step 6",
    description: "Turn off light in the system using SCA software.",
    images: [s4],
  },
  {
    name: "Step 7",
    description: "Stop machine vision camera in SCA software.",
  },
  {
    name: "Step 8",
    description:
      "Disable XYZ stages in SCA software: Tools/Axis/Disable drives.",
  },
  {
    name: "Step 9",
    description: "Exit SCA software.",
  },
  {
    name: "Step 10",
    description: "Close pulse picker in PHAROS software.",
  },
  {
    name: "Step 11",
    description: "Stop RA in PHAROS software.",
    images: [s5],
  },
  {
    name: "Step 12",
    description: "Turn off RA LDD and Oscillator LDD.",
    images: [s6],
  },
  {
    name: "Step 13",
    description: "Wait for 10 min until temperature in OSC BAR stabilizes.",
    images: [s6],
  },
  {
    name: "Step 14",
    description:
      "Press 'Turn Power Supply Off' and 'Disconnect'. Close PHAROS software.",
  },
  {
    name: "Step 15",
    description: "Turn off PC.",
  },
  {
    name: "Step 16",
    description:
      "Press and hold green “SYSTEM ON” button on front panel of electronics rack for 9 seconds.Mains contactor will be switched off.",
  },
];

function OffSteps() {
  return <Steps stepsData={stepsData} />;
}
export default OffSteps;
