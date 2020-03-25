import React from 'react';

const TableForm = () => {
    return(
        <table className="table table-borderless table-responsive">
            <tbody>
                <tr>
                    <th style={th_styles}>Loan Details</th>
                    <td colSpan="3">
                        <span>$ 37,0000.00</span> over <span>12 MONTHS </span>
                        at <span>1% PER MONTH</span> for <span>BUSINESS ACQUISITION</span>
                    </td>
                </tr>
                <tr>
                    <th style={th_styles}>Financial Close Date</th>
                    <td colSpan="3">
                        30th January 2020
                    </td>
                </tr>
                <tr>
                    <th style={th_styles}>Fees & Charges</th>
                    <td style={{ width: "25%" }}>
                        <span>COMMITMENT FEE</span><br />
                        $7,000.00
                    </td>
                    <td>
                        <span>ESTABLISHMENT FEE</span><br />
                        2.2% of Facility Limit
                    </td>
                    <td>
                        <span>BROKERAGE FEE</span><br />
                        3% of Facility Limit
                    </td>
                </tr>
                <tr>
                    <th style={th_styles}>Parties</th>
                    <td>
                        <b>BORROWER/S</b>
                        <p>
                            John Applessed <br />
                            12 Thatch Crescent, <br />
                            Avalon NSW 2300 <br />
                            john@xxx.com <br />
                            0456 789 435
                        </p>
                    </td>
                    <td colSpan="2">
                        <b>GUARANTOR</b>
                        <p>
                            Harry Hartog <br />
                            12 Thatch Crescent, <br />
                            Avalon NSW 2300 <br />
                            john@xxx.com <br />
                            0456 789 435
                        </p>
                    </td>
                </tr>
                <tr>
                    <th style={th_styles}>Minimum Term</th>
                    <td colSpan="3">
                        3 calendar months
                    </td>
                </tr>
                <tr>
                    <th style={th_styles}>Security</th>
                    <td>
                        <p>
                            Company GSA and <br />
                            additional collateral
                        </p>
                    </td>
                    <td colSpan="2">
                        <b>Additional Collateral</b>
                        <ol>
                            <li>
                                General Security Deed granted by each
                                corporate Borrower and each corporate Guarantor
                                in favour of the Lender.
                            </li>
                            <li>
                                Unlimited Guarantee and Indemnity granted by 
                                Borrower in favour of the Lender.
                            </li>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <th style={th_styles}>Governing Law</th>
                    <td colSpan="3">
                        New South Wales
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

const th_styles = {
    width: "30%",
    backgroundColor: "#212121",
    color: "#EEEEEE",
}

export default TableForm;