import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Merchandising Solutions  {" "}
            </span>
            at one place
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          The collection merchandiser app uses advanced data analytics and past order data to sort products on collection pages and eliminates manual work, which is often error-prone and unmanageable. You can use visual and rule-based merchandising strategies to make a great first impression on your site visitors. Rules can be based on Revenue, Profit, Tags, Size Variants, Vendor, Number of days since created or published & Google Analytics (GA4) data such as Views, Add to carts, Cart to View ratio & more
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};
