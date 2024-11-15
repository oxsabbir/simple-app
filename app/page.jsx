import OtherButton from "@/app/components/Button/MainButton/OtherButton";
import MainButton from "@/app/components/Button/MainButton/MainButton";

export default function Home() {
  return (
    <>
      <div>
        <h3>The main page</h3>
        <div>
          <OtherButton />
          <MainButton />
        </div>
      </div>
    </>
  );
}
