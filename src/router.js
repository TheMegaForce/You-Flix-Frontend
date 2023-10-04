import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import App from './App'
import { videosLoader, videoShowLoader, usersLoader, usersShowLoader } from "./loader"
import { createAction, deleteAction, updateAction } from "./action"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='login' element={<Login />} loader={usersLoader} />
            <Route path='signup' element={<Signup />} loader={usersLoader} />
            <Route path='home' element={<Home />} loader={videosLoader} />
            <Route path='create' action={createAction} />
            <Route path='update/:id' action={updateAction} />
            <Route path='delete/:id' action={deleteAction}/>
        </Route>
    )
)

export default router;

