import {Currensy} from './Curreny';

export type RootStackParamsList = {
  Tabs: undefined;
  Home: undefined;
  UserSettings: {userName: string; onChangeName: () => void};
  Details: {currency: Currensy | null};
  Market: undefined;
};
