
import Image from "next/image";
import { getPostBySlug } from "../utils/contentful";
import { useRouter } from 'next/router'


interface PostProps {
  title: string;
  subtitle: string;
  sys: {
    publishedAt: string;
  };
  image: {
    url: string;
  };
  content: string;
}

const Post = ({
  content,
  image: { url },
  subtitle,
  sys: { publishedAt },
  title,
}: PostProps) => {

  const router = useRouter()

  console.log(getServerSideProps)

  return (
   <>
   <p>Post: {router.query.slug}</p>
   <img src={url} alt="" />
   </>
  );
};

export default Post;

export async function getServerSideProps({ params, req, res }) {
  const { id } = params;
  const post = await getPostBySlug(id);
  return {
    props: {
      ...post,
    },
  };
}



