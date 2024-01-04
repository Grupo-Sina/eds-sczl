import useWindowSize from '@/app/utils/useWindowHook'
import { usePathname } from 'next/navigation'

export default function SecPhasePromo() {
  const pathname = usePathname()

  const { width } = useWindowSize()

  return (
    <div className="desktop:pl-0 w-full max-w-[935px]">
      <h1 className="mt-[45px] text-center sm:text-left desktop:mt-0 text-white text-wrap">
        <span className="font-headingBold text-[48px] sm:text-[68px]">C</span>
        <span className="font-headingLight text-[48px] sm:text-[68px]">H</span>
        <span className="font-headingExtraBold text-[48px] sm:text-[68px]">
          E
        </span>
        <span className="font-headingBold text-[48px] sm:text-[68px]">G</span>
        <span className="font-heading text-[48px] sm:text-[68px]">O</span>
        <span className="font-headingBold text-[48px] sm:text-[68px]">U</span>
        <span className="font-heading text-[48px] sm:text-[68px]"> </span>
        <span className="font-headingBold text-[48px] sm:text-[68px]">A</span>
        <span className="font-headingExtraLight text-[48px] sm:text-[68px]">
          {' '}
        </span>
        <span className="font-headingLight text-[48px] sm:text-[68px]">D</span>
        <span className="font-headingExtraBold text-[48px] sm:text-[68px]">
          E
        </span>
        <span className="font-heading text-[48px] sm:text-[68px]">C</span>
        <span className="font-headingBold text-[48px] sm:text-[68px]">I</span>
        <span className="font-headingLight text-[48px] sm:text-[68px]">S</span>
        <span className="font-headingExtraBold text-[48px] sm:text-[68px]">
          Ã
        </span>
        <span className="font-heading text-[48px] sm:text-[68px]">O</span>
        <span className="font-heading text-[48px] sm:text-[68px]"> </span>
        <span className="font-headingBold text-[48px] sm:text-[68px]">D</span>
        <span className="font-headingLight text-[48px] sm:text-[68px]">A</span>
      </h1>
      <h1 className="sm:mt-[-40px] text-center sm:text-left mt-0">
        <span className="font-headingLight text-[80px] sm:text-[112px] text-[#00E275]">
          {' '}
        </span>
        <span className="font-headingLight text-[80px] sm:text-[112px] text-[#00E275]">
          Ú
        </span>
        <span className="font-headingBold text-[80px] sm:text-[112px] text-[#00E275]">
          L
        </span>
        <span className="font-headingBold text-[80px] sm:text-[112px] text-[#00E275]">
          T
        </span>
        <span className="font-heading text-[80px] sm:text-[112px] text-[#00E275]">
          I
        </span>
        <span className="font-headingBold text-[80px] sm:text-[112px] text-[#00E275]">
          M
        </span>
        <span className="font-headingExtraBold text-[80px] sm:text-[112px] text-[#00E275]">
          A
        </span>
        <span className="font-heading text-[80px] sm:text-[112px] text-[#00E275]">
          {' '}
        </span>
        <span className="font-headingBold text-[80px] sm:text-[112px] text-[#00E275]">
          F
        </span>
        <span className="font-heading text-[80px] sm:text-[112px] text-[#00E275]">
          A
        </span>
        <span className="font-headingBold text-[80px] sm:text-[112px] text-[#00E275]">
          S
        </span>
        <span className="font-headingBold text-[80px] sm:text-[112px] text-[#00E275]">
          E
        </span>
        <span className="font-headingLight text-[80px] sm:text-[112px] text-[#00E275]">
          !
        </span>
      </h1>
      <p
        className={`text-white sm:my-3 text-[22px] desktop:text-[28px] font-normal leading-[48px] ${
          pathname === '/register' && width > 640 ? 'text-left' : 'text-center'
        }`}
      >
        Os <span className="font-bold">5 times mais votados</span> avançaram
        para a última fase e agora você decide qual time irá ser o vencedor da
        promoção!{' '}
        <span className="font-bold">Escolha o seu time favorito, </span>{' '}
        <span className="font-bold text-[#00E275]">
          faça o login e vote agora!
        </span>
      </p>
    </div>
  )
}
