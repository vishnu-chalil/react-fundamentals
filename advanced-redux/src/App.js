import { useEffect ,React} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';


let isInital = true;
function App() {

  const isVisible = useSelector(state => state.ui.cartIsvisible);

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const notification = useSelector(state => state.ui.notification);


  useEffect(()=>{

    dispatch(fetchCartData());


  },[dispatch]);


  useEffect(() => {



    if(isInital){
      isInital= false;
      return;
    }

    if(cart.stateChanged){
      dispatch(sendCartData(cart));

    }

  }, [cart, dispatch]);

  return (

    <div>
      {notification && <Notification status={notification.status} 
      message={notification.message} title={notification.title} />}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
      </div>

  );
}

export default App;
