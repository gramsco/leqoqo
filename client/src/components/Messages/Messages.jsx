import React from 'react';

// import './App.css';
import Chat from './Chat';
// import UserList from './UserList';
// import Login from './Login';
// import chatkitLogo from './chatkit-logo.svg';
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';

function Messages({userId="alice",otherUserId="bob"}) {
  
  console.log(userId)
  console.log(otherUserId)

  const tokenProvider = new TokenProvider({
    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e7c6d2f5-e934-4568-a41b-9ac986cd53b9/token'
  });


  const instanceLocator = 'v1:us1:e7c6d2f5-e934-4568-a41b-9ac986cd53b9';

  return (

    <div className="Messages">
      {userId && otherUserId ? (
        <ChatkitProvider
          instanceLocator={instanceLocator}
          tokenProvider={tokenProvider}
          userId={userId}
        >
          <Chat otherUserId={otherUserId} />

        </ChatkitProvider>
      ) : (
          <div>yolo</div>
        )}

      </div>
  
  )

}

export default Messages