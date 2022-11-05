import {ITheme} from '../Interfaces/ITheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
