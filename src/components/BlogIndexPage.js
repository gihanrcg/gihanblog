import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'
import ShareWithOthers from './ShareWithOthers'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div> 
      <header>
        <div>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h1>
        </div>
        
        <Bio />
      </header>
      <ShareWithOthers url='https://gihanblog.netlify.app/' title='Personal Blog of Gihan Siriwardhana' />
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>         
          <Link href="/about">About</Link> &bull; <Link href="/tags">Tags</Link>          
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage
