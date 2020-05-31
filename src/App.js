import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'connected-react-router';

import createAppStore from './store/createStore';

import Sample0 from './pages/sample0/Sample0';

import Sample1 from './pages/sample1/initial/Sample1';
import Sample1_O from './pages/sample1/optimized/Sample1';
import Sample1_H from './pages/sample1/initialHooks/Sample1';
import Sample1_H_O from './pages/sample1/optimizedHooks/Sample1';

import Sample2 from './pages/sample2/initial/Sample2';
import Sample2_H from './pages/sample2/initialHooks/Sample2'
import Sample2_O from './pages/sample2/optimized/Sample2';
import Sample2_O2 from './pages/sample2/optimized2/Sample2';
import Sample2_H_O from './pages/sample2/optimizedHooks/Sample2';
import Sample2_H_O2 from './pages/sample2/optimizedHooks2/Sample2';


import Sample3 from './pages/sample3/initial/Sample3';
import Sample3_O from './pages/sample3/optimized/Sample3';
import Sample3_O2 from './pages/sample3/optimized2/Sample3';
import Sample3_H from './pages/sample3/initialHooks/Sample3';
import Sample3_H_O from './pages/sample3/optimizedHooks/Sample3';
import Sample3_H_O2 from './pages/sample3/optimizedHooks2/Sample3';

import Sample4 from './pages/sample4/initial/Sample4';
import Sample4_O from './pages/sample4/optimized/Sample4';
import Sample4_H from './pages/sample4/initialHooks/Sample4';
import Sample4_H_O from './pages/sample4/optimizedHooks/Sample4';

import Sample5 from './pages/sample5/virtualized/Sample5';
import Sample5_H from './pages/sample5/virtualizedHooks/Sample5';

import logo from './logo.svg';
import './App.scss';

const history = createHistory();
const store = createAppStore(history);

class App extends Component {
    A = () => {
        for (let i = 0; i < 1000000; i++) Math.atan(i);
        this.B();
        this.C();
    };

    B = () => {
        for (let i = 0; i < 1000000; i++) Math.atan(i);
    };

    C = () => {
        for (let i = 0; i < 2000000; i++) Math.atan(i);
    };

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="app">

                        <div className="menu">
                            <img src={logo}
                                className="app-logo"
                                alt="logo"
                                onClick={this.A} />

                            <div className="sub-menu">
                                Class based components
                                <Link to="/sample0">Sample 0</Link>
                                <Link to="/sample1">Sample 1</Link>
                                <Link to="/sample1_o">Sample 1 (Optimized)</Link>

                                <Link to="/sample2">Sample 2</Link>
                                <Link to="/sample2_o">Sample 2 (Optimized)</Link>
                                <Link to="/sample2_o2">Sample 2 (Optimized 2)</Link>

                                <Link to="/sample3?react_perf">Sample 3</Link>
                                <Link to="/sample3_o?react_perf">Sample 3 (Optimized)</Link>
                                <Link to="/sample3_o2">Sample 3 (Optimized 2)</Link>

                                <Link to="/sample4?react_perf">Sample 4</Link>
                                <Link to="/sample4_o?react_perf">Sample 4 (Optimized)</Link>

                                <Link to="/sample5?react_perf">Sample 5</Link>
                            </div>
                            
                            <div className="sub-menu">
                                Hooks based components
                                <Link to="/sample1_h">Sample 1</Link>
                                <Link to="/sample1_h_o">Sample 1 (Optimized)</Link>

                                <Link to="/sample2_h">Sample 2</Link>
                                <Link to="/sample2_h_o">Sample 2 (Optimized)</Link>
                                <Link to="/sample2_h_o2">Sample 2 (Optimized 2)</Link>

                                <Link to="/sample3_h?react_perf">Sample 3</Link>
                                <Link to="/sample3_h_o?react_perf">Sample 3 (Optimized)</Link>
                                <Link to="/sample3_h_o2">Sample 3 (Optimized 2)</Link>

                                <Link to="/sample4_h">Sample 4</Link>
                                <Link to="/sample4_h_o">Sample 4 (Optimized)</Link>

                                <Link to="/sample5_h">Sample 5 (virtualized)</Link>
                            </div>
                        </div>

                        <div className="main">
                            <Switch>
                                <Route path="/sample0" component={Sample0} />
                                <Route path="/sample1" component={Sample1} />
                                <Route path="/sample1_h" component={Sample1_H} />
                                <Route path="/sample1_o" component={Sample1_O} />
                                <Route path="/sample1_h_o" component={Sample1_H_O} />

                                <Route path="/sample2" component={Sample2} />
                                <Route path="/sample2_h" component={Sample2_H} />
                                <Route path="/sample2_o" component={Sample2_O} />
                                <Route path="/sample2_o2" component={Sample2_O2} />
                                <Route path="/sample2_h_o" component={Sample2_H_O} />
                                <Route path="/sample2_h_o2" component={Sample2_H_O2} />

                                <Route path="/sample3" component={Sample3} />
                                <Route path="/sample3_o" component={Sample3_O} />
                                <Route path="/sample3_o2" component={Sample3_O2} />
                                <Route path="/sample3_h" component={Sample3_H} />
                                <Route path="/sample3_h_o" component={Sample3_H_O} />
                                <Route path="/sample3_h_o2" component={Sample3_H_O2} />

                                <Route path="/sample4" component={Sample4} />
                                <Route path="/sample4_o" component={Sample4_O} />
                                <Route path="/sample4_h" component={Sample4_H} />
                                <Route path="/sample4_h_o" component={Sample4_H_O} />

                                <Route path="/sample5" component={Sample5} />
                                <Route path="/sample5_h" component={Sample5_H} />
                            </Switch>
                        </div>

                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
