import { Messages } from 'const'

const mainContainerVisibility = (state = true, action) => {
  console.log("running reducer")
    if (action.type === Messages.MAIN_CHANGE_CONTAINER_VISIBILITY) {
        return !state
    } else {
        return state
    }
}

export default mainContainerVisibility
