const routesHandler = state => state.routesData;
const workflowHandler = state => state.workflow;
const showCurrentTag = state => state.currentTag._name;
const projectsHandler = state => state.projects;

export {routesHandler, workflowHandler, showCurrentTag, projectsHandler};