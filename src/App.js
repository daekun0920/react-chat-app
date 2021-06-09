import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="5aa9e650-f2b5-4c0f-963d-2292256a5956"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;