import { useContext } from 'react'
import { type SettingsContext, SettingsStateContext } from '../providers/settingsProvider';


const useSettings = (): SettingsContext => {
  const context = useContext(SettingsStateContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export { useSettings }