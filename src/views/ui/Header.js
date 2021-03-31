import { TableCellHead, TableHead } from "@dhis2/ui-core";
import { TableRowHead } from "@dhis2/ui-core/build/cjs/Table/TableRowHead";


const Header = ({ headers }) => {

    const removes = [0, 2, 3, 5, 6]

    return <TableHead>
        <TableRowHead>
            {headers.map((head, index) => {
                if (!removes.includes(index)) {
                    return <TableCellHead key={head.name}>{head.column}</TableCellHead>
                }
            })}
            <TableCellHead></TableCellHead>
        </TableRowHead>
    </TableHead>

}

export default Header;