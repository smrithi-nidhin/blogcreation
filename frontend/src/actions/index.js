const ADD = "ADD";
export const add = (message) => ({
    type : ADD,
    message,
    id: Math.random(),
});