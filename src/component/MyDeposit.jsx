/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

const isLogin = true
const isAsset = false

function ConnectWallet(props) {
    return (
        <div className="w-full h-full pt-4 md:pt-8 lg:pt-12">
            <div className="h-full flex items-center justify-center">
                <div className="max-w-xl rounded-lg px-20 pt-12 pb-16 m-5 flex flex-col bg-white border border-gray-700">
                    <h2 className="text-2xl leading-8 font-semibold">Connect to your wallet.</h2>
                    <p className="my-6 text-base font-normal leading-7 text-grey-900 dark:text-gray-400 mb-8">To interact with investors,<br/>please connect to your wallet.</p>
                    <div className="flex justify-center">
                        <button className="flex-shrink-0 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-default border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition bg-purple-500 dark:bg-purple-500 active:bg-purple-500 dark:active:bg-purple-500 border-transparent font-medium hover:bg-purple-600 dark:hover:bg-purple-400 px-6 py-3 rounded-md shadow-sm text-base text-white dark:text-white" type="button">
                            <span className="flex-1 flex items-center justify-center space-x-2">Connect Wallet</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NoDeposit(props) {
    return (
        <div className="w-full h-full pt-0 md:pt-0 lg:pt-0">
            <div className="h-full flex items-center justify-center">
                <div className="max-w-lg rounded-lg px-16 pt-12 m-5 flex flex-col bg-white border border-gray-700">
                    <span class="flex flex-col items-middle max-w-md space-y-8">
                        <svg viewBox="0 0 374 229.632" fill="none">
                            <g filter="url(#filter0_dd)">
                                <rect y="0.442871" width="374" height="229.632" rx="7.7513" fill="#27303F" fill-opacity="0.4"></rect>
                                <rect x="38.2876" y="167.096" width="38.7565" height="38.7565" rx="19.3782" fill="#919BBF" fill-opacity="0.3"></rect>
                                <circle cx="85.3695" cy="77.202" r="44.4715" fill="url(#paint0_linear)"></circle>
                                <path d="M137.566 46.4984C143.878 57.2295 146.73 69.6455 145.732 82.0555C144.734 94.4655 139.935 106.266 131.989 115.851C124.043 125.436 113.336 132.338 101.326 135.619C89.3163 138.899 76.5869 138.399 64.8718 134.184L85.3695 77.202L137.566 46.4984Z" fill="url(#paint1_linear)"></path><path d="M47.9015 39.734C53.6218 34.0137 60.576 29.6791 68.231 27.0625C75.8859 24.4459 84.0384 23.6169 92.0634 24.6389C100.088 25.6609 107.773 28.5069 114.528 32.9586C121.282 37.4103 126.928 43.3496 131.032 50.3211L85.3692 77.2017L47.9015 39.734Z" fill="url(#paint2_linear)"></path>
                                <path d="M67.8991 127.226C60.8976 124.781 54.4874 120.894 49.083 115.815L85.3692 77.2017L67.8991 127.226Z" fill="url(#paint3_linear)"></path>
                                <g clip-path="url(#clip0)"><rect x="167.274" y="115.744" width="44.57" height="19.3782" rx="9.68912" fill="#EA66D8"></rect></g>
                                <g clip-path="url(#clip1)"><rect x="219.596" y="115.744" width="45.5389" height="19.3782" rx="9.68912" fill="#6AE0C0"></rect></g>
                                <g clip-path="url(#clip2)"><rect x="272.886" y="115.744" width="37.7876" height="19.3782" rx="9.68912" fill="#A989F7"></rect></g>
                                <rect x="97.5127" y="169.034" width="114.332" height="14.5337" rx="7.26684" fill="#919BBF" fill-opacity="0.3"></rect><rect x="167.274" y="58.5781" width="114.332" height="27.1295" rx="7.7513" fill="#919BBF" fill-opacity="0.3"></rect>
                                <rect opacity="0.4" x="97.5127" y="190.35" width="175.373" height="15.5026" rx="7.7513" fill="#919BBF" fill-opacity="0.3"></rect>
                            </g><defs><filter id="filter0_dd" x="0.621758" y="0.442868" width="412.756" height="268.389" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feMorphology radius="4.84456" operator="erode" in="SourceAlpha" result="effect1_dropShadow"></feMorphology><feOffset dy="9.68912"></feOffset><feGaussianBlur stdDeviation="4.84456"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feMorphology radius="4.84456" operator="erode" in="SourceAlpha" result="effect2_dropShadow"></feMorphology><feOffset dy="19.3782"></feOffset><feGaussianBlur stdDeviation="12.1114"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend></filter><linearGradient id="paint0_linear" x1="-48.0451" y1="32.7305" x2="83.0656" y2="204.357" gradientUnits="userSpaceOnUse"><stop stop-color="#CE9FFC"></stop><stop offset="1" stop-color="#7367F0"></stop></linearGradient><linearGradient id="paint1_linear" x1="47.1296" y1="47.9197" x2="141.114" y2="128.339" gradientUnits="userSpaceOnUse"><stop stop-color="#B7FBFF"></stop><stop offset="1" stop-color="#F641CE"></stop></linearGradient><linearGradient id="paint2_linear" x1="95.7962" y1="13.8375" x2="109.14" y2="86.6759" gradientUnits="userSpaceOnUse"><stop stop-color="#85FFA7"></stop><stop offset="1" stop-color="#2B97FA"></stop></linearGradient><linearGradient id="paint3_linear" x1="32.3818" y1="-81.7604" x2="244.331" y2="130.189" gradientUnits="userSpaceOnUse"><stop stop-color="#85A0FF"></stop><stop offset="1" stop-color="#2BAFFA"></stop></linearGradient><clipPath id="clip0"><rect x="167.274" y="115.744" width="44.57" height="19.3782" rx="9.68912" fill="white"></rect></clipPath><clipPath id="clip1"><rect x="219.596" y="115.744" width="45.5389" height="19.3782" rx="9.68912" fill="white"></rect></clipPath><clipPath id="clip2"><rect x="272.886" y="115.744" width="37.7876" height="19.3782" rx="9.68912" fill="white"></rect></clipPath></defs>
                        </svg>
                        <span>
                            <h3 class="w-full text-2xl mb-2 leading-8 font-semibold dark:text-gray-050">You have not deposited in any vaults</h3>
                            <p class="w-full leading-6 font-normal text-gray-600 dark:text-gray-400">Once you have deposited in one or more vaults, you can track their performance and manage your positions here.</p>
                        </span>
                        <div class="flex flex-col items-stretch">
                            <a class="mb-12 flex-shrink-0 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-default border focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition bg-purple-500 dark:bg-purple-500 active:bg-purple-500 dark:active:bg-purple-500 border-transparent font-medium hover:bg-purple-600 dark:hover:bg-purple-400 px-4 py-2 rounded-md shadow-sm text-base text-white dark:text-white" href="/deposit/all"><span class="flex-1 flex items-center justify-center space-x-2">Deposit Now</span></a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

function MyDepositTable(props) {
}

export default function MyDeposit() {
    return (
        <div className="flex flex-col">
            {
                isLogin?<NoDeposit />:<ConnectWallet />
            }
        </div>
    )
}
  