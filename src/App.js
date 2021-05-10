import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import "./assets/css/owl.css";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Footer from "./Footer";
import Banner from "./Banner";
import Article from "./Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://10.91.90.82:8081/cd/api/",
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Header></Header>
      <Banner></Banner>
      <Switch>
        <Route path="/article/:id">
          <Article></Article>
        </Route>
        <Route path="/">
          <ArticleList></ArticleList>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  </ApolloProvider>
);
export default App;
