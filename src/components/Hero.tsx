import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { DownloadIcon } from "@radix-ui/react-icons";


export const Hero = () => {
  return (
    <section className="container text-center py-20 md:py-32 gap-10">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
             
              {/* Shadcn */}
            </span>{" "}
            {/* landing page */}Convert like Pro with
          </h1>{" "}
          {/* for{" "} */}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              {/* React */} Collection Merchandising
            </span>{" "}
            {/* developers */}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto">
          Most Powerful Merchandising Tool that's built-for-shopify. Ready to Use Stratagies for you business. Push out-of-stock products to the bottom of the page.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            href="https://github.com/leoMirandaa/shadcn-lahttps://apps.shopify.com/sortyfi-collection-managernding-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Install Now
            <DownloadIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
