import { Provider } from 'react-redux'
import { Header } from './components/Header/Header'
import { ProductList } from './components/ProductList/ProductList'
import { store } from './redux/store'

import { GlobalStyles } from './styles/GlobalStyles'


function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />

      
      <GlobalStyles />
    </Provider>
  )
}

export default App
