import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Faq() {
    return (
        <section className="bg-bookmark-white py-20">
            <div className="container">
            {/* Heading */}
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                 <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
                 <p className="text-center text-bookmark-grey mt-4">
                   Here are some of our FAQs. If you have any other questions you'd like answered please feel free
                 </p>
            </div>
            {/*FAQ Items*/}
            <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                <div className="flex items-center border-b border-bookmark-blue py-4">
                    <span className="flex-1">What is Bookmark ?</span>
                    <FontAwesomeIcon className="text-bookmark-pupple" icon={faChevronDown}></FontAwesomeIcon>
                </div>  
                <div className="flex items-center border-b border-bookmark-blue py-4">
                    <span className="flex-1">How can I request a new browser ?</span>
                    <FontAwesomeIcon className="text-bookmark-pupple" icon={faChevronDown}></FontAwesomeIcon>
                </div>  
                <div className="flex items-center border-b border-bookmark-blue py-4">
                    <span className="flex-1">Is there a mobile app ?</span>
                    <FontAwesomeIcon className="text-bookmark-pupple" icon={faChevronDown}></FontAwesomeIcon>
                </div>  
                <div className="flex items-center border-b border-bookmark-blue py-4">
                    <span className="flex-1">What about other Chromium browsers ?</span>
                    <FontAwesomeIcon className="text-bookmark-pupple" icon={faChevronDown}></FontAwesomeIcon>
                </div>  
            <button type="button" className="mt-12 flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black">
                    More Info
            </button>
            </div>
        </div>
        </section>
     );
}

export default Faq;