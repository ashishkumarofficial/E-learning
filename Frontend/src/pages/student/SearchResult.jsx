import { Badge } from "@/components/ui/badge";
import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ course }) => {
  
   
  return (
    <div className=" flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 dark:border-gray-600 py-4 gap-4">
      <Link
        to={`/course-detail/${course._id}`}
        className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
      >
        <img
          src={course.courseThumbnail}
          alt="course-thumbnial"
          className="h-32 w-full md:w-56 object-cover rounded"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg md:text-xl">{course.courseTitle}</h1>
          <p className="text-sm text-gray-600">{course.subTitle==="undefined"?"NA":course.subTitle}</p>
          <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: course.description==="undefined"?"NA":course.description }}/> 
          <p className="text-sm text-gray-700">
            Admin : <span className="font-bold">{course.creator?.name}</span>{" "}
          </p>
          <div className="flex gap-3">


          <Badge className="w-fit mt-2 md:mt-0">EnrolledStudents :  {course?.enrolledStudents.length}</Badge>
          <Badge className="w-fit mt-2 md:mt-0">{course.courseLevel}</Badge>
          </div>
        </div>
      </Link>
      <div className="mt-4 md:mt-0 md:text-right w-full md:w-auto">
        <h1 className="font-bold text-lg md:text-xl">₹{course.coursePrice}</h1>
      </div>
    </div>
  );
};

export default SearchResult;
