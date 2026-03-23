import { shopProductsInfos } from "../../data/ShopProductsInfos"
import { Plus } from 'lucide-react';

const ShopProductsInfos = () => {
    return (
        <div className="grid grid-cols-3 ">
            {
                shopProductsInfos.map((shopProductInfos) => (
                    <div>
                        <div>
                            <img src={shopProductInfos.picture} alt="" className='border' />
                        </div>
                        <div className="flex justify-between items-center border p-6">
                            <div>
                                <p>{shopProductInfos.title}</p>
                                <p>{shopProductInfos.price}</p>
                            </div>
                            <div className="text-white hover:text-black bg-black hover:bg-white rounded-full hover:cursor-pointer">
                                <Plus />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ShopProductsInfos