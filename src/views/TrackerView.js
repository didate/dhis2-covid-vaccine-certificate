import { useDataEngine } from '@dhis2/app-runtime'
import { PropTypes } from '@dhis2/prop-types'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTeis } from '../redux/actions/'
import ListTei from './ui/ListTei'
import { CircularLoader } from '@dhis2/ui-core'
import classes from '../App.module.css'
import { COVID_VACCINE_PROGRAM } from '../constant'


const TrackerView = ({ fetchTeis, teis, loading }) => {


    const engine = useDataEngine()
    useEffect(() => {

        fetchTeis(engine, COVID_VACCINE_PROGRAM);
    }, [])

    return loading ? <div className={classes.centerItem}><CircularLoader /></div> : <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <ListTei teis={teis} />
            </div>
        </div>
    </div>
}


TrackerView.propTypes = {
    fetchTeis: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    loading: state.teis.loading,
    teis: state.teis.data
})

export default connect(mapStateToProps, { fetchTeis })(TrackerView)