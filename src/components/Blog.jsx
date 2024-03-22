import React from 'react';
import { blogHeaderData, blogPostData } from '../mockData/blogData';
import blogImg from '../assets/img/blog/blog.png';
import blog1Img from '../assets/img/blog/blog1.png';
import blog2Img from '../assets/img/blog/blog2.png';
import blog3Img from '../assets/img/blog/blog3.png';
import blog4Img from '../assets/img/blog/blog4.png';

export const BlogHeader = () => {
  return (
    <h1 className="blog_header" dangerouslySetInnerHTML={{ __html: blogHeaderData.header }}></h1>
  );
};

export const FirstNews = () => {
  const { img, post } = blogPostData[0];

  const imageArray = [blogImg, blog1Img, blog2Img, blog3Img, blog4Img];
  const imageSrc = imageArray[0] || blogImg;

  return (
    <div className="first_news">
      <img src={imageSrc} alt={img.alt} /> 
      <div className="first_news__content news">
        <p className="data">{post.date}</p>
        <h3 className="blog__title">{post.header}</h3>
        <a className="left__cta" href={post.link.href}>{post.link.label}</a>
      </div>
    </div>
  );
};

export const OtherNews = ({ post, index }) => {
  const { img, post: { date, header, link } } = post;

  const imageArray = [blog1Img, blog2Img, blog3Img, blog4Img];
  const imageSrc = imageArray[index] || blogImg;

  return (
    <div className="other_news">
      <img className="news_img" src={imageSrc} alt={img.alt} /> 
      <div className="other_news__content news">
        <p className="data">{date}</p>
        <h3 className="blog__title">{header}</h3>
        <a className="read_more" href={link.href}>{link.label}</a>
      </div>
    </div>
  );
};

export const Blog = () => {
  const otherPosts = blogPostData.slice(1);

  return (
    <section className="section blog">
      <BlogHeader />
      <div className="all_news">
        <FirstNews />
        <div className="all_other_news">
          {otherPosts.map((post, index) => (
            <OtherNews key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
