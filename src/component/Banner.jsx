/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

import { ExclamationIcon, XIcon } from '@heroicons/react/outline'

export default function Banner() {
    return (
        <>
        <div className="fixed inset-x-0 bottom-0">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex p-2 rounded-lg bg-black">
                                <ExclamationIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span className="md:hidden">This project is in beta. Use at your own risk.</span>
                                <span className="hidden md:inline">This project is in beta. Use at your own risk.</span>
                            </p>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                className="-mr-1 flex p-2 rounded-md hover:text-black text-white focus:outline-none focus:ring-none focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
  