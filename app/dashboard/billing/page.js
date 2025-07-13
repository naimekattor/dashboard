import React from 'react';



// Dashboard component
const Billing = () => {
    // Sample data for components
    const invoices = [
        { date: 'March, 01 2020', id: '#MS-415646', amount: '$180', type: 'PDF' },
        { date: 'February, 10 2021', id: '#RV-126749', amount: '$250', type: 'PDF' },
        { date: 'April, 05 2020', id: '#FB-212562', amount: '$560', type: 'PDF' },
        { date: 'June, 25 2019', id: '#QW-103578', amount: '$120', type: 'PDF' },
        { date: 'March, 01 2019', id: '#AR-850468', amount: '$300', type: 'PDF' },
    ];

    const transactions = [
        { id: 1, name: 'Netflix', date: '27 March 2020, at 12:30 PM', amount: '-$2500', type: 'expense' },
        { id: 2, name: 'Apple', date: '27 March 2020, at 12:30 PM', amount: '+$2500', type: 'income' },
        { id: 3, name: 'Stripe', date: '26 March 2020, at 13:45 PM', amount: '-$800', type: 'expense' },
        { id: 4, name: 'HubSpot', date: '26 March 2020, at 12:30 PM', amount: '+$1700', type: 'income' },
        { id: 5, name: 'Webflow', date: '26 March 2020, at 05:00 AM', amount: 'Pending', type: 'pending' },
        { id: 6, name: 'Microsoft', date: '25 March 2020, at 16:30 PM', amount: '-$997', type: 'expense' },
    ];

    return (
        <div className="p-8">


            <div className='flex md:flex-row flex-col w-full gap-6'>
                <div className='flex-1  space-y-4'>
                    {/* Credit Card Section */}
                    <div className='flex md:flex-row flex-col w-full gap-4'>
                        <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl shadow-lg p-6 relative overflow-hidden flex-1">
                            {/* Decorative circles to match the image */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -mt-12 -mr-12"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mb-16 -ml-16"></div>

                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm font-semibold text-white">Vision UI</span>
                                {/* Checkmark icon */}
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-white mb-4">7812 2139 0823 XXXX</div>
                            <div className="flex justify-between text-sm text-gray-300">
                                <div>
                                    <span className="block">VALID THRU</span>
                                    <span className="block font-semibold text-white">05/24</span>
                                </div>
                                <div>
                                    <span className="block">CVV</span>
                                    <span className="block font-semibold text-white">09X</span>
                                </div>
                            </div>
                        </div>
                        {/* Credit Balance Section */}
                        <div className="bg-gradient-to-br from-[#04245f] to-[#051434] bg-opacity-70 rounded-xl shadow-lg p-6 flex-1">
                            <h3 className="text-lg font-bold text-white mb-4">Credit Balance</h3>
                            <div className="text-4xl font-bold text-white mb-2">$25,215</div>
                            <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                                <span>Bill & Taxes</span>
                                <span className="text-red-400">-$154.50</span>
                            </div>
                            <div className="text-xs text-gray-400">Today: 16:36</div>
                        </div>
                    </div>
                    {/* Payment Method Section */}
                    <div className="bg-gradient-to-br from-[#04245f] to-[#051434] bg-opacity-70 rounded-xl shadow-lg p-6">
                        <div className="flex  justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-white">Payment Method</h3>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                ADD A NEW CARD
                            </button>
                        </div>
                        <div className=" flex md:flex-row flex-col gap-4 items-center">
                            <div className="flex items-center bg-gradient-to-br from-[#04245f] to-[#051434] rounded-lg p-4   border-gray-200/20 border-1 flex-1" >
                                <input type="radio" name="payment" className="form-radio text-blue-500 h-5 w-5" defaultChecked />
                                <div className="ml-4 flex items-center">
                                    {/* Mastercard placeholder image */}
                                    <img src="https://placehold.co/30x20/FF5733/FFFFFF?text=MC" alt="Mastercard" className="h-5 mr-2 rounded" />
                                    <span className="text-white">7812 2139 0823 XXXX</span>
                                </div>
                            </div>
                            <div className="flex items-center bg-gradient-to-br from-[#04245f]/50 to-[#051434] border-gray-200/20 border-1 rounded-lg p-4 flex-1">
                                <input type="radio" name="payment" className="form-radio text-blue-500 h-5 w-5" />
                                <div className="ml-4 flex items-center">
                                    {/* Visa placeholder image */}
                                    <img src="https://placehold.co/30x20/4285F4/FFFFFF?text=VISA" alt="Visa" className="h-5 mr-2 rounded" />
                                    <span className="text-white">7812 2139 0823 XXXX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Invoices Section */}
                <div className="bg-gradient-to-br from-[#04245f] to-[#051434] bg-opacity-70 rounded-xl shadow-lg p-6 flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-white">Invoices</h3>
                        <button className="text-blue-400 hover:text-blue-600 text-sm">VIEW ALL</button>
                    </div>
                    <div className="space-y-4">
                        {invoices.map((invoice) => (
                            <div key={invoice.id} className="flex justify-between items-center">
                                <div>
                                    <div className="text-sm font-medium text-white">{invoice.date}</div>
                                    <div className="text-xs text-gray-400">{invoice.id}</div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm text-white">{invoice.amount}</span>
                                    <button className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full hover:bg-gray-600">
                                        {invoice.type}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>





            <div className='flex md:flex-row flex-col mt-6 gap-4'>
                {/* Billing Information Section */}
                <div className="bg-gradient-to-br from-[#04245f] to-[#051434] bg-opacity-70 rounded-xl shadow-lg p-6 flex-1">
                    <h3 className="text-lg font-bold text-white mb-4">Billing Information</h3>
                    <div className="space-y-4">
                        {/* Billing Card 1 */}
                        <div className="bg-gradient-to-r from-[#181D3CF0] to-[#0A0E237D] rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-md font-semibold text-white">Oliver Liam</h4>
                                <div className="flex space-x-4"> {/* Increased space-x for better separation */}
                                    <button className="text-red-400 hover:text-red-600 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                        DELETE
                                    </button>
                                    <button className="text-blue-400 hover:text-blue-600 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                        </svg>
                                        EDIT
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300">Company Name: Vking Bunto</p>
                            <p className="text-sm text-gray-300">Email Address: oliver@burrito.com</p>
                            <p className="text-sm text-gray-300">VAT Number: FRB1235476</p>
                        </div>
                        {/* Billing Card 2 */}
                        <div className="bg-gradient-to-r from-[#181D3CF0] to-[#0A0E237D] rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-md font-semibold text-white">Oliver Liam</h4>
                                <div className="flex space-x-4">
                                    <button className="text-red-400 hover:text-red-600 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                        DELETE
                                    </button>
                                    <button className="text-blue-400 hover:text-blue-600 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                        </svg>
                                        EDIT
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300">Company Name: Vking Bunto</p>
                            <p className="text-sm text-gray-300">Email Address: oliver@burrito.com</p>
                            <p className="text-sm text-gray-300">VAT Number: FRB1235476</p>
                        </div>
                        {/* Billing Card 3 */}
                        <div className="bg-gradient-to-r from-[#181D3CF0] to-[#0A0E237D] rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-md font-semibold text-white">Oliver Liam</h4>
                                <div className="flex space-x-4">
                                    <button className="text-red-400 hover:text-red-600 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                        DELETE
                                    </button>
                                    <button className="text-blue-400 hover:text-blue-600 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                        </svg>
                                        EDIT
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300">Company Name: Vking Bunto</p>
                            <p className="text-sm text-gray-300">Email Address: oliver@burrito.com</p>
                            <p className="text-sm text-gray-300">VAT Number: FRB1235476</p>
                        </div>
                    </div>
                </div>






                {/* Your Transactions Section */}
                <div className="bg-gradient-to-br from-[#04245f] to-[#051434] bg-opacity-70 rounded-xl shadow-lg p-6 flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-white">Your Transactions</h3>
                        <span className="text-sm text-gray-400">23 - 30 March 2020</span>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Newest</p> {/* Added mb-2 for spacing */}
                        {transactions.filter(t => t.id <= 2).map((transaction) => (
                            <div key={transaction.id} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${transaction.type === 'expense' ? 'bg-red-500' : transaction.type === 'income' ? 'bg-green-500' : 'bg-gray-500'
                                        }`}>
                                        {/* Placeholder for icon - using simple SVG for arrows/dots */}
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            {transaction.type === 'expense' && <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>}
                                            {transaction.type === 'income' && <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>}
                                            {transaction.type === 'pending' && <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 7a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"></path>}
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white">{transaction.name}</div>
                                        <div className="text-xs text-gray-400">{transaction.date}</div>
                                    </div>
                                </div>
                                <span className={`text-sm font-semibold ${transaction.type === 'expense' ? 'text-red-400' : transaction.type === 'income' ? 'text-green-400' : 'text-gray-400'
                                    }`}>
                                    {transaction.amount}
                                </span>
                            </div>
                        ))}
                        <p className="text-xs text-gray-400 uppercase font-semibold mt-6 mb-2">Yesterday</p> {/* Added mb-2 for spacing */}
                        {transactions.filter(t => t.id > 2).map((transaction) => (
                            <div key={transaction.id} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${transaction.type === 'expense' ? 'bg-red-500' : transaction.type === 'income' ? 'bg-green-500' : 'bg-gray-500'
                                        }`}>
                                        {/* Placeholder for icon - using simple SVG for arrows/dots */}
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            {transaction.type === 'expense' && <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>}
                                            {transaction.type === 'income' && <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>}
                                            {transaction.type === 'pending' && <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 7a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"></path>}
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white">{transaction.name}</div>
                                        <div className="text-xs text-gray-400">{transaction.date}</div>
                                    </div>
                                </div>
                                <span className={`text-sm font-semibold ${transaction.type === 'expense' ? 'text-red-400' : transaction.type === 'income' ? 'text-green-400' : 'text-gray-400'
                                    }`}>
                                    {transaction.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Billing;
