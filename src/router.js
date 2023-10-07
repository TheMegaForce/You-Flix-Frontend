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
import UserProfile from './pages/UserProfile';
import EditUser from './pages/EditUser';
import VideoPost from './pages/VideoPost';
import VideoView from './pages/VideoView';
import VideoEdit from './pages/VideoEdit';
import Intro from './pages/Intro';
import Header from './components/Header';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='home' element={<Home />} loader={videosLoader} />
            <Route path='login' element={<Login />} loader={usersLoader} />
            <Route path='signup' element={<Signup />} loader={usersLoader} />
            <Route path='create' action={createAction} />
            <Route path='update/:id' action={updateAction} />
            <Route path='delete/:id' action={deleteAction}/>
        </Route>
    )
)

export default router;

