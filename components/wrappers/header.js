import FancyLink from "@/components/wrappers/fancyLink";
import Container from "@/components/wrappers/container";
import { FixedNav } from "../FixedNav";
export default function Header({ page, setPage }) {
  return (
    <header className="py-4 mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex items-center">
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            label="Ayberk Uman"
            extraClasses="mb-1 md:mb-0 hover:bg-yellow rounded-xl p-2"
          />

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <FixedNav page={page} setPage={setPage} />
          </nav>
        </div>
      </Container>
    </header>
  );
}
