import "./App.css";
import "antd/dist/reset.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import FishesList from "./components/lists/FishesList";
import FishForm from "./components/forms/FishForm";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <FishForm/>
      <FishesList/>
    </div>
  </ApolloProvider>
)

export default App;