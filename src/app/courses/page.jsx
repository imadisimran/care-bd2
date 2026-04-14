import CourseHero from "@/components/courses/CourseHero";
import CourseStats from "@/components/courses/CourseStats";
import AvailableCourses from "@/components/courses/AvailableCourses";
import FeaturedCourses from "@/components/courses/FeaturedCourses";
import CourseCTA from "@/components/courses/CourseCTA";

export default function Courses() {
  return (
    <div className="py-section px-6 max-w-7xl mx-auto space-y-section">
      <CourseHero />
      <CourseStats />
      <AvailableCourses />
      <FeaturedCourses />
      <CourseCTA />
    </div>
  );
}
