import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddMembers from './pages/AddMembers';
import ListMembers from './pages/ListMembers';
import UserDetails from "./pages/ListMembers/UserDetails";
import Layout from './pages/Layout';
function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>}/>
                <Route path="/addMembers" element={<AddMembers/>}/>
                <Route path="/listMembers" element={<ListMembers/>}/>
                <Route path="/UserDetails/:id" element={<UserDetails />} />

            </Route>
        </Routes>
    );
  }
  
  export default Routers;