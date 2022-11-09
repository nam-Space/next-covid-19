import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
	const [info, setInfo] = useState([])
	useEffect(() => {
		const getInfo = async() => {
			try {
				const res = await axios.get('https://api.covid19api.com/total/country/vietnam')
				setInfo(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		getInfo()
	}, [])

	console.log(info)

	return (
		<>
			<h1>Vietnam COVID-19 Infomation</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Date</th>
						<th>Confirmed</th>
						<th>Active</th>
						<th>Recovered</th>
						<th>Deaths</th>
					</tr>
				</thead>
				<tbody>
					{info.map((data, index) => (
						<tr key={index}>
							<th>{data.Date}</th>
							<th>{data.Confirmed}</th>
							<th>{data.Active}</th>
							<th>{data.Recovered}</th>
							<th>{data.Deaths}</th>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
