import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { Provider } from 'react-redux'
import store from './redux/store'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <Provider store={store}>
        <div className={classes.container}>
            <DataQuery query={query}>
                {({ error, loading, data }) => {
                    if (error) return <span>ERROR</span>
                    if (loading) return <span>...</span>
                    return (
                        <>
                            <h1>
                                {i18n.t('Hello {{name}}', { name: data.me.name })}
                            </h1>
                            <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                        </>
                    )
                }}
            </DataQuery>
        </div>
    </Provider>
)

export default MyApp
