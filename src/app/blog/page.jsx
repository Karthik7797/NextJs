import PostCard from '@/components/postCards/PostCards';
import styles from './blog.module.css'

const BlogPage = () => {
    return (
    <div className={styles.container}>
      <div className={styles.post}> 
      <PostCard/>
      </div>
      <div className={styles.post}> 
      <PostCard/>
      </div>
      <div className={styles.post}> 
      <PostCard/>
      </div>
      <div className={styles.post}> 
      <PostCard/>
      </div>
      
      </div>
    )
  };
  
  export default BlogPage;