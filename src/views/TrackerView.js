import { useDataEngine } from '@dhis2/app-runtime'
import { PropTypes } from '@dhis2/prop-types'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTeis } from '../redux/actions/'
import ListTei from './ui/ListTei'
import { CircularLoader } from '@dhis2/ui-core'
import classes from '../App.module.css'
import SearchForm from './SearchForm'




const TrackerView = ({ fetchTeis, teis, loading }) => {


    const engine = useDataEngine()
    useEffect(() => {

        fetchTeis(engine);
    }, [])

    return <div className="container-fluid">
        <br />
        <div className="row">
            <div className="col-sm-12">
                <h2>Certificat de vaccination</h2>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-sm-12">
                <SearchForm />
            </div>
        </div>

        {loading ?
            <div className={classes.centerItem}><CircularLoader /></div> :
            <div className="row">
                <div className="col-sm-12">
                    <ListTei teis={teis} />
                </div>
            </div>
        }
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