'use client'

import SecPhasePromo from '../../components/SecPhasePromo/SecPhasePromo';
import SecPhaseVote from '@/app/components/SecPhaseVote/SecPhaseVote'


export default function CreateVote() {

  return (
    <div className="z-20 p-4 px-20">
      <SecPhasePromo />
      <SecPhaseVote />
    </div>
  )
}
