import AnimationInView from '../../../components/AnimationInView'
import { motion } from "framer-motion";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { CarrosselItems } from './style'
import Link from 'next/link'
import links from '../../../data/links.json'

export interface AuthorProps{
    name: string,
    description: string,
    ocupation: string,
    avatar: string,
    authorID: number,
    slug: string
  }

interface CarrosselItemProps {
  author: AuthorProps
}

const Author: React.FC<CarrosselItemProps> = ({ author }) => {

  return (
    <>
      <h1 className='title'>Autor</h1>
      <CarrosselItems>
        <div className='image'>
          <Avatar  size={{ xs: 80, sm: 90, md: 100, lg: 110, xl: 130, xxl: 150 }}
          style={{ backgroundColor: '#9C69E2', verticalAlign: 'middle'}}
           icon={<UserOutlined />}
           src={author.avatar===""?null:`${links.AssetsbaseURL.authors}${author.avatar}`}>
            {author.name}
          </Avatar>
        </div>
        <div className='texts'>
          <Link href={`${links.author}/${author.slug}`}><h2>{author.name}</h2></Link>
          <h3>{author.ocupation}</h3>
          <h4>{author.description}</h4>
        </div>
      </CarrosselItems>
    </>
  )
}

export default Author
