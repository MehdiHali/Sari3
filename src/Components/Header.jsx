
import {HiLightningBolt} from 'react-icons/hi'

function Header({Unit,SubUnit,className}) {


    return (
        <nav className={"text-2xl w-full "+className}>
            <div className='flex items-center text-green-400  p-4'>
                <HiLightningBolt size={40}  />
                <span className='text-2xl ml-2'>
                    Sari3
                </span>
            </div>
        </nav>
    )
}

export default Header;