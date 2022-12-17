import * as React from "react"
import { graphql } from "gatsby"

import { BlogPost } from "../templates/blog-post"

export interface BlogIndexPropss {
  posts: BlogPost[]
}

interface HomepagePropss {
  data: {
    homepage: {
      id: string
      title: string
    }
  }
}

//export interface Asd {
//  h1: string
//}

//const asd = h1 as Asd

export default function MenuItems({ props: IntrinsicAttributes }) {
  // const { homepage } = props.data
  //return <div>{homepage.title}</div>
}
