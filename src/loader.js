//loader.js
const url = "https://you-flix-backend.onrender.com"

export const videosLoader = async () => {
    const res = await fetch(url + "/videos")
    const videos = await res.json()
    console.log(videos);
    return videos
};

export const videoShowLoader = async ({params}) => {
    const res = await fetch(url + "/videos/" + params.id)
    const videos = await res.json()
    return videos
}

export const usersLoader = async () => {
    const res = await fetch(url + "/users")
    const users = await res.json()
    console.log(users);
    return users
};

export const usersShowLoader = async ({params}) => {
    const res = await fetch(url + "/users/" + params.id)
    const users = await res.json()
    console.log('User Data: ', users);
    return users
}