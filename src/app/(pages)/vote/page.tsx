'use client'

<<<<<<< HEAD
import SecPhasePromo from '../../components/SecPhasePromo/SecPhasePromo';
=======
import SecPhasePromo from '../../components/SecPhasePromo/SecPhasePromo'
>>>>>>> 7348c82 (fix: merging main int local branch, resolving conflicts and fixing buttons and layout)
import SecPhaseVote from '@/app/components/SecPhaseVote/SecPhaseVote'

export default function CreateVote() {
  return (
    <div className="z-20 p-4 px-20 flex flex-col text-center">
      <SecPhasePromo />
      <SecPhaseVote isPageVote={true} />
    </div>
  )
}
