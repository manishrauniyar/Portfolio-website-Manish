import SectionTitle from "./SectionTitle";
import Card from "./Card";

function Dynamics() {
  return (
    <section id="dynamics" className="px-8 md:px-32 py-15">
      <SectionTitle title="dynamics" subtitle="Experiments & Achievements" />

      <div className="grid md:grid-cols-3 gap-8">
        <Card title="Gen-AI" desc="Built and explored projects using Generative AI APIs and prompt-based applications." />
        <Card title="Web Experiments" desc="Created interactive web projects using modern JavaScript and React." />
        <Card title="Problem solving" desc="Earned 50 Days Badge on LeetCode through consistent problem solving." />
      </div>

      <div id="roles" className="mt-28 flex items-center gap-6">
        <div className="h-px flex-1 bg-gray-300"></div>
        <p className="font-mono tracking-[8px]">Roles & impact</p>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-14">
        <Card tag="Leadership" title="CR" desc="Represented my class and coordinated with faculty during BCA." />
        <Card tag="Events" title="Volunteer" desc="Volunteered in events and assisted in execution and coordination." />
        <Card tag="Achievement" title="Academic Excellence" desc="Received award for academic excellence during BCA." />
        <Card tag="Self Dev" title="Builder" desc="Consistent investment in self-growth." />
      </div>
    </section>
  );
}

export default Dynamics;