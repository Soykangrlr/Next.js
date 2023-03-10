import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store, wrapper } from '../store/store';
import { FC } from 'react';
const App: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);

  return(
    <>
      
      <Provider store={store}>
      
   
        <Component {...props.pageProps} />
      
        
    </Provider>
  
    </>
  );
}
export default App