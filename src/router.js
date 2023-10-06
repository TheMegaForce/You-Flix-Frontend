// //router.js
// import {
//     createBrowserRouter,
//     createRoutesFromElements,
//     Route,
// } from 'react-router-dom';
// import App from './App'
// import { videosLoader, videoShowLoader, usersLoader, usersShowLoader } from "./loader"
// import { createAction, deleteAction, updateAction, updateUser } from "./action"
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import UserProfile from './pages/UserProfile';
// import EditUser from './pages/EditUser';

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<App />}>
//             <Route path='home' element={<Home />} loader={videosLoader} />
//             <Route path='login' element={<Login />} loader={usersLoader} />
//             <Route path='signup' element={<Signup />} loader={usersLoader} />
//             <Route path='create' action={createAction} />
//             <Route path='update/:id' action={updateAction} />
//             <Route path='delete/:id' action={deleteAction}/>
//             <Route path='users/:id' element={<UserProfile />} loader={usersShowLoader} />
//             <Route path='edit/:id' element={<EditUser />} loader={usersLoader} action={updateUser} />
//         </Route>
//     )
// )

// export default router;


//router.js
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import App from './App'
import { videosLoader, videoShowLoader, usersLoader, usersShowLoader } from "./loader"
import { createAction, deleteAction, updateAction, updateUser } from "./action"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import EditUser from './pages/EditUser';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='home' element={<Home />} loader={videosLoader} />
            <Route path='login' element={<Login />} loader={usersLoader} />
            <Route path='signup' element={<Signup />} loader={usersLoader} />
            <Route path='create' action={createAction} />
            <Route path='update/:id' action={updateAction} />
            <Route path='delete/:id' action={deleteAction}/>
            <Route path='users/:id' element={<UserProfile />} loader={usersShowLoader} />
            <Route path='edit/:id' element={<EditUser />} loader={usersLoader} action={updateUser} />
        </Route>
    )
)

export default router;