'use client'

import reactionFunction from "./reactionFunction"
import { useState } from "react";
import unReactionFunction from "./unReactionFunction";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import PercentageBar from "@/components/ui/bar";
import react from "./react";

const ButtonReaction = ({idLei, reactionStart, likeCountStart, dislikeCountStart, unncessaryCountStart}: {idLei: string, reactionStart: string, likeCountStart: number, dislikeCountStart: number, unncessaryCountStart: number}) => {

  const [reactionReady, setReactionReady] = useState(1);

  const likeActiveStart = true ? reactionStart == 'like' : false
  const dislikeActiveStart = true ? reactionStart == 'dislike' : false
  const unnecessaryActiveStart = true ? reactionStart == 'desnecessario' : false

  const [likeActive, setLikeActive] = useState(likeActiveStart);
  const [likeCount, setLikeCount] = useState(likeCountStart);
  
  const [dislikeActive, setDislikeActive] = useState(dislikeActiveStart);
  const [dislikeCount, setDislikeCount] = useState(dislikeCountStart);
  
  const [unnecessaryActive, setUnnecessaryActive] = useState(unnecessaryActiveStart);
  const [unnecessaryCount, setUnnecessaryCount] = useState(unncessaryCountStart);

  const { data: session, status } = useSession()
  const router = useRouter();

  const clickLike = async () => {

    if (reactionReady == 0) {
      return
    }

    setReactionReady(0)

    if (status === "authenticated") {

      {likeActive
        ? (() => {
          setLikeCount(likeCount - 1)})()
        : (async () => {
          setLikeCount(likeCount + 1)})()}
              
      setLikeActive(!likeActive)

      if (dislikeActive) {
        setDislikeCount(dislikeCount - 1)
        setDislikeActive(false)
      }

      else if (unnecessaryActive) {
        setUnnecessaryCount(unnecessaryCount - 1)
        setUnnecessaryActive(false)
      }

      const res = await react(idLei, 'like')
      console.log(res)
      if (res.ok) {
        setReactionReady(1)
      }
    }

    else {
      router.push("/api/auth/signin");
    }
  }

  const clickDislike = async () => {

    if (reactionReady == 0) {
      return
    }

    setReactionReady(0)

    if (status === "authenticated") {

      {dislikeActive
        ? (() => {
          setDislikeCount(dislikeCount - 1)})()
        : (async () => {
          setDislikeCount(dislikeCount + 1)})()}
              
      setDislikeActive(!dislikeActive)

      if (likeActive) {
        setLikeCount(likeCount - 1)
        setLikeActive(false)
      }

      else if (unnecessaryActive) {
        setUnnecessaryCount(unnecessaryCount - 1)
        setUnnecessaryActive(false)
      }

      const res = await react(idLei, 'dislike')
      console.log(res)
      if (res.ok) {
        setReactionReady(1)
      }
    }
    else {
      router.push("/api/auth/signin");
    }
  }

  const clickUnnecessary = async () => {

    if (reactionReady == 0) {
      return
    }

    setReactionReady(0)
    
    if (status === "authenticated") {

      {unnecessaryActive
        ? (() => {
          setUnnecessaryCount(unnecessaryCount - 1)})()
        : (async () => {
          setUnnecessaryCount(unnecessaryCount + 1)})()}
              
      setUnnecessaryActive(!unnecessaryActive)

      if (likeActive) {
        setLikeCount(likeCount - 1)
        setLikeActive(false)
      }

      else if (dislikeActive) {
        setDislikeCount(dislikeCount - 1)
        setDislikeActive(false)
      }

      const res = await react(idLei, 'desnecessario')
      console.log(res)
      if (res.ok) {
        setReactionReady(1)
      }
    }
    else {
      router.push("/api/auth/signin");
    }
  }

  let totalReactions = likeCount + dislikeCount + unnecessaryCount

  let greenPercentage = likeCount / totalReactions
  let redPercentage = dislikeCount / totalReactions
  let grayPercentage = unnecessaryCount / totalReactions

  return (
    <div className="">
      <div>
        {totalReactions >= 10 && <PercentageBar greenPercentage={greenPercentage} redPercentage={redPercentage} grayPercentage={grayPercentage}></PercentageBar>}
      </div>
      <div className='mt-4 flex gap-2 justify-between sm:gap-5 sm:justify-start'>
        <div className={`flex-shrink min-w-[50px] h-9 px-5 cursor-pointer flex items-center border-2 justify-center gap-2 rounded-full ${likeActive ? 'bg-black border-black' : 'bg-white border-gray-100'}`}
            onClick={clickLike}>
          <div>
            <AiOutlineLike className={`text-xl ${likeActive ? 'text-white' : 'text-gray-400 opacity-70'}`}/>
          </div>
          <span className={`${likeActive ? 'text-white' : 'text-black'}`}>{likeCount}</span>
        </div>
        <div className={`flex-shrink min-w-[50px] h-9 px-5 cursor-pointer flex items-center border-2 justify-center gap-2 rounded-full ${dislikeActive ? 'bg-black border-black' : 'bg-white border-gray-100'}`}
            onClick={clickDislike}>
          <div>
            <AiOutlineDislike className={`text-xl ${dislikeActive ? 'text-white' : 'text-gray-400 opacity-70'}`}/>
          </div>
          <span className={`${dislikeActive ? 'text-white' : 'text-black'}`}>{dislikeCount}</span>
        </div>
        <div className={`flex-shrink min-w-[50px] h-9 px-5 cursor-pointer flex items-center border-2 justify-center gap-2 rounded-full ${unnecessaryActive ? 'bg-black border-black' : 'bg-white border-gray-100'}`}
            onClick={clickUnnecessary}>
          <span className={`${unnecessaryActive ? 'text-white' : 'text-gray-400'}`}>Desnecessário</span>
          <span className={`${unnecessaryActive ? 'text-white' : 'text-black'}`}>{unnecessaryCount}</span>
        </div>
      </div>
    </div>
  )
}

export default ButtonReaction