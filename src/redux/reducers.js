import { combineReducers } from 'redux';

import ProjectsReducer from '../redux/modules/projects';



export default combineReducers({
    projects: ProjectsReducer,
});