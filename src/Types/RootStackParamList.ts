import {IMovement} from '../Interfaces/ITransaction';

export type HomeStackParamList = {
  Home: undefined;
};

export type ManageStackParamList = {
  Manage: undefined;
  AddEditMovement: {
    Movement?: IMovement;
  };
};

export type SettingStackParamList = {
  Settings: undefined;
};
