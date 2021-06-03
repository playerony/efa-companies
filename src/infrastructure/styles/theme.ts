import {
  SMALL_SCREEN_BREAKPOINT,
  LARGE_SCREEN_BREAKPOINT,
  MEDIUM_SCREEN_BREAKPOINT,
  MOBILE_SCREEN_BREAKPOINT,
  XMOBILE_SCREEN_BREAKPOINT,
} from '../constants';

export type FontFamily = 'primary' | 'secondary';

export type Radius = 'default' | 'medium' | 'large';

export type FontWeight = 'bold' | 'semibold' | 'normal';

export type Spacing = 'large' | 'base' | 'medium' | 'small' | 'xsmall';

export type FontSize = 'xsmall' | 'small' | 'regular' | 'medium' | 'big' | 'large';

export type DeviceBreakpoint = 'large' | 'medium' | 'small' | 'mobile' | 'xmobile';

export type Color = 'gray' | 'black' | 'white' | 'borders' | 'background' | 'fontPrimary';

export type DeviceBreakpointObject = { [key in DeviceBreakpoint]: number };

export interface Theme {
  color: { [key in Color]: string };
  radius: { [key in Radius]: string };
  spacing: { [key in Spacing]: string };
  fontSize: { [key in FontSize]: string };
  fontFamily: { [key in FontFamily]: string };
  fontWeight: { [key in FontWeight]: number };
  deviceBreakpoint: DeviceBreakpointObject;
}

export const deviceBreakpoint: DeviceBreakpointObject = {
  large: LARGE_SCREEN_BREAKPOINT,
  small: SMALL_SCREEN_BREAKPOINT,
  medium: MEDIUM_SCREEN_BREAKPOINT,
  mobile: MOBILE_SCREEN_BREAKPOINT,
  xmobile: XMOBILE_SCREEN_BREAKPOINT,
};

export const theme: Theme = {
  fontFamily: {
    secondary: 'Raleway',
    primary: 'Montserrat',
  },
  color: {
    gray: '#F8F8F8',
    black: '#000000',
    white: '#FFFFFF',
    borders: '#EAEAEA',
    background: '#F8F8FB',
    fontPrimary: '#000000',
  },
  radius: {
    default: '5px',
    medium: '10px',
    large: '30px',
  },
  fontSize: {
    xsmall: '12px',
    small: '16px',
    regular: '18px',
    medium: '24px',
    big: '34px',
    large: '48px',
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    normal: 500,
  },
  spacing: {
    xsmall: '5px',
    small: '10px',
    medium: '20px',
    base: '40px',
    large: '60px',
  },
  deviceBreakpoint,
};
