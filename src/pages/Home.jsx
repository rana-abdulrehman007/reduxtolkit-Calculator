import React from "react";
import HeroSection from "../component/heroSection";
import OurSuccess from "../component/ourSuccess";
import AllInOne from "../component/allInOne";
import Totc from "../component/Totc";
import TotcClassroom from "../component/totcClassroom";
import Features from "../component/Features";
import ToolForTeacher from "../component/toolForTeacher";
import Assessements from "../component/Assessements";
import ClassManagement from "../component/classManagement";
import Discussion from "../component/Discussion";
import ExploreCourses from "../component/exploreCourses";
import Testimonial from "../component/Testimonial";
import NewsAndResources from "../component/newsAndResources";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurSuccess />
      <AllInOne />
      <Totc />
      <TotcClassroom />
      <Features />
      <ToolForTeacher />
      <Assessements />
      <ClassManagement />
      <Discussion />
      <ExploreCourses />
      <Testimonial />
      <NewsAndResources />
    </>
  );
}