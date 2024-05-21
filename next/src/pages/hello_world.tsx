import { SimpleButton } from '@/components/SimpleButton'
import type { NextPage } from 'next'

const HelloWorld: NextPage = () => {
  const handleOnClick = () => {
  console.log("Clicked from hello_world!");
  }
  return (
    <>
      <h1>Title</h1>
      <p>content</p>
      <SimpleButton text={'From HelloWorld'} onClick={handleOnClick} />
    </>
  )
}

export default HelloWorld
