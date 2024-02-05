import React from 'react';
import { CourseDetailItemWrapper } from './course-detail-item.styles';

interface CourseDetailItemProps {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

const CourseDetailItem: React.FC<CourseDetailItemProps> = ({
  thumbnail,
  title,
  description,
}) => {
  return (
    <CourseDetailItemWrapper>
      <div className="edu--course-detail-item-thumbnail">
        <img src={thumbnail} />
      </div>
      <div className="edu--course-detail-item-info">
        <div className="edu--course-detail-item-info-title">{title}</div>
        <div
          className="edu--course-detail-item-info-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </CourseDetailItemWrapper>
  );
};

export default CourseDetailItem;
