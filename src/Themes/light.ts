import {ITheme} from '../Interfaces/ITheme';

const light: ITheme = {
  background: {
    default: 'white',
    //default: '#ecf0f1',
    lighter: 'lightgray',
  },
  secondary: '#9A57E6',
  primary: {
    default: '#429EBD',
    darker: '#35757c',
    lighter: '#69B7BF',
  },
  text: {
    primary: '#424258',
    cancel: '#F73668',
    success: '#96C644',
    warning: 'yellow',
  },
};
export default light;
