import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Professional Repair Services",
  desc: "We provide comprehensive repair services for all types of recreational and utility vehicles.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Recreational Vehicles",
      desc: "Expert repair for side by sides, go carts, mini bikes, dirt bikes, and quads.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Lawn Equipment",
      desc: "Professional lawnmower repair and maintenance services.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Custom Work",
      desc: "We can build complete go carts to your specifications.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Professional Welding Services",
  desc: "We offer comprehensive welding services for both steel and aluminum materials.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "TIG Welding",
      desc: "Precision TIG welding for both steel and aluminum materials.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "MIG Welding",
      desc: "Professional MIG welding services for various applications.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Arc Welding",
      desc: "Traditional arc welding for heavy-duty applications.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
