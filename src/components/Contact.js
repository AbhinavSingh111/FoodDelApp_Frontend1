const Contact = ()=>{
    return (
            <div className="text-center block min-h-screen">
                <h1 className="font-bold text-3xl p-4 m-4">This is contact us component.</h1>
                <form>
                    <input className="border border-solid border-orange-200 rounded-lg text-center p-2 m-2 shadow-lg hover:border-orange-300" placeholder="name">

                    </input>
                    <input className="border border-solid border-orange-200 rounded-lg text-center p-2 m-2 shadow-lg hover:border-orange-300" placeholder="message">

                    </input>
                    <button className="px-4 py-2 mx-4 rounded-lg bg-blue-300 items-center shadow-lg hover:bg-blue-400">
                    Send
                    </button>
                </form>
            </div>
            
    )
};

export default Contact;