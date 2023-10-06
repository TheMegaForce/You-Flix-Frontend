import { redirect } from "react-router-dom"
const url = "https://you-flix-backend.onrender.com/"

export const createAction = async ({ request }) => {
    const formData = await request.formData()

    const video = {
        userId: formData.get('userId'),
        title: formData.get('title'),
        description: formData.get('description'),
        url: formData.get('url'),
    }

    await fetch(url + '/videos', {
        method: 'post',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify(video)
    })

    return redirect('/')
};

export const updateAction = async ({ params, request }) => {
    const formData = await request.formData()

    const video = {
        userId: formData.get('userId'),
        title: formData.get('title'),
        description: formData.get('description'),
        url: formData.get('url'),
    }

    await fetch(url + '/videos/' + params.id, {
        method: 'put',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify(video)
    })

    return redirect(`/`)
};

export const deleteAction = async ({params}) => {

    await fetch(url + '/videos/' + params.id, {
        method: 'delete',
        headers: {
            "content-Type": 'application/json'
        },
    })

    return redirect("/")
};

export const createUserAction = async ({ request }) => {
    const formData = await request.formData()

    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    await fetch(url + '/users', {
        method: 'post',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })

    return redirect('/login')
};

export const updateUser = async ({ params, request }) => {
    const formData = await request.formData()

    const user = {
        username: formData.get('username'),
        password: formData.get('password'),

    }

    await fetch(url + '/users/' + params.id, {
        method: 'put',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })

    return redirect(`/`)
}

export const deleteUserAction = async ({ params }) => {
    try {
        const response = await fetch(url + '/users/' + params.id, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        });

        // Check if deletion was successful
        if (response.status === 200) {
            alert('User deleted successfully');
        } else {
            alert('Failed to delete the user');
        }

        // Assuming you have a method to handle redirects since redirect() is not standard in react-router-dom
        return redirect('/users'); // Adjust the redirection path according to your application's routes
    } catch (error) {
        console.error("Error during deletion: ", error);
        // handle error accordingly
    }
};







