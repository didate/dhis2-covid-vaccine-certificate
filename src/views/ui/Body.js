import { TableBody, TableCell, TableRow } from "@dhis2/ui-core"
import { Link } from "react-router-dom"

const Body = ({ rows }) => {

    const removes = [0, 2, 3, 5, 6]
    return <TableBody>
        {rows.map((row, i) => {
            return <TableRow key={i} onClick={() => console.log(row)}>
                {
                    row.map((r, j) => {
                        if (!removes.includes(j)) {
                            return <TableCell key={j}>{j === 1 ? new Date(r).toLocaleDateString() : r}</TableCell>
                        }
                    })

                }
                <TableCell> <Link to={`/certificate/${row[0]}`}>Open</Link> </TableCell>
            </TableRow>
        })}

    </TableBody>
}

export default Body