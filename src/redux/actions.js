import { getUsers } from "../api"
import { SET_ERROR, SET_LOADING, SET_USERS } from "./types"

const setUsers = async (dispatch) => {
    setLoading(dispatch);
    const res = await getUsers();

    if (res.success) {
        const action = { type: SET_USERS, payload: res.data }
        dispatch(action);
    }
    else {
        setError(dispatch);
    }
}

const setLoading = (dispatch) => {
    dispatch({ type: SET_LOADING })
}

const setError = (dispatch) => {
    dispatch({ type: SET_ERROR })
}

export { setUsers, setLoading, setError }