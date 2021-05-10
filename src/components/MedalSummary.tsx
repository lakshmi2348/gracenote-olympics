import logo from '../images/Nld_flag.png'
import './Medalsummary.scss'

export const MedalSummary = (props: any) => {
    return (
        <table className="card">
            <tbody>
                <tr className="overview-table">
                    <th className="table-item">NOC</th>
                    <th className="table-item">Country</th>
                    <th className="table-item">Gold</th>
                    <th className="table-item">Silver</th>
                    <th className="table-item">Bronze</th>
                    <th className="table-item">Total</th>
                </tr>
                <tr className="overview-table">
                    <td className="table-item"><img className="flaglogo" src={logo} alt="logo"></img></td>
                    <td className="table-item" data-testid="noc-name">{props.summary.NOC.c_Name}</td>
                    <td className="table-item" data-testid="noc-gold">{props.summary.Medals.n_Gold}</td>
                    <td className="table-item" data-testid="noc-silver">{props.summary.Medals.n_Silver}</td>
                    <td className="table-item" data-testid="noc-bronze">{props.summary.Medals.n_Bronze}</td>
                    <td className="table-item" data-testid="noc-total">{props.summary.Medals.n_Total}</td>
                </tr>
            </tbody>
        </table>
    );
}