
import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getAllPosts() {
    const { data } = await apolloClient.query({
        query: gql`
        query GetAllPosts {
          paintingCollection {
            items {
            name
            slug
            sys {
                publishedAt
            }
                image {
                    url
                }
            }
        }
    }
      `,
    });
    return data.paintingCollection.items;
}


export async function getPostBySlug(slug) {
    const { data } = await apolloClient.query({
      query: gql`
        query GetPostBySlug($slug: String!) {
                paintingCollection(where: { slug: $slug }) {
                items {
                name
                    sys {
                        publishedAt
                    }
                    image {
                        url
                    }
                }
            
            }
        }
      `,
      variables: {
        slug,
      },
    });
    return data.paintingCollection.items[0];
  }



// export async function getPostBySlug(slug) {
//    const allPosts = await getAllPosts();
//    const item  = allPosts.filter((post) => post.slug === slug)
//    return item
//   }

export default { getAllPosts, getPostBySlug };