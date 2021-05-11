import './SportsList.scss';

export const SportsList = (props: any) => {
    return (
        <table className="card">
            <tbody>
                <tr className="overview-table">
                    <th className="table-item">Sports</th>
                    <th className="table-item">Gold</th>
                    <th className="table-item">Silver</th>
                    <th className="table-item">Bronze</th>
                    <th className="table-item">Total</th>
                </tr>
                {
                    props.sportlist.map((sport: any) => {
                        return (
                            <tr className="overview-table" data-testid="sportslist">
                                <td className="table-item" data-testid="sport-name">{sport.Sport.c_Name}</td>
                                <td className="table-item" data-testid="sport-gold">{sport.Medals.n_Gold}</td>
                                <td className="table-item" data-testid="sport-silver">{sport.Medals.n_Silver}</td>
                                <td className="table-item" data-testid="sport-bronze">{sport.Medals.n_Bronze}</td>
                                <td className="table-item" data-testid="sport-total">{sport.Medals.n_Total}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

