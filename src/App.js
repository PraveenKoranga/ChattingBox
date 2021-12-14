import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import './App.css'
import LoginForm from "./components/LoginForm";

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return( 
  
    <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='ab8d140c-2da4-4334-9022-e176440b11ac'
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
		/>
  )
};

export default App;
