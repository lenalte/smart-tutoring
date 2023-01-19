import { postRequestPromise, setToken } from "./apiCalls"


function addUser(prename, lastname, email, password) {
    const body = {
        prename, lastname, email, password
    }
    return postRequestPromise("/users", body)
}

function loginUser(email, password) {
    const body = {
        email, password
    }
    return postRequestPromise("/users/login", body).then(res => setToken(res.token))
}

function addDataStudent(age, school, location, hours, languages, languageSkills, aboutyou, subjects) {
    const body = {
        age, school, location, hours, languages, languageSkills, aboutyou, subjects
    }
    return postRequestPromise("/queryS", body)
}

function addDataTutor(age, school, location, hours, languages, languageSkills, aboutyou, subjects) {
    const body = {
        age, school, location, hours, languages, languageSkills, aboutyou, subjects
    }
    return postRequestPromise("/queryT", body)
}

const userApi = {
    addUser,
    loginUser,
    addDataStudent,
    addDataTutor
}

export default userApi;