import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const TopBarIcons = () => {
    return (
        <div className="flex justify-between gap-8 p-8">
            <UserRound className='hover:cursor-pointer'/>
            <ShoppingCart className='hover:cursor-pointer'/>
        </div>
    )
}
export default TopBarIcons