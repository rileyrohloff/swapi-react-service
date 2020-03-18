import React, { useState } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Ships from './components/Ships/Ships';
import SideBar from './components/SideBar/SideBar';
import Cards from './components/Cards/Card';
import { AppContainer, SideBarWrapper } from './styled';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.com/.netlify/functions/index',
});


function App() {
  const [sideBarOpen, setSidebarOpen] = useState(true);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AppContainer>
            <SideBar className="side-bar-content" open={sideBarOpen} setOpen={setSidebarOpen} />
          <Cards sidebar={sideBarOpen}/>
        </AppContainer>
      </div>
    </ApolloProvider>
  );
}

export default App;
