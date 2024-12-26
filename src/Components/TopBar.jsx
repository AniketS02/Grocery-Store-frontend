// this component will render the TopBar consisting of Payouts a/ How it works another div of search bar and the last div of messages and dropdown button
export function TopBar() {
    return <div className="col-span-10">
        <div className="flex justify-between mt-2">
            <div className="flex">
                <div className=" text-lg font-semibold p-3 ">
                    Payouts
                </div>
                <div className="pr-3 flex text-sm pt-4">
                    <div className="mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="rgba(91, 91, 106, 0.69)" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div className="text-zinc-500 pl-2 pt-0.5 text-xs font-bold">
                        <pre>How it works</pre>
                    </div>
                </div>
            </div>
            <div className="flex mt-3">
                <div className="pr-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div className="">
                    <input type="text" placeholder="Search anything here" className=" pl-2 w-96 rounded-md border-2 bg-grey-500 " />
                </div>
            </div>
            <div className="flex mt-3 pr-4">
                <div className="pr-2 ">
                    {/* messages */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#e5e7eb" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                </div>
                <div>
                    {/* dropdown */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#e5e7eb" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class=" mt-5 w-full h-px bg-gray-400"></div>
        <div className="bg-slate-200 h-full ">
            <div className="font-bold p-3 pb-5 ml-3 text-xl">
                Overview
            </div>
            <div className="pl-2 grid grid-cols-12 gap-4">
                <div className="bg-blue-700 rounded-md col-span-4 hover:bg-blue-600">
                    <div className="flex p-3 mt-3 text-white">
                        <div>
                            Next Payout
                        </div>
                        <div className="pl-2 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between p-2 ">
                        <div className="text-3xl p-4 text-white font-bold pl-2 pt-1.5 pr-0.5">
                            ₹ 4,516.26
                        </div>
                        <div className="flex mt-1 p-2 ">
                            <div className="text-white cursor-pointer underline">
                                23 orders
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between rounded-b-md p-4 text-white bg-blue-800">
                        <div>
                            Next Payout Date:
                        </div>
                        <div>
                            Today, 04:00 PM
                        </div>
                    </div>
                </div>
                <div className="col-span-4 shadow-lg rounded-md bg-white h-40 p-3">
                    <div className="flex">
                        <div className="mt-3">
                            Amount Pending
                        </div>
                        <div className="mt-4 pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="mt-6 font-bold text-3xl">
                            ₹ 25,468.02
                        </div>
                        <div className="flex mt-7">
                            <div className="underline text-blue-700">
                                16 Orders
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338ca" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 bg-white rounded-md shadow-lg h-40 mr-3 ">
                    <div className="flex pt-6 pr-6 pl-3">
                        <div>
                            Amount Processed
                        </div>
                        <div className="pl-1 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-6 pl-4 text-2xl font-bold">
                        ₹ 50,68,347.68
                    </div>
                </div>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    </div>
}