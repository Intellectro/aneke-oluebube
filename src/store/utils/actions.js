const handleCurrentTag = ({commit}, val) => {
    return commit("currentTagHandler", val);
}

export {handleCurrentTag};