const handleCurrentTag = ({commit}, val) => {
    return commit("currentTagHandler", val);
}

const setPhoneView = ({commit}, val) => {
    return commit("isPhoneViewHandler", val);
}

const handleShowNav = ({commit}, val) => {
    return commit("showNavHandler", val);
}

export {handleCurrentTag, setPhoneView, handleShowNav};