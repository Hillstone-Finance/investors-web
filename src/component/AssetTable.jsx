/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

import "../stylesheets/common.css"

const funds = [
    {
      id: 1,
      name: 'Techstars Korea Fund',
      denomination: 'USDT',
      denoimg: 'https://www.mtpelerin.com/images/usdc-coin.svg',
      ticker: 'TECHUSDT',
      department: 'Optimization',
      apy: '12.55%',
      funded: 480000,
      capacity: 1000000,
      email: 'jane.cooper@example.com',
      depositors: 42,
      image:'https://image.rocketpunch.com/company/20906/techstars_logo_1533864031.png?s=400x400&t=inside',
    },
    // More people...
  ]
  
  export default function AssetTable() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Vault Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Denomination
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        APY (incl. Fees)
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Vault Capacity
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Depositors
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {funds.map((fund) => (
                                    <tr key={fund.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={fund.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{fund.name}</div>
                                                    <div className="text-sm text-gray-500">{fund.ticker}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-8 w-8">
                                                    <img className="h-8 w-8 rounded-full" src={fund.denoimg} alt="" />
                                                </div>
                                                <div className="ml-2">
                                                    <div className="text-sm text-gray-500">{fund.denomination}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fund.apy}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-pink-200">
                                                <div style={{ width: (fund.funded/fund.capacity*100).toFixed()+"%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                                            </div>
                                            <div className="text-sm text-gray-500">{(fund.funded).toLocaleString("en-US")+" "+fund.denomination} Funded</div>
                                            <div className="text-sm text-gray-500">{(fund.capacity - fund.funded).toLocaleString("en-US")+" "+fund.denomination} Left</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fund.depositors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
  