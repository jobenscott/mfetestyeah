import { Container } from '@edx/paragon';
// import axios from '@axios';

// const ExamplePage = () => (
//   <main>
//     <Container className="py-5">
//       <h1>Example Page</h1>
//       <p>Hello world!</p>
//     </Container>
//   </main>
// );

// export default ExamplePage;

import React, { useState, useEffect } from 'react';
import { Button, Card } from '@edx/paragon';
import edxApiClient from './edxApiClient';
import axios from 'axios';

function ExamplePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    console.log('howboutnow', courses);
  }, [courses]); 

  const fetchCourses = async () => {
    try {
      // const response = await edxApiClient.get('https://base.manager.st.phoenix.edu/api/course_aggregation_api/courses/');
      const response = await axios.get("https://base.manager.st.phoenix.edu/api/course_aggregation_api/courses");
      console.log(response.data);
      setCourses(response.data);
      console.log('courses', courses, response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <main>
       <Container className="py-5">
         <h1>Example Page</h1>
         <p>Hello world!</p>
         {courses && courses.map(course => (
        <Card>
          <Card.Body>
            {/* <Card.Title>{course.course_name}</Card.Title> */}
            {course.course_name}
            {/* <Button
              variant="primary"
              onClick={() => {
                // window.location.href = course.lms_web_url;
                console.log('replace with url')
              }}
            >
              View Course
            </Button> */}
            {course.index}
            {courses && <h1>{courses[0].index}</h1>}
          </Card.Body>
        </Card>
      ))}
          
       </Container>
     </main>
    // <div>
    //   <h1>Course Progress</h1>
    //   {courses.map((course, index) => (
    //     <Card key={index}>
    //       <h1>test</h1>
    //       <Card.Body>
    //         <Card.Title>{course.display_name}</Card.Title>
    //         <Button
    //           variant="primary"
    //           onClick={() => {
    //             window.location.href = course.lms_web_url;
    //           }}
    //         >
    //           View Course
    //         </Button>
    //       </Card.Body>
    //     </Card>
    //   ))}
    // </div>
  );
}

export default ExamplePage;
