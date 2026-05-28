import Hero from "./components/Hero";
import CitiesHub from "./components/CitiesHub";
import ProfileCard from "./components/ProfileCard";

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center">

      <Hero/>

      <CitiesHub />

      <ProfileCard />

    </div>
  );
}