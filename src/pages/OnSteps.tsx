import Steps from "../components/ListSteps";
import Step from "../components/step";
import kain from "../assets/images/kain.jpg";
import s1 from "../assets/images/steps_on/s1.jpg";
import s2 from "../assets/images/steps_on/s2.png";
import s3 from "../assets/images/steps_on/s3.png";
import s4 from "../assets/images/steps_on/s4.png";
import s5 from "../assets/images/steps_on/s5.png";
import s6 from "../assets/images/steps_on/s6.png";
import s7 from "../assets/images/steps_on/s7.png";
import s8 from "../assets/images/steps_on/s8.png";
import s9 from "../assets/images/steps_on/s9.png";
import s10 from "../assets/images/steps_on/s10.png";
import s11 from "../assets/images/steps_on/s11.png";
import s12 from "../assets/images/steps_on/s12.png";
import s13 from "../assets/images/steps_on/s13.png";
import s14 from "../assets/images/steps_on/s14.png";
import s15 from "../assets/images/steps_on/s15.png";
import s16 from "../assets/images/steps_on/s16.png";
import s17 from "../assets/images/steps_on/s17.png";
import s18 from "../assets/images/steps_on/s18.png";
import s19 from "../assets/images/steps_on/s19.png";
import s20 from "../assets/images/steps_on/s20.png";
import s21 from "../assets/images/steps_on/s21.png";
import s22 from "../assets/images/steps_on/s22.png";
import s23 from "../assets/images/steps_on/s23.png";
import s24 from "../assets/images/steps_on/s24.png";
import s25 from "../assets/images/steps_on/s25.png";
import s26 from "../assets/images/steps_on/s26.png";
import s27 from "../assets/images/steps_on/s27.png";
import s28 from "../assets/images/steps_on/s28.png";

const stepsData: Step[] = [
  {
    name: "General Instruction",
    description:
      "This manual is intended for users of the KAIN femtosecondlaser system ( femtoLAB ). It provides a step-by-step guide to the operation of the system. Please follow the instructions carefully to ensure the safe and proper operation of the system.",
    images: [kain],
  },
  {
    name: "Step 1",
    description: "Make sure that the mains cables are plugged in.",
    images: [s1],
    // timer: {
    //   duration: 5, // Wait for 5 seconds
    // },
  },
  {
    name: "Step 2",
    description:
      "Press green “SYSTEM ON” button on front panel of electronics rack of the system rack cabinet. [ If the system cannot be powered on by pressing “SYSTEM ON” button, please check mains cables and emergency stop button. Green button will not work if system was shut down by hitting emergency stop, or shutter fault occurred during operation. In order to recover from emergency stop state: restore emergency stop button and unplug system from mains for 10 seconds ]",
    images: [s2, s3],
    timer: {
      duration: 10,
    },
  },
  {
    name: "Step 3",
    description:
      "Switch on the computer by pressing “Power on” switch in front panel of computer.",
    images: [s4],
    // timer: {
    //   duration: 10, // Wait for 10 seconds
    // },
  },
  {
    name: "Step 4",
    description:
      "Switch on the Aerotech controller by pressing “On” switch in front panel of controller rack.",
    images: [s5],
  },
  {
    name: "Step 5",
    description:
      "Laser power supply and chiller are located in the adjacent room. Check if the laser power on button is switched on. The button is located on front panel of power supply rack of laser rack cabinet. Shutter key has to be in position 'Open'",
    images: [s6, s7],
  },
  {
    name: "Step 6",
    description:
      "Check water level status. Fill the water tank if the water level is below MIN level indicator. Use only distilled water!",
    images: [s8],
  },
  {
    name: "Step 7",
    description:
      "The air compressor is also located in the same room as laser power supply rack. Check if the switch on the side of compressor is set to the position 'Auto'.",
    images: [s9],
  },
  {
    name: "Step 8",
    description:
      "Check if the air pressure in the compressor is set to 3.5 bar. Use the adjustment valve to set the correct air pressure. Check the filter. If there is water in the filter, drain it. Every month the compressor should be drained of condensed water. It can be done by removing the plug on the bottom of the compressor. The draining of compressor should be performed while the system is OFF",
    images: [s10],
  },
  {
    name: "Step 9",
    description:
      "There are air release switches on the top of air compressor. Usually they are in a position tore lease the air to the system. In case they are closed, push the air release switches according to the arrows to deliver air to the legs of vibration isolating optical table and counter balance of Z axis linear stage. Wait for 5-10 min for the air flow to the table legs to stabilize",
    images: [s11],
    timer: {
      duration: 600,
    },
  },
  {
    name: "Step 10",
    description:
      "There is a vacuum pump under the floor of laboratory. It can be reached by removing one of the floor palets. Usually the pump is turned on automatically with starting the system. There is no need to turn it on/off on regular basis. Turning on/off can be performed by pressing the button on the top of the pump.",
    images: [s12, s13],
  },
  { name: "Step 11", description: "Launch PHAROS software", images: [s14] },
  {
    name: "Step 12",
    description:
      "Press 'Connect' and 'Turn power supply ON' on the top of software window",
  },
  {
    name: "Step 13",
    description:
      "Turn on Oscillator LDD and Regenerative Amplifier (RA) LDD by pressing 'On'.",
    images: [s15],
  },
  {
    name: "Step 14",
    description:
      "Wait 10 to 20 min, until chiller water temperature stabilizes at 23°C.",
    timer: {
      duration: 1200,
    },
  },
  {
    name: "Step 15",
    description:
      "Start oscillator by pressing “Start Oscillator”. 'ML active' field becomes green after oscillator starting procedure is over. The power of the oscillator automatically locks at 1900mW ± 50mW. If there is a larger deviation one should perform a mode locking range test for oscillator.It can be performed using 'Pharos' software by pressing: 'Prameters/CW detector parameters/Measure oscillators operational range'. This will automatically lock the oscillator power at different value. Note this value. Check what is the difference between 'The highest MLcurrent' and 'The lowest ML current'. If this value is lower than 1A, contact the manufacturer.",
    images: [s16],
  },
  {
    name: "Step 16",
    description:
      "Set RA LLD current. See PHAROS manual for current vs output power graph. Recommended current for normal operation is approximately 18A.",
    images: [s17],
  },
  {
    name: "Step 17",
    description:
      "Choose the desired laser output wavelength in the'Harmonics generator' field, wait until'Start RA' button becomes active, press 'Start RA' button, press 'Open Pulse Picker' button",
    images: [s18],
  },
  {
    name: "Step 18",
    description: "Wait for approximately 10 min.",
    timer: {
      duration: 600,
    },
  },
  {
    name: "Step 19",
    description:
      "Lock RA power level by pressing “lock actual power” or set power target in the field 'New power target'. This value depends on the planned experiments. 1500-2000mW is usually a good starting point.",
    images: [s19],
  },
  {
    name: "Step 20",
    description:
      "By setting tansmission ('Set transmission' button) one can attenuate the output power as well.The actual output power will be an approximate result of multiplying the indicated RA power by transmission percentage and devided by 100.",
  },
  {
    name: "Step 21",
    description: "Press 'Open shutter' at the top of the PHAROS software.",
  },
  {
    name: "Step 22",
    description:
      "Prepare optical scheme (see section 5 in the user manual 'Preparing optical schemes').",
  },
  {
    name: "Step 23",
    description:
      "Turn the counter balance air pressure ON/OFF valve to the position ON (the knob is in parallel to the hose).",
    images: [s20],
  },
  {
    name: "Step 24",
    description:
      "Mount the necessary objective. Hold z axis as it can fall down (if Z axis counter balance air pressure is low) and can damage the objective!",
  },
  {
    name: "Step 25",
    description:
      "Move z axis manually to the middle of total travel. Adjust air supply valve (shown in step 23 ) if necessary to keep Z axis in position.",
    images: [s21],
  },
  {
    name: "Step 26",
    description: "Launch SCA software.",
    images: [s22],
  },

  {
    name: "Step 27",
    description:
      "Select correct parameter file according to the optical scheme and focussing optics in use and press apply.",
    images: [s23],
  },
  {
    name: "Step 28",
    description: " Press “Initialize” button.",
    images: [s24],
  },
  {
    name: "Step 29",
    description: "Home stages, attenuator and polarization rotator .",
  },
  {
    name: "Step 30",
    description: " Launch machine vision camera.",
  },
  {
    name: "Step 31",
    description:
      "Zoom in to machine vision preview by pressing the button marked with red circle",
    images: [s25],
  },
  {
    name: "Step 32",
    description:
      "Turn on light (coaxial or backlight). One can choose from low, medium and high light intensity.",
    images: [s26],
  },
  {
    name: "Step 33",
    description:
      "Put the sample on the sample holder. Vacuum suction should be used to fix the sample on the holder. The vacuum is turned on and off using a handle to the left of the holder.",
    images: [s27],
  },
  {
    name: "Step 34",
    description:
      "If the universal sample holder is used, choose the most suitable position for your sample and apply M1,5 key to open one of several possible vacuum openings.",
    images: [s28],
  },
  {
    name: "Step 35",
    description:
      "Apply joystick to find a rough machine vision focus position. Use arrow keys: 'Up' will move the objective away from sample. 'Down' will move objective closer to sample.",
  },
];
function OnSteps() {
  return <Steps stepsData={stepsData} />;
}
export default OnSteps;
