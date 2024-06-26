import './Drawer.css'

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`drawer--container ${isOpen ? 'open' : ''}`}>
        <div className='drawer--left'>
            <button className='drawer--close' onClick={onClose}>
                <img src="/icons/drawerClose.svg" alt="" />
            </button>
        </div>
        <div className='drawer--right'></div>
    </div>
  )
}

export default Drawer