import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/ContentHome/Background';
import Filter from './Components/Filter/Filter';
import Diseases from './Components/Diseases/Diseases';
import Footer from './Components/Footer/Footer';
import Boxes from './Components/boxes/Boxes';
import DeliverySec from './Components/DeliverySec/DeliverySec';
import AllProducts from './Components/allProducts/AllProducts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLayout from './Layout/UserLayout';
import Home from './Components/Home/Home';

import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Disease from './Components/Disease/Disease';
import Vegetables from './Components/Products/Vegetables/Vegetables';
import Fruits from './Components/Products/Fruits/Fruits';
import Herbals from './Components/Products/Herbals/Herbals';
import Meat from './Components/Products/Meat/Meat';
import Milk from './Components/Products/Milk/Milk';
import Cart from './Components/Cart/Cart';
import Heart from './Components/DiseaseItem/Heart';
import Diabetes from './Components/DiseaseItem/Diabetes';
import Liver from './Components/DiseaseItem/Liver';
import Pressure from './Components/DiseaseItem/Pressure';
import Kidney from './Components/DiseaseItem/Kidney';
import AdminLayout from './Layout/AdminLayout';
import Admin from './Admin/Admin';
import TableP1 from './Admin/tableOfProducts/TableP1/TableP1';
import Details from './Admin/Details/Details';
import AddInP1 from './Admin/tableOfProducts/TableP1/AddInP1';
import TableFruits from './Admin/tableOfProducts/TableP1/TableFruits/TableFruits';
import AddInFruits from './Admin/tableOfProducts/TableP1/TableFruits/AddInFruits';
import DetailsFruits from './Admin/Details/DetailsFruits';
import AddInMeat from './Admin/tableOfProducts/TableP1/TableMeat/AddInMeat';
import TableMeat from './Admin/tableOfProducts/TableP1/TableMeat/TableMeat';
import DetailsMeat from './Admin/Details/DetailsMeat';
import AddInHerbals from './Admin/tableOfProducts/TableP1/TableHerbals/AddInHerbals';
import TableHerbals from './Admin/tableOfProducts/TableP1/TableHerbals/TableHerbals';
import DetailsHerbals from './Admin/Details/DetailsHerbals';
import AddInMilk from './Admin/tableOfProducts/TableP1/TableMilk/AddInMilk';
import TableMilk from './Admin/tableOfProducts/TableP1/TableMilk/TableMilk';
import DetailsMilk from './Admin/Details/DetailsMilk';
import Protectedroute from './Protectedroute/Protectedroute';
import Notfound from './Notfound/Notfound';
import SmallBox from './Components/SmallBox/SmallBox';
import MediumBox from './Components/MediumBox/MediumBox';
import LargeBox from './Components/LargeBox/LargeBox';
import ScrollToTop from 'react-scroll-to-top';
import Meals from './Components/Products/Meals/Meals';
import CheckOutForm from './Components/CheckOut/CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51MhJyrHGhBMnhgb7mHbZynsecGAHsOM7dmijYCDLasWmUKl9IjOFOW9MFMtAjpX8iV3rJvAD3WbDxcZY5DRdpYvF00tmwLZRLe');
function App() {

  const routes = createBrowserRouter([
    {
      path: '/', element: <UserLayout />, children: [
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'cart',element:<Cart/>},
      {path:'about',element:<About/>},
      {path:'products',element:<AllProducts/>},
      {path:'vegetables',element:<Vegetables/>},
      {path:'fruits',element:<Fruits/>},
      {path:'herbals',element:<Herbals/>},
      {path:'meat',element:<Meat/>},
      {path:'milk',element:<Milk/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'contact',element:<Contact/>},
      {path:'disease',element:<Disease/>},
      {path:'heart',element:<Heart/>},
      {path:'diabetes',element:<Diabetes/>},
      {path:'liver',element:<Liver/>},
      {path:'pressure',element:<Pressure/>},
      { path: 'kidney', element: <Kidney /> },
      { path: 'meals', element: <Meals /> },
        
        
        { path: 'smallbox', element: <SmallBox /> },
        { path: 'mediumbox', element: <MediumBox /> },
        { path: 'largebox', element: <LargeBox /> },
        { path: 'checkout', element: <CheckOutForm /> },

      {path:'*',element:<Notfound/>},
      ]
    },
    {
      path: '/', element:<Protectedroute> <AdminLayout /></Protectedroute>, children: [
        {
          path: 'admin', element: <Protectedroute> <Admin /></Protectedroute>, children: [
        {path:'tableP1',element:<Protectedroute > <TableP1/> </Protectedroute > },
        {path:'details/:id',element:<Protectedroute> <Details/> </Protectedroute> },
        {path:'addInP1',element:<Protectedroute> <AddInP1/> </Protectedroute> },
        {path:'addInP1/:id',element:<Protectedroute> <AddInP1/> </Protectedroute> },
        
        {path:'addInFruits',element:<Protectedroute> <AddInFruits/> </Protectedroute> },
        {path:'tableFruits',element:<Protectedroute> <TableFruits /> </Protectedroute> },
        {path:'addInFruits/:id',element:<Protectedroute> <AddInFruits/> </Protectedroute> },
        {path:'detailsFruits/:id',element:<Protectedroute> <DetailsFruits/> </Protectedroute> },
        
        {path:'addInMeat',element:<Protectedroute> <AddInMeat/> </Protectedroute> },
        {path:'tableMeat',element:<Protectedroute> <TableMeat /> </Protectedroute> },
        {path:'addInMeat/:id',element:<Protectedroute> <AddInMeat/> </Protectedroute> },
        {path:'detailsMeat/:id',element:<Protectedroute> <DetailsMeat/> </Protectedroute> },
        
        {path:'addInHerbals',element:<Protectedroute> <AddInHerbals/> </Protectedroute> },
        {path:'tableHerbals',element:<Protectedroute> <TableHerbals /> </Protectedroute> },
        {path:'addInHerbals/:id',element:<Protectedroute> <AddInHerbals/> </Protectedroute> },
        {path:'detailsHerbals/:id',element:<Protectedroute> <DetailsHerbals/> </Protectedroute> },
        
        {path:'addInMilk',element:<Protectedroute> <AddInMilk/> </Protectedroute> },
        {path:'tableMilk',element:<Protectedroute> <TableMilk /> </Protectedroute> },
        {path:'addInMilk/:id',element:<Protectedroute> <AddInMilk/> </Protectedroute> },
        {path:'detailsMilk/:id',element:<Protectedroute> <DetailsMilk/> </Protectedroute> },
      ]}
    ]}
    
  ])




  return (
    <>
     
  <Elements stripe={stripePromise}>

<RouterProvider router={routes}/>
  </Elements>

      <ScrollToTop  smooth style={{backgroundColor:"#78A206",}} color="#fff"/>

    </>
  );
}

export default App;
