import { productsInfos } from "../../data/ProductsInfos"
import { Plus } from 'lucide-react';

const ProductsInfos = () => {
    return (
        <div className="grid grid-cols-3 ">
            {
                productsInfos.map((productInfos) => (
                    <div>
                        <div>
                            <img src={productInfos.picture} alt="" className='border' />
                        </div>
                        <div className="flex justify-between items-center border p-6">
                            <div>
                                <p>{productInfos.title}</p>
                                <p>{productInfos.price}</p>
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

export default ProductsInfos