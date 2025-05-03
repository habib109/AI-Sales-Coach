import React from 'react';
import { Container } from '../layout/Container';
import robotimg1 from '/robot01.png';
import robotimg2 from '/robot02.png';
import Image from '../layout/Image';

const courses = [
  {
    id: 1,
    title: 'Web Design Fundamentals',
    description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    duration: '4 Weeks',
    level: 'Beginner',
    author: 'John Smith',
    image: robotimg1,
  },
  {
    id: 2,
    title: 'Responsive Web Development',
    description: 'Master the techniques of building responsive websites using modern tools like Flexbox, Grid, and media queries to ensure great UX on all devices.',
    duration: '6 Weeks',
    level: 'Intermediate',
    author: 'Jane Doe',
    image: robotimg2,
  },
];

const OurCourses = () => {
  return (
    <section>
      <Container>
        <h2 className="text-[36px] md:text-[48px] font-semibold text-[#262626] text-center md:text-left">
          Our Courses
        </h2>

        <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 mb-10 gap-4">
          <p className="text-[#59595A] text-base md:text-lg max-w-4xl">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
            Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button className="py-3 px-6 bg-[#002868] text-white text-base font-medium rounded-md hover:bg-[#003b99] transition-all">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-[#F1F1F3] p-6 rounded-lg flex flex-col justify-between">
              <Image src={course.image} alt={course.title} />
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-3">
                  <span className="py-1.5 px-3 bg-white rounded-md text-sm text-[#4C4C4D] font-medium">{course.duration}</span>
                  <span className="py-1.5 px-3 bg-white rounded-md text-sm text-[#4C4C4D] font-medium">{course.level}</span>
                </div>
                <span className="text-sm text-[#262626] font-medium">By {course.author}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#262626] mt-6">{course.title}</h3>
              <p className="text-sm text-[#4C4C4D] mt-3">{course.description}</p>
              <button className="mt-6 py-3 px-4 bg-[#002868] text-white rounded-md font-medium hover:bg-[#003b99] transition-all">
                Get it Now
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurCourses;
