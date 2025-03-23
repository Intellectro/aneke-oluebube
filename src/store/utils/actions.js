const handleCurrentTag = ({commit}, val) => {
    return commit("currentTagHandler", val);
}

const setPhoneView = ({commit}, val) => {
    return commit("isPhoneViewHandler", val);
}

const handleShowNav = ({commit}, val) => {
    return commit("showNavHandler", val);
}

const handleSectionsOffset = ({commit}, val) => {
    commit("sectionsOffsetHandler", val);
}

export {handleCurrentTag, setPhoneView, handleShowNav, handleSectionsOffset};