/**
 * Created by dragibbs on 8/5/17.
 */
export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDER';

export const addRecipe = ({ day, recipe, meal }) => {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal,
    }
}

export const removeFromCalender = ({ day, meal }) => {
    return {
        type: REMOVE_FROM_CALENDER,
        day,
        meal,
    }
}
