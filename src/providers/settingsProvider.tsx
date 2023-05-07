import React, {
  useState,

  createContext,
  type ReactNode,
  type ReactElement,
} from "react";

import {type  ISettings } from "../modals/ISettings";
import { mockSettings } from "../constants/mockSettings";

interface SettingsProviderProps {
  children: ReactNode;
}

export interface SettingsContext {
  settingsState: ISettings[];
  setSettingsState: (settingsState: ISettings[]) => void;
}

const SettingsStateContext = createContext<SettingsContext>({
  settingsState: [],
  setSettingsState: () => {},
});

const SettingsProvider = ({
  children,
}: SettingsProviderProps): ReactElement => {
  const [settingsState, setSettingsState] = useState<ISettings[]>(mockSettings);

  const value = { settingsState, setSettingsState };
  return (
    <SettingsStateContext.Provider value={value}>
      {children}
    </SettingsStateContext.Provider>
  );
};


export { SettingsProvider, SettingsStateContext };