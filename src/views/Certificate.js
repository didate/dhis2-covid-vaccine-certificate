import { useEffect, useState, useRef } from 'react'
import { useDataEngine } from "@dhis2/app-service-data"
import { useParams } from "react-router"
import { COVID_VACCINE_PROGRAM } from "../constant"
import { teiQuery } from '../redux/actions/query'
import { CircularLoader } from '@dhis2/ui-core'
import classes from '../App.module.css'
import ReactToPrint from 'react-to-print'
import CertificateItem from './CertificateItem'
import { Link } from "react-router-dom"
import { Button } from '@dhis2/ui'
export const Certificate = () => {

    const { trackedEntityInstance } = useParams()
    const engine = useDataEngine()
    const componentRef = useRef();


    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(true)

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
            <br />
            <div className="row">
                <div className="col-sm-6">
                    <Link to="/" className="btn btn-secondary">Precedent</Link> &nbsp;

               </div>
                <div className="col-sm-6">
                    <ReactToPrint
                        trigger={() => <Button primary className="float-right">Imprimer le certificat</Button>}
                        content={() => componentRef.current}
                    />
                </div>
            </div>
            <br />
            <CertificateItem ref={componentRef} person={person} />
        </div>
}

