'use client'
import SuccessVoteComponent from '@/app/components/SuccessVoteComponent/SucessVoteComponent'
import VoteFormComponent from '@/app/components/VoteFormComponent/VoteFormComponent'
import VotePromoComponent from '@/app/components/VotePromoComponent/VotePromoComponent'
import { useAppContext } from '@/app/context/AppContext'

export default function CreateVote() {
  const { confirmedVote } = useAppContext()
  return (
    <div  className='z-20 flex flex-col md:flex-row'>
      {confirmedVote ? <SuccessVoteComponent /> : <VotePromoComponent />}
      <VoteFormComponent />
    </div>
  )
}
