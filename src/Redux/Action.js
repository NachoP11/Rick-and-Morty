import { ADD_CHARACTER, DELETE_CHARACTER } from "./Types"


function addCharacter (character) {
    return {
        type: ADD_CHARACTER,
        payload: character,
    }
}

function deleteCharacter (id) {
    return {
        type: DELETE_CHARACTER,
        payload: id,
    }
}

export {addCharacter, deleteCharacter};
