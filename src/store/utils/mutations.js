const currentTagHandler = (state, val) => {
    return Object.assign(state.currentTag, {_name: val})
};

export {currentTagHandler};