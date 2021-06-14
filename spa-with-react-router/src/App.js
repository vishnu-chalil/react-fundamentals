import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
//import AllQuotes from "./pages/AllQuotes";
//import NewQuote from "./pages/NewQuote";
//import Notfound from "./pages/NotFound";


const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const  QuoteDetail = React.lazy(() => import( "./pages/QuoteDetail")); 
const  Notfound = React.lazy(() => import( "./pages/NotFound")); 
const  AllQuotes = React.lazy(() => import( "./pages/AllQuotes")); 


function App() {


  return (

    <Layout>
      <Suspense fallback={
        <div className='centered'>
            <LoadingSpinner/>
        </div>
      }>

        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>

      </Suspense>

    </Layout>

  );
}

export default App;