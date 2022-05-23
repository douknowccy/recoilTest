import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RecoilRoot} from 'recoil'
import {App} from './App'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Suspense fallback={<div>loading...</div>}>
                <App />
            </Suspense>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
