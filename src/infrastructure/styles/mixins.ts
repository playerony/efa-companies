import { css, FlattenSimpleInterpolation } from 'styled-components';

import { deviceBreakpoint, DeviceBreakpointObject } from './theme';

export const respondTo = (Object.keys(deviceBreakpoint) as (keyof DeviceBreakpointObject)[]).reduce<
  {
    [key in keyof DeviceBreakpointObject]:(
      style: TemplateStringsArray,
      ...args: Array<any>
    ) => FlattenSimpleInterpolation;
  }
>((accumulator, breakpoint) => {
  accumulator[breakpoint] = (
    style: TemplateStringsArray,
    ...args: Array<any>
  ): FlattenSimpleInterpolation => css`
    @media (max-width: ${deviceBreakpoint[breakpoint]}px) {
      ${css(style, ...args)};
    }
  `;

  return accumulator;
}, {} as any);
