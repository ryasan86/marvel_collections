import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = async () => {
  const { site } = await useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            repoUrl
          }
        }
      }
    `
  )

  return site.siteMetaData
}
