import React, {createContext, useContext, useMemo, useState} from 'react';
import {IDialog} from '../Interfaces/IDialog';

interface IAppContext {
  theme: 'light' | 'dark';
  changeTheme: () => void;
  dialog: IDialog;
  setDialog: React.Dispatch<React.SetStateAction<IDialog>>;
  loading: boolean;
  changeLoading: (e: boolean) => void;
  modalVisible: {visible: boolean; object?: {} | undefined};
  setModalVisible: React.Dispatch<
    React.SetStateAction<{visible: boolean; object?: {} | undefined}>
  >;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({children}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<{
    visible: boolean;
    object?: {};
  }>({visible: false});
  const [dialog, setDialog] = useState<IDialog>({
    callBackConfirm: async () => {},
    callBackCancel: () => {},
    show: false,
    textBody: '',
    textError: [] as string[],
    textTitle: '',
    isAlert: false,
  } as IDialog);
  const changeTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  const changeLoading = (e: boolean) => setLoading(e);

  const values = useMemo(
    () => ({
      theme,
      changeTheme,
      dialog,
      setDialog,
      loading,
      changeLoading,
      modalVisible,
      setModalVisible,
    }),
    [
      theme,
      changeTheme,
      dialog,
      setDialog,
      loading,
      changeLoading,
      modalVisible,
      setModalVisible,
    ],
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext(): IAppContext {
  const context = useContext(AppContext);
  return context;
}
