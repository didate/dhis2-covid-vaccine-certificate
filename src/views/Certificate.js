import { useEffect, useState, useRef } from 'react'
import { useDataEngine } from "@dhis2/app-service-data"
import { useParams } from "react-router"
import { COVID_VACCINE_PROGRAM } from "../constant"
import { teiQuery } from '../redux/actions/query'
import { CircularLoader } from '@dhis2/ui-core'
import classes from '../App.module.css'
import ReactToPrint from 'react-to-print'
import CertificateItem from './CertificateItem'

export const Certificate = () => {

    const { trackedEntityInstance } = useParams()
    const engine = useDataEngine()
    const componentRef = useRef();


    const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchTei = async () => {
            setLoading(true)
            const { result } = await engine.query(teiQuery(trackedEntityInstance, COVID_VACCINE_PROGRAM))
            setPerson(result)
            setLoading(false)
        }

        fetchTei();

    }, [])

    return loading ? <div className={classes.centerItem}><CircularLoader /></div> :
        <div className='container'>
            <ReactToPrint
                trigger={() => <button className="btn btn-info">Print this out!</button>}
                content={() => componentRef.current}
            />
            <CertificateItem ref={componentRef} person={person} />
        </div>
}

