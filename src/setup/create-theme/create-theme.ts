/* eslint-disable simple-import-sort/imports */
import { ColorsInterface } from "../../types/color.types";
import { DeviceOnTheme } from "../../types/device-on-theme.type";
import { FontsInterface } from "../../types/fonts.interface";
import { ThemeInterface } from "../../types/theme.types";

import { createThemeForNative } from "./create-theme.native";
import { createThemeForWeb } from "./create-theme.web";

export interface ThemeConfig {
  colorPreferences?: Partial<ColorsInterface>;
  fontPreferences?: Partial<FontsInterface>;
  deviceOnTheme?: Partial<DeviceOnTheme>;
}

export interface CreateThemeFunc {
  (config: ThemeConfig): ThemeInterface;
}

export const createTheme: CreateThemeFunc =
  createThemeForNative || createThemeForWeb;

export default createTheme;
