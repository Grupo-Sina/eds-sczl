'use client'

<<<<<<< HEAD
import SecPhasePromo from '../../components/SecPhasePromo/SecPhasePromo';
=======
import SecPhasePromo from '../../components/SecPhasePromo/SecPhasePromo'
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
import SecPhaseVote from '@/app/components/SecPhaseVote/SecPhaseVote'
import SuccessVoteComponent from '@/app/components/SuccessVoteComponent/SucessVoteComponent'
import VoteFormComponent from '@/app/components/VoteFormComponent/VoteFormComponent'
import VotePromoComponent from '@/app/components/VotePromoComponent/VotePromoComponent'
import { useAppContext } from '@/app/context/AppContext'
import useWindowSize from '@/app/utils/useWindowHook'
import { addDays, format } from 'date-fns'

export default function CreateVote() {
  const { confirmedVote } = useAppContext()
  const { width } = useWindowSize()

  const isMobile = width < 768

  return (
    <div className="z-20 p-4 px-20 flex flex-col text-center">
      <SecPhasePromo />
      <SecPhaseVote isPageVote={true} />
    </div>
  )
}
