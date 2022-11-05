export interface ITheme {
  background: {
    default: string;
    lighter: string;
  };
  secondary: string;
  primary: {
    darker: string;
    default: string;
    lighter: string;
  };
  text: {
    primary: string;
    cancel: string;
    success: string;
    warning: string;
  };
}
