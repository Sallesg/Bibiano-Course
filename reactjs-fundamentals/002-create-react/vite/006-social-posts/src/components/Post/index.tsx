import React, {useState} from 'react'
import './index.css'

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
  function disLike () {
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
        { liked ? 
          (<svg onClick={disLike} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>) : (<svg onClick={like} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>)
        }
      </div>
    </div>
  )
}