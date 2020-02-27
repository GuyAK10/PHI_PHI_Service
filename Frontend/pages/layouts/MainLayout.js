import Link from 'next/link';


const MainLayout = props => {
    return (

        <div className='container'>
            <div className='topbar'>
                <div className='logo-container'>
                    <Link href='/'>
                        <a className='link'>Service</a>
                    </Link>
                </div>
                <div className='menu-container'>
                    <div>
                        <Link href='/products'>
                            <a className='link'>Products</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/manage'>
                            <a className='link'>Manage</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/profile'>
                            <a className='link'>Profile</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='content'>
                {props.children}
            </div>

        </div>
    )
}
export default MainLayout;