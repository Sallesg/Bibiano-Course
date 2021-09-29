import './App.css'
import { Post } from './components/Post'

function App() {

  const posts = [
    {
      username: 'admin',
      avatar: 'https://avatars.githubusercontent.com/u/49345118?v=4',
      content: 'lorem ipsum convidunt conviis!'
    },
    {
      username: 'Davonte Heidenreich',
      avatar: 'https://cdn.fakercloud.com/avatars/polarity_128.jpg',
      content: 'Corrupti voluptas quia praesentium ut amet minus aut molestiae natus.'
    }, 
    {
      username: 'Adrienne_Flatley84',
      avatar: 'https://cdn.fakercloud.com/avatars/dactrtr_128.jpg',
      content: 'Excepturi dolores dolor soluta fuga reiciendis nihil sint quia.'
    }, 
    {
      username: 'Savannah53',
      avatar: 'https://cdn.fakercloud.com/avatars/jordyvdboom_128.jpg',
      content: 'Illum quis iure quis amet necessitatibus quae exercitationem impedit tenetur.'
    }
  ]

  return (
    <>
      {posts.map(({content, username, avatar}, index) => (
        <Post 
          key={index}
          content={content} 
          username={username} 
          avatarURL={avatar}
        />
      ))}
    </>
  )
}

export default App