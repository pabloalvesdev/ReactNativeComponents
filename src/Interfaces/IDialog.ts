export interface IDialog {
  textBody?: string;
  textError?: string[];
  textTitle?: string;
  callBackConfirm?: () => Promise<unknown> | void;
  callBackCancel?: () => void;
  show: boolean;
  mode?: 'alert' | 'dialog';
  alertType?: 'success' | 'error';
}
