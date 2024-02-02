import { swatch, fileIcon, ai, logoShirt, stylishShirt, chat, color, logo, texture, upload } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: color,
  },
  {
    name: "filepicker",
    icon: upload,
  },
  {
    name: "aipicker",
    icon: chat,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logo,
  },
  {
    name: "stylishShirt",
    icon: texture,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
