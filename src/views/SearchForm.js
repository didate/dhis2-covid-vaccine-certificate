import { ReactFinalForm, InputFieldFF, Button } from '@dhis2/ui'
import { PropTypes } from '@dhis2/prop-types'
import classes from '../App.module.css'
import styles from './SearchForm.module.css'
import { searchTeis } from '../redux/actions/'
import { connect } from 'react-redux'
import { useDataEngine } from '@dhis2/app-service-data'
const { Field } = ReactFinalForm



const SearchForm = ({ searchTeis }) => {
    const engine = useDataEngine()

    const alertValues = (values) => {
        searchTeis(engine, values)
    }
    return <fieldset className={classes.fieldsetfilter}>
        <legend className={classes.legendfilter}>
            <span>Recherche</span>
        </legend>

        <ReactFinalForm.Form onSubmit={alertValues}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                    <div className={styles.row}>
                        <Field
                            name="localid"
                            label="Local ID"
                            component={InputFieldFF}
                            className={styles.field}
                        />

                        <Field
                            name="nom"
                            label="Nom"
                            component={InputFieldFF}
                            className={styles.field}
                        />

                        <Field
                            name="prenom"
                            label="Prenom"
                            component={InputFieldFF}
                            className={styles.field}
                        />
                        <Field
                            name="telephone"
                            label="Téléphone"
                            component={InputFieldFF}
                            className={styles.field}
                        />
                    </div>


                    <div className={styles.row}>
                        <Button type="submit" primary>
                            Rechercher
                        </Button>
                    </div>
                </form>
            )}
        </ReactFinalForm.Form>
    </fieldset>
}

SearchForm.propTypes = {
    searchTeis: PropTypes.func.isRequired
}

export default connect(null, { searchTeis })(SearchForm)