import {createContext} from 'react';

const AppBarContext = createContext<{
  showAppBar: boolean;
  setShowAppBar: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  showAppBar: true,
  setShowAppBar() {
    // do nothing
  },
});

export default AppBarContext;
