import FancyLink from "@/components/wrappers/fancyLink";
import Container from "@/components/wrappers/container";
import { FixedNav } from "../FixedNav";
export default function Header({ pages }) {
  return (
    <header className="py-4 bg-gray-200 mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex items-center">
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            label="Ayberk Uman"
            extraClasses="mb-1 md:mb-0"
          />

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <FixedNav pages={pages} />
          </nav>
        </div>
      </Container>
    </header>
  );
}
