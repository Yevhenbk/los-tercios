import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <div className='footer__holder'>
      <p className='footer-left'>
        BIENVENUE WELCOME ようこそ BIENVENIDO <span>Ласкаво просимо</span>{' '}
        BIENVENUE WELCOME ようこそ BIENVENIDO <span>Ласкаво просимо</span>{' '}
        BIENVENUE WELCOME ようこそ BIENVENIDO <span>Ласкаво просимо</span>{' '}
        BIENVENUE WELCOME ようこそ BIENVENIDO <span>Ласкаво просимо</span>
      </p>
      <div className='sup__block'>
        <p className='footer__tag'>Designed for movements and functionality</p>
        <div className='footer__br' />
        <div className='footer'>
          <div className='footer__block'>
            <p>halterofilialostercios</p>
            <p>@gmail.com</p>
            <p>(514) 467-9780</p>
          </div>
          <div className='footer__block'>
            <p>C. Miguel Yuste, 43</p>
            <p>28902 Madrid</p>
            <p>Spain</p>
          </div>
          <div className='footer__block'>
            <p>
              Powered by <span>Los Tercios</span> ®
            </p>
            <p>All rights reserved</p>
            <p>
              Website by <span>Yevhen Balahutrak</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer