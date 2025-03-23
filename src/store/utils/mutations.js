const currentTagHandler = (state, val) => {
    return Object.assign(state.currentTag, {_name: val})
};

const isPhoneViewHandler = (state, val) => {
    return Object.assign(state, {isPhoneView: val})
}

const showNavHandler = (state, val) => {
    return Object.assign(state, {showNav: val});
}

const sectionsOffsetHandler = (state, val) => {
    return state.sectionsOffsets = [...val];
}

export {currentTagHandler, isPhoneViewHandler, showNavHandler, sectionsOffsetHandler};