import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/errorBoundary";

import decoration from '../../resources/img/vision.png';


const App = () => {

    const [selectedChar, stateChar] = useState(null);

    const onCharSelected = (id) => {
        stateChar(id);
    }

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <ErrorBoundary>
                                <RandomChar/>
                            </ErrorBoundary>
                            <div className="char__content">
                                <ErrorBoundary>
                                    <CharList onCharSelected={onCharSelected}/>
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <CharInfo charId={selectedChar}/>
                                </ErrorBoundary>   
                            </div>
                                <img className="bg-decoration" src={decoration} alt="vision"/>
                        </Route>
                        <Route exact path="/comics">
                            <AppBanner/>
                            <ComicsList/>
                        </Route>
                    </Switch>
                    </main>
            </div>
        </Router>
        )
}

export default App;