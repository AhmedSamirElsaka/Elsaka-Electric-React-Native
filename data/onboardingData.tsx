import { AnimationObject } from "lottie-react-native";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  title: string;
  description: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require("../assets/animations/Lottie1.json"),
    title: "Welcome to ElectroShop",
    description:
      "Your one-stop shop for all things electric. From lamps to home wiring, we've got you covered",
    textColor: "#005b4f",
    backgroundColor: "#ffa3ce",
  },
  {
    id: 2,
    animation: require("../assets/animations/Lottie2.json"),
    title: "Brighten Your Home",
    description:
      "Discover a wide range of lighting solutions to create the perfect ambiance in any room",
    textColor: "#005b4f",
    backgroundColor: "#ffa3ce",
  },

  {
    id: 3,
    animation: require("../assets/animations/Lottie3.json"),
    title: "Power Up with Quality",
    description:
      "Find high-quality electrical equipment and accessories, designed for safety and durability",
    textColor: "#005b4f",
    backgroundColor: "#ffa3ce",
  },
  {
    id: 4,
    animation: require("../assets/animations/Lottie4.json"),
    title: "Shop with Ease",
    description:
      "Enjoy a seamless shopping experience with our intuitive interface and secure checkout",
    textColor: "#005b4f",
    backgroundColor: "#ffa3ce",
  },
  {
    id: 5,
    animation: require("../assets/animations/Lottie5.json"),
    title: "Get Started",
    description:
      "Sign up now and explore the latest in electrical technology for your home",
    textColor: "#005b4f",
    backgroundColor: "#ffa3ce",
  },
];

export default data;
