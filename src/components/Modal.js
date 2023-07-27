import { Link } from "react-router-dom"

const Modal = ({ close, setClose }) => {
    
    const click = () => {
        setClose(false)
    }

    return (
        <div className={`${close ? "fixed" : "hidden"} top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-600 bg-opacity-50`}>
            <div className="relative w-full max-w-xl max-h-full m-auto mt-[15%]">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-start justify-between p-4 pt-8">
                        <h3 className="lg:text-[1.7rem] text-[1.3rem] font-semibold lg:ml-[5em] ml-[2em] text-gray-900">
                            Tell me more about you
                        </h3>
                        <button onClick={click} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-xl leading-relaxed text-gray-500 text-center">
                            Are you a college student or a prime customer?
                        </p>

                    </div>
                    <div className="flex justify-center items-center p-6 space-x-2 border-gray-200">
                        <Link to="/how-to" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">College Student</Link>
                        <Link to="/experienced" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Prime Customer</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
