import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#20419a",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./react.svg",
  fullDecal: "./texture.png",
});

export default state;
