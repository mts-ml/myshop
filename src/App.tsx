import { Provider } from 'react-redux'
import { Header } from './components/Header/Header'
import { ProductList } from './components/ProductList/ProductList'
import { store } from './redux/store'

import { GlobalStyles } from './styles/GlobalStyles'
import { Counter } from './components/Counter/Counter'


function App() {
  return (
    <Provider store={store}>
      <Header />

      <Counter />

      <ProductList />


      <GlobalStyles />
    </Provider>
  )
}

export default App
