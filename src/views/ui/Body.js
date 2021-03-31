import { TableBody, TableCell, TableRow } from "@dhis2/ui-core"
import { Link } from "react-router-dom"
import classes from "../../App.module.css"

const Body = ({ rows }) => {

    const removes = [0, 2, 3, 5, 6]
    return <TableBody>
        {rows.map((row, i) => {
            return <TableRow key={i} >
                {
                    row.map((r, j) => {
                        if (!removes.includes(j)) {
                            return <TableCell key={j}>
                                <Link to={`/certificate/${row[0]}`} className={classes.clickableLink}>
                                    {j === 1 ? new Date(r).toLocaleDateString() : r}
                                </Link>
                            </TableCell>
                        }
                    })

                }
            </TableRow>
        })}

    </TableBody>
}

export default Body