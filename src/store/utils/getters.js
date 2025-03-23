const routesHandler = state => state.routesData;
const workflowHandler = state => state.workflow;
const showCurrentTag = state => state.currentTag._name;
const projectsHandler = state => state.projects;
const currentViewStatus = state => state.isPhoneView;
const navCurrentStatus = state => state.showNav;

export {routesHandler, workflowHandler, showCurrentTag, projectsHandler, currentViewStatus, navCurrentStatus};