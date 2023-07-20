import Link from 'next/link'
type Props = {
  postData: any
}

const PostCardContent = ({ postData }: Props) => {
  return (
    <>
      {postData.split(/(#[^\s#]+)/g).map((hashtag: any, index: number) => {
        if (hashtag.match(/(#[^\s#]+)/)) {
          return (
            <Link href={`/hashtag/${hashtag.slice(1)}`} key={index}>
              <a>{hashtag}</a>
            </Link>
          )
        }
        return hashtag
      })}
    </>
  )
}
export default PostCardContent
