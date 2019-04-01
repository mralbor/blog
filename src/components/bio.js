
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { List, Avatar, Divider } from "antd"

const Bio = () => (
  <StaticQuery 

query={
    graphql`
        query {
            site {
                siteMetadata {
                author
                biographie
                authorImage
                }
            }
        }
    `
}
render={data =>(
    <>
    <Divider orientation="right">Auteur</Divider>
    <List.Item>
        <List.Item.Meta
            avatar={
                <Avatar
                    size={64}
                    src={data.site.siteMetadata.authorImage}
                />
        }
        title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
        description={data.site.siteMetadata.biographie}
        />
    </List.Item>
    </>
)}
/>
)

export default Bio