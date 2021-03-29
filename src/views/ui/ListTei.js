
import { Table } from '@dhis2/ui-core'

import Body from './Body'
import Header from './Header'


const ListTei = ({ teis }) => {

    return <Table>
        <Header headers={teis.headers} />
        <Body rows={teis.rows} />
    </Table>
}

export default ListTei

