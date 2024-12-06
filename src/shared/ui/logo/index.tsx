import LogoImg from './Logo.png'

const Logo = () => {
  return (
    <div className='flex items-center'>
    <img src={LogoImg} alt="inhouse" />
    <span>InHouse</span>    
    </div>
  )
}

export default Logo