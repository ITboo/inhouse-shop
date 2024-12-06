import LogoImg from './Logo.png'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
    <img src={LogoImg} alt="inhouse" />
    <span className='font-bold text-2xl'>InHouse</span>    
    </div>
  )
}

export default Logo