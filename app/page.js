import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import CourseCard from "@/components/CourseCard";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";


export default function Home() {
  return (
    <>
    <BlogCard />
    <CourseCard />
    <ServiceCard />
    <CategoryCard />
    <ReviewCard />
    </>
  );
}

