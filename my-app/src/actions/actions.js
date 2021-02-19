import axios from 'axios';


export const FETCH_PIC_LOADING = "FETCH_PIC_LOADING"
export const FETCH_PIC_SUCCESS = "FETCH_PIC_SUCCESS"
export const FETCH_PIC_FAIL = "FETCH_PIC_FAIL"

let num = Math.floor(Math.random() * 101); 

export const getPic = () => dispatch => {
    dispatch(fetchPicLoading());
    axios
    .get(`https://picsum.photos/id/${num}/info`)
    .then(res=>{
        dispatch(fetchPicSuccess(res.data));
    })
    .catch(err=>{
        dispatch(fetchPicFail(err.Response.code));
    });



}


export const fetchPicLoading = () => {
    return({ type:FETCH_PIC_LOADING});
}

export const fetchPicSuccess = (pic) => {
    return({type:FETCH_PIC_SUCCESS, payload:pic});
}

export const fetchPicFail = (error) => {
    return({type:FETCH_PIC_FAIL, payload:error});
}