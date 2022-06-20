import {
    POST_AUTH_FAILURE,
    POST_AUTH_STARTED,
    POST_AUTH_SUCCES,
} from './actionTypes';

const postAuthStarted = () => ({
    type: POST_AUTH_STARTED,
});

const postAuthSuccess = () => ({
    type: POST_AUTH_SUCCES,
});

const postAuthFailure = (err) => ({
    type: POST_AUTH_FAILURE,
    payload: err,
});
