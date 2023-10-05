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

export const updateUser = (id, userData) => {
    return fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

