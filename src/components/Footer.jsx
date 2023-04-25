import { useState, useEffect } from "react";
import { getQuote } from "../api/access";

const Footer = () => {
    const [quoteData, setQuoteData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getQuote();
            setQuoteData(data);
        }

        fetchData();
    }, []);

    const output = quoteData.quote ? (
        <div className="text-white text-2xl">
            <div className="mb-5"> {`"${quoteData.quote}"`} </div>
            <div> {`-- ${quoteData.author}`} </div>
        </div>
    ) : <></>

    return (
        <div className="bg-slate-600 h-96 w-screen flex flex-col items-center
            justify-center px-52 fixed bottom-0">
            { output }
        </div>
    );
};

export default Footer;