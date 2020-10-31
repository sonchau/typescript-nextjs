import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import {getAllPages, getPageData} from '../../lib/utils';

import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  pageData
}) {
  console.log('pageData', pageData)
  return (
    <Layout>
      <Head>
        <title>{pageData.title}</title>
      </Head>

    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPages()
  console.log('paths', paths)
  
  //const paths = getAllPostIds()
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params', params)
  const pageData = await getPageData(params.id as string)
  console.log('pageData', pageData)
  //const postData = await getPostData(params.id as string)
  return {
    props: {
      pageData
    }
  }
}
