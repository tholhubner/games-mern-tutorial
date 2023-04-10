import React, { useMemo } from "react"
import { useTable } from "react-table"
import { Button } from "./Button"

const GamesTable = ({ items }) => {
	const columns = useMemo(() => [
		{
			Header: "Title",
			accessor: "title",
			filterable: "true",
		},
		{
			Header: "Rating",
			accessor: "rating",
			filterable: "true",
		},
		{
			Header: "Publisher",
			accessor: "publisher",
			filterable: "true",
		},
		{
			Header: "Developer",
			accessor: "developer",
			filterable: "true",
		},
		{
			Header: "ESRB",
			accessor: "esrb",
			filterable: "true",
		},
		{
			Header: "Platform(s)",
			accessor: "platform",
			Cell: props => <span>{props.value.join(", ")}</span>,
		},
		{
			Header: "Actions",
			accessor: "actions",
			Cell: props => (
				<div className="flex flex-col justify-center items-start">
					<Button type="update" id={props.row.original._id} />
					<Button type="delete" id={props.row.original._id} />
				</div>
			)
		},
	], [])
	const data = useMemo(() => items, [items])
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data })

	return (
		<div className="w-full overflow-x-auto bg-base-300 rounded-md">
			<table {...getTableProps()} className="table-compact w-full bg-base-200 rounded-md">
				<thead className="bg-base-300">
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()} className="text-start">
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => (
									<td {...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export { GamesTable }
