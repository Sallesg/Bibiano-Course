import React, {useState} from 'react'
import { Like } from '../Like'
import './styles.css'

type PostProps = {
  username: string,
  avatarURL: string,
  content: string 
}

export const Post = ({username, avatarURL, content}: PostProps) => {

  const [liked, setLiked] = useState(false)

  function like () {
    setLiked(true)
  }
  function unlike () {
    setLiked(false)
  }

  return (
    <div className="post">
      <div className="title">
        <img src={avatarURL} alt="" />
        <p>{username}</p>
      </div>
      <p>{content}</p>
      <div className="action">
        <Like liked={liked} like={like} unlike={unlike} />
      </div>
    </div>
  )
}