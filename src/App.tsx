import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { IconContext } from 'react-icons';
import GlobalStyles from '@/global/globalStyles';
import store, { persistor } from '@/app/store';
import router from '@/router/Router';
import colors from './global/colors';

const App = () => {
  const iconSetting = useMemo(
    () => ({
      size: '24px',
      color: colors.Black,
      style: { marginTop: '-2px', marginBottom: '-2px' },
    }),
    []
  );
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconContext.Provider value={iconSetting}>
          <RouterProvider router={router} />
        </IconContext.Provider>

        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
};

export default App;
