const routesHandler = state => state.routesData;
const workflowHandler = state => state.workflow;
const showCurrentTag = state => state.currentTag._name;

export {routesHandler, workflowHandler, showCurrentTag};