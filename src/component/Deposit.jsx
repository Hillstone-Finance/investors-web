/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

import "../stylesheets/common.css"
import AssetTable from "./AssetTable"
import MyDeposit from "./MyDeposit"

import { Route, NavLink, Link, Switch } from "react-router-dom";

export default function Deposit() {
    return (
        <div>
            <header className="pt-0">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="md:flex md:items-center md:justify-between md:h-16">
                        <div class="flex-1 min-w-0">
                            <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">Browse and Deposit</h1>
                        </div>
                        <div class="mt-6 flex md:mt-0 md:ml-4 space-x-3">
                            <span class="sm:ml-3">
                                <Link to="/deposit/mypage" className="inline-flex items-center px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">My Deposits</Link>
                            </span>
                        </div>
                    </div>
                </div>
                
            </header>    
            <main>
                <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div class="border-b border-gray-200 mb-8">
                        <div class="sm:flex sm:items-baseline">
                            <div class="mt-4 sm:mt-0">
                                <nav class="-mb-px flex space-x-8">
                                    <NavLink to="/deposit/all" activeClassName="border-grey-500 text-indigo-600" className="border-transparent text-black-500 hover:text-indigo-600 hover:border-indigo-500 whitespace-nowrap pb-4 px-1 border-b-2 font-bold">Browse All</NavLink>
                                    <NavLink to="/deposit/mypage" activeClassName="border-grey-500 text-indigo-600" className="border-transparent text-black-500 hover:text-indigo-600 hover:border-indigo-500 whitespace-nowrap pb-4 px-1 border-b-2 font-bold">My Deposits</NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/deposit/all" component={AssetTable}></Route>
                        <Route exact path="/deposit/mypage" component={MyDeposit}></Route>
                    </Switch>
                </div>
            </main>
        </div>
    )
}