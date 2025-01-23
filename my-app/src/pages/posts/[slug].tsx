
import Image from "next/image";
import { getPostBySlug, getAllPosts } from "../../utils/contentful";
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

//  const item = await getPostBySlug('london')

export const getServerSideProps = async ({ params }) => {
  try {
    // Destructure the id from params
    const { slug } = params;

    // if (!id) {
    //   return {
    //     notFound: true, // Return 404 if id is not provided
    //   };
    // }

    console.log('1111111', params);
    

    // Fetch data from the external API
    const resp = await getPostBySlug(slug);

    console.log('ddddddddsssddddd', resp)

    // if (!resp.ok) {
    //   throw new Error(`Failed to fetch post with id ${id}: ${resp.status}`);
    // }

    // const post = await resp.json();

    // Pass data to the page via props
    return {
      props: { resp },
    };
  } catch (error) {
    console.error("Error fetching post:", error);

    return {
      notFound: false, // Optional: Handle errors by returning 404
    };
  }
};





const Post = ({
  resp
}) => {

 
const router = useRouter()



 console.log(resp)




  return (
   <>
   <p>Post: {router.query.slug}</p>
   <img src={resp.image.url} alt="" />  
   </>
  );
};

export default Post;












