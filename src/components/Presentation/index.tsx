import * as React from "react";
import { Presentation, SectionText, SectionImg, Divider, H1 } from "./style";
import Image from 'next/image'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface PresentationProps {
  image?: string,
  title: string,
  description: string,
  date?: string,
  avatar?: any,
  views?: string,
  children?: React.ReactNode
}

export default function PresentationComponent({ image, title, description, date, avatar, views, children }: PresentationProps) {

  return (
    <>
      <Presentation>
        <SectionText>
          <div>
            <H1 layoutId={`${title}title`}>{title}</H1>
            <p>{date}</p>
            {views && <p>{views} visualizações</p>}
            <h3>{description}</h3>
          </div>
        </SectionText>
        <SectionImg whileHover={{ scale: 1.1 }} layoutId={`${title}image`}>
          {image && (
            <Image src={image} width='400px' height='400px' layout='responsive' />
          )}
          {avatar && (
            <div style={{ display: 'flex' }}>
              <Avatar size={{ xs: 80, sm: 90, md: 100, lg: 110, xl: 130, xxl: 150 }}
                style={{
                  backgroundColor: '#9C69E2',
                  verticalAlign: 'middle',
                  margin: 'auto'
                }}
                icon={<UserOutlined />}
                src={avatar === "" ? null : `${avatar}`}>
                {title}
              </Avatar>
            </div>
          )}
          {children}
        </SectionImg>
      </Presentation >
      <Divider />
    </>
  );
};
