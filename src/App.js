import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="9250e4ee-da14-4969-837c-e478820f8b82"
            userName="Admin"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App