import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';
import configStore from "./Storages/index"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const store = configStore()
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>loading..</div>}>
            <Routers />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
)