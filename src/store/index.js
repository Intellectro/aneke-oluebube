import { createStore } from "vuex";
import state from "./utils/state.js";
import * as actions from "./utils/actions.js";
import * as mutations from "./utils/mutations.js";
import * as getters from "./utils/getters.js";

const store = createStore({
    state,
    actions,
    mutations,
    getters
});

export default store;