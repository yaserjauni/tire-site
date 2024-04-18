import { HomePage } from "./_components/homePage";
import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Home() {
  return (
    <main className="overflow-x-visible ">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
