class ActionProvider {
    constructor (createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage("This is Tony, in AI form. As you know, we are currently celebrating our two years of knowing each other and I wanted to build something just for you with the new knowledge i have gained, would you like to continue this artifical conversation? :) ")
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }))
    }
}

export default ActionProvider;