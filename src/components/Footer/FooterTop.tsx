const FooterTop = () => {
    return (
        <div className="flex justify-between">
            <div className="flex w-full border-e">
                <div className="flex flex-col m-10">
                    <p className="font-bold py-4">COMPAGNY</p>
                    <a href="">About Nike</a>
                    <a href="">FAQ</a>
                    <a href="">News</a>
                    <a href="">Accessibility</a>
                </div>
                <div className="flex flex-col m-10">
                    <p className="font-bold py-4">COLLABORATE</p>
                    <a href="">Privacy Policy</a>
                    <a href="">Delivery Policy</a>
                    <a href="">Terms of Use</a>
                    <a href="">Terms of Sale</a>
                </div>
                <div className="flex flex-col m-10">
                    <p className="font-bold py-4">SHOP</p>
                    <a href="">How to order</a>
                    <a href="">Track your order</a>
                    <a href="">Return & Exchanges</a>
                </div>
            </div>
            <div className="flex w-full items-center">
                <div className="flex flex-col m-10">
                    <p className="font-bold py-4">EMAIL ADRESS</p>
                    <div>
                        <input className="border h-12 placeholder:text-black" placeholder="Enter your email" />
                        <button className="border h-12 bg-red-500 hover:cursor-pointer ">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop